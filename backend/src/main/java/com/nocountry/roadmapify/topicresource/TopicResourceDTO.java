package com.nocountry.roadmapify.topicresource;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TopicResourceDTO {
    private String title;
    private String link;
}
