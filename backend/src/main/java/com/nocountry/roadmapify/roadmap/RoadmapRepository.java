package com.nocountry.roadmapify.roadmap;


import com.nocountry.roadmapify.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface RoadmapRepository extends JpaRepository<Roadmap, Long> {
    Optional<Roadmap> findByRoadmapName(String roadmapName);
}
