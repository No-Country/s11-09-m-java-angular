package com.nocountry.roadmapify.topic;

import java.util.List;

public interface TopicService {

    List<TopicResponse> getAll();
    TopicResponse getAllByParent(Long id);

    List<ParentDTO> getAllParents();

    void save(Topic topic);

    void deleteTopicById(Long id);
}
