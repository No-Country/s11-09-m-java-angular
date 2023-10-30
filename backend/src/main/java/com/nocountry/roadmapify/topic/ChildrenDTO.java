package com.nocountry.roadmapify.topic;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.hateoas.RepresentationModel;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChildrenDTO extends RepresentationModel<ChildrenDTO> {

    private String name;
    private String description;
    private ExperienceLevel experienceLevel;
    private String topicRole;
}
