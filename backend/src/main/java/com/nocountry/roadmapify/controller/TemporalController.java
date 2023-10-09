package com.nocountry.roadmapify.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TemporalController {

    @GetMapping("/")
    public String home() {
        return "Hello, Home";
    }

    @GetMapping("/secured")
    public String secured() {
        return "Hello, Secured";
    }
}
