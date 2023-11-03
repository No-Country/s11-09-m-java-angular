package com.nocountry.roadmapify.user;

import com.nocountry.roadmapify.roadmap.Roadmap;
import com.nocountry.roadmapify.roadmap.RoadmapDTO;
import com.nocountry.roadmapify.roadmap.RoadmapRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;
import java.util.Set;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final RoadmapRepository roadmapRepository;
    private final ModelMapper mapper;

    public Roadmap assignUserToRoadmap(RoadmapDTO roadmapDTO, Long user_id) {
        Roadmap roadmap = mapper.map(roadmapDTO, Roadmap.class);
        User user = userRepository.findById(user_id).orElseThrow(() -> new UsernameNotFoundException("Error, user not found"));
        roadmap.setUserDoingRoadmap(user);
        Set<Roadmap> roadmapSet = user.getRoadmaps();
        roadmapSet.add(roadmap);
        user.setRoadmaps(roadmapSet);
        // Actualizo el usuario con el roadmap que empezo
        userRepository.save(user);
        // creo el roadmap personalizado para el usuario y lo guardo
        roadmap.setCompleted(false);
        roadmap.setStart_date(new Date(System.currentTimeMillis()));
        roadmapRepository.save(roadmap);
        return roadmap;
    }

    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }


    public UserDTO getByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(
                ()->new UsernameNotFoundException("User doesn't exists with username: " + username)
        );

        return mapper.map(user,UserDTO.class);
    }
}
