package com.nocountry.roadmapify.topic;

import com.nocountry.roadmapify.topicresource.TopicResource;
import com.nocountry.roadmapify.topicresource.TopicResourceRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

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
        UriComponentsBuilder builder;
        Link link;
        for (Topic topic : topics) {
            TopicResponse response = modelMapper.map(topic,TopicResponse.class);
            builder = UriComponentsBuilder.fromUri(WebMvcLinkBuilder
                    .linkTo(methodOn(TopicController.class)
                            .getById(topic.getId()))
                    .withSelfRel().toUri()).scheme("https");


            link = Link.of(builder.build().toUriString());
            response.add(link);
            response.add( //to links of RepresentationModel
                    WebMvcLinkBuilder
                            .linkTo(methodOn(TopicController.class) // method on controller
                             .getById(topic.getId())) //call to method with necessary parameters
                            .withSelfRel()); //indicates rel
            if(topic.getParent()!=null){
                response.setParent(modelMapper.map(topic.getParent(),ParentDTO.class));
                builder = UriComponentsBuilder.fromUri(WebMvcLinkBuilder.linkTo(methodOn(TopicController.class).getById(topic.getParent().getId())).toUri()).scheme("https");


                link = Link.of(builder.build().toUriString());
                response.add(link);
            }
            topicRepository.findAllByParentId(topic.getId()).forEach(
                    child -> {
                        ChildrenDTO childDto = modelMapper.map(child, ChildrenDTO.class);
                        response.addChild(childDto);
                        UriComponentsBuilder builder2 = UriComponentsBuilder.fromUri(WebMvcLinkBuilder.linkTo(methodOn(TopicController.class).getById(child.getId())).withSelfRel().toUri()).scheme("https");


                        Link link2 = Link.of(builder2.build().toUriString());
                        response.add(link2);
                        childDto.add(WebMvcLinkBuilder.linkTo(methodOn(TopicController.class).getById(child.getId())).withSelfRel());
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
            ParentDTO response = modelMapper.map(parent,ParentDTO.class);
            responses.add(response);
            UriComponentsBuilder builder = UriComponentsBuilder.fromUri(WebMvcLinkBuilder.linkTo(methodOn(TopicController.class).getById(parent.getId())).withSelfRel().toUri()).scheme("https");


            Link link = Link.of(builder.build().toUriString());
            response.add(link);

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
    public String setRole(Topic topic){
        if (topic.getParent() != null){
            return topic.getTopicRole().getName().concat(":"+topic.getParent().getName().toLowerCase());
        }
        return topic.getTopicRole().getName();
    }

    @Override
    public void deleteTopicById(Long id) {
        topicRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Topic doesn't exist with id: "+ id)
        );

        topicRepository.deleteById(id);
    }

    private TopicResponse makeTopicResponse(Topic topic){
        TopicResponse response = modelMapper.map(topic,TopicResponse.class);
        if(topic.getParent()!=null){
            response.setTopicRole(setRole(topic));
            response.setParent(modelMapper.map(topic.getParent(),ParentDTO.class));
        }
        for (Topic child : topicRepository.findAllByParentId(topic.getId())) {
            ChildrenDTO childDto = modelMapper.map(child, ChildrenDTO.class);
            childDto.setTopicRole(setRole(child));
            response.addChild(childDto);

            UriComponentsBuilder builder = UriComponentsBuilder.fromUri(WebMvcLinkBuilder.linkTo(methodOn(TopicController.class).getById(child.getId())).withSelfRel().toUri()).scheme("https");


            Link link = Link.of(builder.build().toUriString());
            childDto.add(link);
        }


        return response;
    }




}
