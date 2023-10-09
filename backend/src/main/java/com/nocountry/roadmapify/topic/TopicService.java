package com.nocountry.roadmapify.topic;

import java.util.List;

public interface TopicService {

    List<TopicResponse> getAll();
    TopicResponse getById(Long id);
    TopicResponse getByName(String name);

    List<ParentDTO> getAllParents();

    void save(Topic topic);

    void deleteTopicById(Long id);
}
