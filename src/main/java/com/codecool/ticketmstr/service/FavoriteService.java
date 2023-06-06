package com.codecool.ticketmstr.service;

import com.codecool.ticketmstr.model.Favorites;
import com.codecool.ticketmstr.repository.FavoritesRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class FavoriteService {

    @Autowired
    private FavoritesRepository favoritesRepository;


    public FavoriteService(FavoritesRepository favoritesRepository) {
        this.favoritesRepository = favoritesRepository;

    }
    public Favorites newFavorite(@RequestBody Favorites newFavorite) {

        return favoritesRepository.save(newFavorite);
    }

    public List<Favorites> getAllFavorites() {
        return favoritesRepository.findAll();
    }
    @Transactional
    public String deleteFavorite(@PathVariable String id){
//        if(!favoritesRepository.existsByEventId(id)){
//            throw new UserNotFoundException(1L);
//        }
        favoritesRepository.deleteByEventId(id);
        return  "The favorite ticket with id "+id+" has been deleted success.";
    }
}
