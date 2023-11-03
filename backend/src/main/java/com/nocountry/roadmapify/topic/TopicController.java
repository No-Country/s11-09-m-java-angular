package com.nocountry.roadmapify.topic;

import com.nocountry.roadmapify.topicresource.TopicResourceDTO;
import jakarta.validation.Valid;
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


    @GetMapping("/topicId/{id}")
    public ResponseEntity<TopicResponse> getById(@PathVariable Long id){
        return ResponseEntity.status(200).body(topicService.getById(id));
    }
    @GetMapping("/name/{name}")
    public ResponseEntity<TopicResponse> getByName(@PathVariable String name){
        return ResponseEntity.status(200).body(topicService.getByName(name));
    }

    @GetMapping
    public ResponseEntity<List<ParentDTO>> getAllParents(){
        return ResponseEntity.status(200).body(topicService.getAllParents());
    }


    @PostMapping
    public ResponseEntity<HttpStatus> save(@RequestBody @Valid Topic topic){
        topicService.save(topic);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id){
        topicService.deleteTopicById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{id}/resource")
    public ResponseEntity<HttpStatus> addChild(@PathVariable Long id, @RequestBody List<TopicResourceDTO> resources){
        topicService.addChild(id,resources);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HttpStatus> addChild(@PathVariable Long id, @RequestBody TopicDTO topicDTO){
        topicService.updateTopic(id,topicDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
