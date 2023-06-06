package com.codecool.ticketmstr.controller;

import com.codecool.ticketmstr.model.Favorites;
import com.codecool.ticketmstr.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class FavoritesController {


    @Autowired
    private FavoriteService favoriteService;

    public FavoritesController(FavoriteService favoriteService, PasswordEncoder encoder) {
        this.favoriteService = favoriteService;
    }

    @PostMapping("/favorite")
    Favorites newFavorite(@RequestBody Favorites newFavorite) {
        return favoriteService.newFavorite(newFavorite);
    }

    @GetMapping("/favorites")
    List<Favorites> getAllFavorites() {
        return favoriteService.getAllFavorites();
    }

    @DeleteMapping("/favorite/{id}")
    String deleteFavorite(@PathVariable String id){
       return favoriteService.deleteFavorite(id);
    }

}
