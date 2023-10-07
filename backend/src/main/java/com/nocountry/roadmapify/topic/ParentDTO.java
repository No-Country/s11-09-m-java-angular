package com.nocountry.roadmapify.topic;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParentDTO {
    private Long id;
    private String name;
    private String description;
    private Boolean isRoot;
}
