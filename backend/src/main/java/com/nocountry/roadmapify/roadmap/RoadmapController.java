package com.nocountry.roadmapify.roadmap;

import com.nocountry.roadmapify.Exception.RoadMapNotFoundException;
import com.nocountry.roadmapify.topic.ParentDTO;
import com.nocountry.roadmapify.topic.Topic;
import com.nocountry.roadmapify.topic.TopicResponse;
import com.nocountry.roadmapify.topic.TopicService;
import com.nocountry.roadmapify.user.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/roadmaps")
@RequiredArgsConstructor
public class RoadmapController {
    private final RoadmapService roadmapService;
    private final UserService userService;
    private final ModelMapper mapper;

    @GetMapping("/defaultRoadmaps")
    public ResponseEntity<List<Roadmap>> getAll(){
        return ResponseEntity.status(200).body(roadmapService.getDefaultRoadmaps());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Roadmap> getById(@PathVariable Long id){
        return ResponseEntity.status(200).body(roadmapService.getById(id).orElseThrow());
    }

    @PostMapping("/")
    public ResponseEntity<HttpStatus> save(@RequestBody @Valid RoadmapDTO roadmapDTO){
        roadmapService.save(roadmapDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id){
        roadmapService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/getRoadmapsOfUser/{id}")
    public ResponseEntity<List<Roadmap>> getRoadmapByUserId(@PathVariable Long id) {
        return ResponseEntity.ok().body(roadmapService.getRoadmapsOfUser(id));
    }

    @GetMapping("/{user_id}/assignUserToRoadmap/{id}")
    public Roadmap startRoadmap(@PathVariable Long user_id, @PathVariable Long id) throws RoadMapNotFoundException {
        Roadmap roadmap = roadmapService.getById(id).orElseThrow(() -> new RoadMapNotFoundException("Error, roadmap not found"));
        RoadmapDTO roadmapDTO = mapper.map(roadmap, RoadmapDTO.class);
        roadmap = userService.assignUserToRoadmap(roadmapDTO, user_id);
        return roadmap;
    }
}
