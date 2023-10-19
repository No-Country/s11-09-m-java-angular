package com.nocountry.roadmapify.topic;

import lombok.Getter;

@Getter
public enum ExperienceLevel {
    BEGINNER("beginner"),
    INTERMEDIATE("intermediate"),
    ADVANCED("advanced");

    private final String name;
    ExperienceLevel(String name){
        this.name = name;
    }

}
