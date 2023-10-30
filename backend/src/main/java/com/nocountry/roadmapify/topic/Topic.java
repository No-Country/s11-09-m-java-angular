package com.nocountry.roadmapify.topic;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.nocountry.roadmapify.topicresource.TopicResource;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;
import jakarta.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "topics")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "name field is required")
    private String name;
    @Column( columnDefinition = "TEXT")
    private String description;
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Topic parent;
    @NotNull(message = "isRoot field is required")
    private Boolean isRoot;
    @OneToMany(mappedBy = "topic",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    @JsonIgnoreProperties("topic")
    private List<TopicResource> resources;
    @Enumerated(EnumType.STRING)
    private ExperienceLevel experienceLevel;
    @Enumerated(EnumType.STRING)
    private TopicRole topicRole;

    public void addResource(TopicResource resource){
        if(resources==null){
            resources= new ArrayList<>();
        }
        resources.add(resource);
    }
    @Override
    public final boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
        Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
        if (thisEffectiveClass != oEffectiveClass) return false;
        Topic topic = (Topic) o;
        return getId() != null && Objects.equals(getId(), topic.getId());
    }

    @Override
    public final int hashCode() {
        return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
    }

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", parent=" + parent +
                ", isRoot=" + isRoot +
                '}';
    }
}
