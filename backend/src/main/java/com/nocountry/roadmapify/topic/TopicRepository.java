package com.nocountry.roadmapify.topic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TopicRepository extends JpaRepository<Topic,Long> {
    List<Topic> findAllByParentId(Long id);

    @Query("select t from Topic t where t.parent.name = ?1")
    List<Topic> findAllByParentIgnoreCase(String name);

    Optional<Topic> findByNameIgnoreCase(String name);
    List<Topic> findAllByIsRootTrue();
}
