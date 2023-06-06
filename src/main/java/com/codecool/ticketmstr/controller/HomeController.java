package com.codecool.ticketmstr.controller;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/home")
public class HomeController {


    @GetMapping
    public String home(Principal principal){

        return "Hello " + principal.getName()  ;
    }
}
