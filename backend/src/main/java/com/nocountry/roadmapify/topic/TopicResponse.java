package com.nocountry.roadmapify.topic;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TopicResponse {

    private Long id;
    private String name;
    private String description;
    private Boolean isRoot;
    private ParentDTO parent;
    private List<ChildrenDTO> children;

    public void addChild(ChildrenDTO child){
        if(children ==null){
            children = new ArrayList<>();
        }
        children.add(child);
    }

}
