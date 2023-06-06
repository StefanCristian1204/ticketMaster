package com.codecool.ticketmstr.controller;

import com.codecool.ticketmstr.model.Users;
import com.codecool.ticketmstr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {


    @Autowired
    private UserService userService;

private PasswordEncoder encoder;

    public UserController(UserService userService, PasswordEncoder encoder) {
        this.userService = userService;
        this.encoder = encoder;
    }

    @PostMapping("/user")
   /* @PreAuthorize("hasRole('ROLE_ADMIN')")*/
    Users newUser(@RequestBody Users newUser) {
        newUser.setPassword(encoder.encode(newUser.getPassword()));
        return userService.newUser(newUser);
    }

    @GetMapping("/users")
   /* @PreAuthorize("hasRole('ROLE_USER')")*/
    List<Users> getAllUsers() {
        return userService.getAllUsers();
    }
   /* @PreAuthorize("hasRole('ROLE_USER')")*/
    @GetMapping("/user/{id}")
    Users getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
   /* @PreAuthorize("hasRole('ROLE_ADMIN')")*/
    @PutMapping("/user/{id}")
    Users updateUser(@RequestBody Users newUser, @PathVariable Long id) {
        return userService.updateUser(newUser,id);
    }
/*    @PreAuthorize("hasRole('ROLE_ADMIN')")*/
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
       return userService.deleteUser(id);
    }



}
