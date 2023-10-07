package com.nocountry.roadmapify.topic;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/topics")
@RequiredArgsConstructor
public class TopicController {

    private final TopicService topicService;

    @GetMapping("/all")
    public ResponseEntity<List<TopicResponse>> getAll(){
        return ResponseEntity.status(200).body(topicService.getAll());
    }
    @GetMapping("{parentId}")
    public ResponseEntity<TopicResponse> getRoadmapByParenId(@PathVariable Long parentId){
        return ResponseEntity.status(200).body(topicService.getAllByParent(parentId));
    }

    @GetMapping
    public ResponseEntity<List<ParentDTO>> getAllParents(){
        return ResponseEntity.status(200).body(topicService.getAllParents());
    }

    @PostMapping
    public ResponseEntity<HttpStatus> save(@RequestBody Topic topic){
        topicService.save(topic);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id){
        topicService.deleteTopicById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
