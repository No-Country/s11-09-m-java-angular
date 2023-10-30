package com.nocountry.roadmapify.topic;

import lombok.Getter;

@Getter
public enum TopicRole {
    LABEL("label"),
    GROUP_MEMBER("group-member");

    private final String name;
    TopicRole(String name){
        this.name = name;
    }
}
