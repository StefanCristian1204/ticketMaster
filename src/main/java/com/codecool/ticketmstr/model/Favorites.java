package com.codecool.ticketmstr.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Favorites {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String location;
    private String eventHour;
    private String eventDate;
    private String city;
    private String state;
    private String country;
    private String street;
    private String priceRange;
    private String postalCode;
    private String promoter;
    private String eventType;
    private String attraction;
    private String upcomingEvents;
    private String imageUrl;
    private String eventId;
    private boolean child;

}
