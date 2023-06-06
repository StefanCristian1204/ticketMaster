package com.codecool.ticketmstr.repository;

import com.codecool.ticketmstr.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users,Long> {
    Optional<Users> findByUsername(String username);
}
