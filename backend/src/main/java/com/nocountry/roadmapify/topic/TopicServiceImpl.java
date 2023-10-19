package com.nocountry.roadmapify.topic;

import com.nocountry.roadmapify.topicresource.TopicResource;
import com.nocountry.roadmapify.topicresource.TopicResourceDTO;
import com.nocountry.roadmapify.topicresource.TopicResourceRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TopicServiceImpl implements TopicService{

    private final TopicRepository topicRepository;
    private final ModelMapper modelMapper;
    private final TopicResourceRepository resourceRepository;
    @Override
    @Transactional
    public List<TopicResponse> getAll() {
        var topics = topicRepository.findAll();
        List<TopicResponse> responses = new ArrayList<>(topics.size());
        for (Topic topic : topics) {
            TopicResponse response = modelMapper.map(topic,TopicResponse.class);
            response.add( //to links of RepresentationModel
                    WebMvcLinkBuilder
                            .linkTo(WebMvcLinkBuilder.methodOn(TopicController.class) // method on controller
                             .getById(topic.getId())) //call to method with necessary parameters
                            .withSelfRel()); //indicates rel
            if(topic.getParent()!=null){
                response.setParent(modelMapper.map(topic.getParent(),ParentDTO.class));
                response.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(TopicController.class).getById(topic.getParent().getId())).withRel("parent"));
            }
            topicRepository.findAllByParentId(topic.getId()).forEach(
                    child -> {
                        ChildrenDTO childDto = modelMapper.map(child, ChildrenDTO.class);
                        response.addChild(childDto);
                        childDto.add(WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(TopicController.class).getById(child.getId())).withSelfRel());
                    }

            );
            responses.add(response);
        }

        return responses;
    }
    @Override
    public List<ParentDTO> getAllParents(){
        List<Topic> parents = topicRepository.findAllByIsRootTrue();
        List<ParentDTO> responses = new ArrayList<>(parents.size());
        for (Topic parent : parents) {
            responses.add(modelMapper.map(parent,ParentDTO.class));
        }
        return responses;
    }

    @Override
    public TopicResponse getById(Long id) {
        Topic topic = topicRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Parent doesn't exist with id: "+ id)
        );
        return makeTopicResponse(topic);
    }
    @Override
    public TopicResponse getByName(String name) {
        String formattedName = name.replace("-"," ");
        Topic topic = topicRepository.findByNameIgnoreCase(formattedName).orElseThrow(
                ()->new RuntimeException("Parent doesn't exists with name: " +formattedName)
        );

        return makeTopicResponse(topic);
    }


    @Override
    @Transactional(rollbackFor = Exception.class)
    public void save(Topic topic) {

        List<TopicResource> resources = new ArrayList<>();
        if(topic.getResources()!= null){
        for (TopicResource resource : topic.getResources()) {
            resources.add(resourceRepository.save(resource));
        }
        }

        if (topic.getParent()!=null) {
        Long parentId = topic.getParent().getId();
        Topic parent = topicRepository.findById(parentId).orElseThrow(
                ()->new RuntimeException("Parent doesn't exist with id: " +parentId)
        );
        //parent exist, set to new topic
        topic.setParent(parent);
        }
        topic.setResources(resources);
        //save new topic
        Topic newTopic = topicRepository.save(topic);

        //update resources
        for (TopicResource resource : resources) {
            resource.setTopic(newTopic);
            resourceRepository.save(resource);
        }


    }

    @Override
    public void deleteTopicById(Long id) {
        topicRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Topic doesn't exist with id: "+ id)
        );

        topicRepository.deleteById(id);
    }

    private TopicResponse makeTopicResponse(Topic topic){
//        TopicResponse response = TopicResponse.builder()
//                .isRoot(topic.getIsRoot())
//                .name(topic.getName())
//                .description(topic.getDescription())
//                .experienceLevel(topic.getExperienceLevel())
//                .build();
        TopicResponse response = modelMapper.map(topic,TopicResponse.class);
        if(topic.getParent()!=null){
            response.setParent(modelMapper.map(topic.getParent(),ParentDTO.class));
        }
        for (Topic child : topicRepository.findAllByParentId(topic.getId())) {
            response.addChild(modelMapper.map(child, ChildrenDTO.class));
        }

        return response;
    }


}
