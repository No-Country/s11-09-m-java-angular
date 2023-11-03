package com.nocountry.roadmapify.user;

import com.nocountry.roadmapify.Exception.RoadMapNotFoundException;
import com.nocountry.roadmapify.roadmap.Roadmap;
import com.nocountry.roadmapify.roadmap.RoadmapDTO;
import com.nocountry.roadmapify.roadmap.RoadmapService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository repository;


    @GetMapping("/")
    public ResponseEntity<List<User>> getAll(){
        return ResponseEntity.ok().body(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return ResponseEntity.ok().body(userService.getById(id).orElseThrow());
    }
    @GetMapping("/username/{username}")
    public ResponseEntity<?> getByUsername(@PathVariable String username, @AuthenticationPrincipal UserDetails userDetails) {
        return username.equals(userDetails.getUsername()) ?
                ResponseEntity.ok().body(userService.getByUsername(username)) : ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
    }




}
