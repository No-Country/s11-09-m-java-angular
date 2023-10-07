package com.nocountry.roadmapify.topic;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TopicServiceImpl implements TopicService{

    private final TopicRepository topicRepository;
    private final ModelMapper modelMapper;
    @Override
    public List<TopicResponse> getAll() {
        var topics = topicRepository.findAll();
        List<TopicResponse> responses = new ArrayList<>(topics.size());
        for (Topic topic : topics) {
            TopicResponse response = TopicResponse.builder()
                    .isRoot(topic.getIsRoot())
                    .name(topic.getName())
                    .description(topic.getDescription())
                    .id(topic.getId())
                    .build();
            if(topic.getParent()!=null){
                response.setParent(modelMapper.map(topic.getParent(),ParentDTO.class));
            }
            for (Topic child : topic.getChildren()) {
                response.addChild(modelMapper.map(child, ChildrenDTO.class));
            }
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
    public TopicResponse getAllByParent(Long id) {
        Topic parent = topicRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Parent doesn't exists.")
        );
        TopicResponse response = TopicResponse.builder()
                .isRoot(parent.getIsRoot())
                .name(parent.getName())
                .description(parent.getDescription())
                .id(parent.getId())
                .build();

            if(parent.getParent()!=null){
                response.setParent(modelMapper.map(parent.getParent(),ParentDTO.class));
            }
            for (Topic child : parent.getChildren()) {
                response.addChild(modelMapper.map(child, ChildrenDTO.class));
        }
        return response;
    }


    @Override
    @Transactional(rollbackFor = Exception.class)
    public void save(Topic topic) {

        if (topic.getParent()!=null) {

        Topic parent = topicRepository.findById(topic.getParent().getId()).orElseThrow(
                ()->new RuntimeException("Parent doesn't exists")
        );

        //parent exist, set to new topic
        topic.setParent(parent);
        //set this new Topic to parent
        parent.addChild(topic);
        //update parent
        topicRepository.save(parent);
        }
        //save child
        topicRepository.save(topic);
    }

    @Override
    public void deleteTopicById(Long id) {
        topicRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Topic doesn't exists")

        );

        topicRepository.deleteById(id);
    }



}
