package com.nocountry.roadmapify.roadmap;

import com.nocountry.roadmapify.user.User;
import com.nocountry.roadmapify.user.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RoadmapService {
    private final RoadmapRepository roadmapRepository;
    private final UserRepository userRepository;
    private final ModelMapper mapper;

    public void save (RoadmapDTO roadmapDTO) {
        Roadmap roadmap = mapper.map(roadmapDTO, Roadmap.class);
        roadmapRepository.save(roadmap);
    }

    public Optional<Roadmap> getById(Long id) {
        return roadmapRepository.findById(id);
    }

    public Optional<Roadmap> getByName(String roadmapName) {
        return roadmapRepository.findByRoadmapName(roadmapName);
    }

    public List<Roadmap> findAll() {
        return roadmapRepository.findAll();
    }

    public List<Roadmap> getDefaultRoadmaps() {
        List<Roadmap> allRoadmaps = roadmapRepository.findAll();
        List<Roadmap> response = new ArrayList<>();
        for (Roadmap roadmap:
             allRoadmaps) {
            if (roadmap.getUserDoingRoadmap() == null) {
                response.add(roadmap);
            }
        }
        return response;
    }

    public List<Roadmap> getRoadmapsOfUser(Long userId) {
        List<Roadmap> allRoadmaps = roadmapRepository.findAll();
        List<Roadmap> response = new ArrayList<>();
        for (Roadmap roadmap:
                allRoadmaps) {
            if (roadmap.getUserDoingRoadmap().getId() == userId) {
                response.add(roadmap);
            }
        }
        return response;
    }

    public void deleteById(Long id) {
        roadmapRepository.deleteById(id);
    }


}
