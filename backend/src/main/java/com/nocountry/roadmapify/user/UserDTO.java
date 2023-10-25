package com.nocountry.roadmapify.user;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class UserDTO {
    private Long id;
    private String username;
    private String lastname;
    private String firstname;
}
