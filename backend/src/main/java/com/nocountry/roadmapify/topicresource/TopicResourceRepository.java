package com.nocountry.roadmapify.topicresource;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TopicResourceRepository extends JpaRepository<TopicResource, Long> {
    List<TopicResource> findAllByTopicId(Long id);
}