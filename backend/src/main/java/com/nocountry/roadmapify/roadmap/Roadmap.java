package com.nocountry.roadmapify.roadmap;

import com.nocountry.roadmapify.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Roadmap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String roadmapName;
    private String goal;
    @Column(nullable = true)
    private Date start_date;
    @Column(nullable = true)
    private Date completion_date;
    private Boolean completed;
    @ManyToOne
    @JoinColumn(name="user_id", nullable=true)
    private User userDoingRoadmap;
//    @ManyToOne
//    private Set<Topic> topicsOnRoadmap;
}
