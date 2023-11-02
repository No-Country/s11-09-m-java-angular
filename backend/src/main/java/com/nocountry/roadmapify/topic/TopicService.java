package com.nocountry.roadmapify.topic;

import com.nocountry.roadmapify.topicresource.TopicResourceDTO;

import java.util.List;

public interface TopicService {

    TopicResponse getById(Long id);
    TopicResponse getByName(String name);

    List<ParentDTO> getAllParents();

    void save(Topic topic);

    void deleteTopicById(Long id);

    void updateTopic(Long id, TopicDTO topicDTO);

    void addChild(Long id,List<TopicResourceDTO> resources);
}
