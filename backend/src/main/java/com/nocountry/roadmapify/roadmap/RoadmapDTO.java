package com.nocountry.roadmapify.roadmap;

import com.nocountry.roadmapify.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoadmapDTO {
    private String roadmapName;
    private String goal;
}
