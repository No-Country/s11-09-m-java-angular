package com.nocountry.roadmapify.topic;

import com.nocountry.roadmapify.topicresource.TopicResource;
import com.nocountry.roadmapify.topicresource.TopicResourceDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.hateoas.RepresentationModel;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParentDTO extends RepresentationModel<ParentDTO> {
    private String name;
    private String description;
    private Boolean isRoot;
    private List<TopicResourceDTO> resources;
    private ExperienceLevel experienceLevel;
    private String topicRole;

    public void addResource(TopicResourceDTO resource){
        if(resources==null){
            resources = new ArrayList<>();
        }
        resources.add(resource);
    }

}
