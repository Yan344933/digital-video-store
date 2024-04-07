/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.digitalvideostore.controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.digitalvideostore.CustomizedResponse;
import com.example.digitalvideostore.models.Movie;
import com.example.digitalvideostore.services.MovieService;

/**
 *
 * @author yan
 */
@RestController
@CrossOrigin
public class MovieController {

    @Autowired
    private MovieService service;

    @GetMapping("/")
    public ResponseEntity getAll(@RequestParam(value = "title", required = false, defaultValue = "") String title) {

        CustomizedResponse res;

        if (!title.isBlank()) {
            try {
                List<Movie> movies = service.getMoviesByTitle(title);
                res = new CustomizedResponse("get movies with title " + title, Collections.singletonList(movies));
            } catch (Exception e) {
                res = new CustomizedResponse(e.getMessage());
                return new ResponseEntity(res, HttpStatus.NOT_FOUND);
            }

        } else {
            res = new CustomizedResponse("get all movies", Collections.singletonList(service.getAll()));
        }

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @GetMapping("/movies")
    public ResponseEntity getMovies() {

        CustomizedResponse res;
        try {
            res = new CustomizedResponse("Movies ", Collections.singletonList(service.getAllByType("movie")));
        } catch (Exception e) {

            res = new CustomizedResponse(e.getMessage());
            return new ResponseEntity(res, HttpStatus.NOT_FOUND);

        }

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @GetMapping("/tv")
    public ResponseEntity getTVs() {

        CustomizedResponse res;
        try {
            res = new CustomizedResponse("Movies ", Collections.singletonList(service.getAllByType("TV")));
        } catch (Exception e) {

            res = new CustomizedResponse(e.getMessage());
            return new ResponseEntity(res, HttpStatus.NOT_FOUND);

        }

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @GetMapping("/featured")
    public ResponseEntity getFeatured(@RequestParam(required = false) String type) {

        CustomizedResponse res = new CustomizedResponse("get featured movies with type " + type, Collections.singletonList(service.getFeaturedByType(type)));

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @GetMapping("/movies/{id}")
    public ResponseEntity getMovie(@PathVariable("id") String id) {

        CustomizedResponse res;

        try {
            res = new CustomizedResponse("Movie with id " + id, Collections.singletonList(service.getAllById(id)));

        } catch (Exception e) {

            res = new CustomizedResponse(e.getMessage(), null);

            return new ResponseEntity(res, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @PostMapping(value = "/movies", consumes = {
        MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity createMovies(@RequestBody Movie movie) {

        CustomizedResponse res;

        if (movie.getTitle() == null || movie.getDescription() == null || movie.getBigPoster() == null
                || movie.getDescription() == null || movie.getSmallPoster() == null || movie.getType() == null
                || movie.getPurchasePrice() == 0.0d || movie.getRentalPrice() == 0.0d) {
            res = new CustomizedResponse("Missing information", null);
        } else {

            try {
                service.insertMovies(movie);
                res = new CustomizedResponse("Create movie with title " + movie.getTitle(), null);
            } catch (Exception e) {
                res = new CustomizedResponse(e.getMessage(), null);
                return new ResponseEntity(res, HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity(res, HttpStatus.OK);
    }

    @PutMapping(value = "/movies/{id}", consumes = {
        MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity updateMovies(@PathVariable("id") String id, @RequestBody Movie movie) {

        CustomizedResponse res;
        if (movie.getTitle() == null || movie.getDescription() == null || movie.getBigPoster() == null
                || movie.getDescription() == null || movie.getSmallPoster() == null || movie.getType() == null
                || movie.getPurchasePrice() == 0.0d || movie.getRentalPrice() == 0.0d) {
            res = new CustomizedResponse("Missing information", null); 
        }else {

            try {
                res = new CustomizedResponse("Movie with id " + id + " is updated", Collections.singletonList(service.updateMovie(id, movie)));
            } catch (Exception e) {
                res = new CustomizedResponse(e.getMessage(), null);

                return new ResponseEntity(res, HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity(res, HttpStatus.OK);
    }

    @DeleteMapping("/movies/{id}")
    public ResponseEntity deleteMovie(@PathVariable("id") String id) {

        CustomizedResponse res;

        try {

            service.deleteById(id);
            res = new CustomizedResponse("Movie with id " + id + "is deleted");

        } catch (Exception e) {
            res = new CustomizedResponse(e.getMessage(), null);

            return new ResponseEntity(res, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(res, HttpStatus.OK);
    }

}
