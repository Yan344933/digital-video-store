/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.digitalvideostore.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.example.digitalvideostore.models.Movie;
import com.example.digitalvideostore.models.MovieRepository;

/**
 *
 * @author yan
 */
@Service
public class MovieService {

    @Autowired
    private MovieRepository repo;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Movie> getAll(){
        return repo.findAll();
    }

    public List<Movie> getAllByType(String type){
        Query query = new Query();
        query.addCriteria(Criteria.where("type").is(type));
   
        return mongoTemplate.find(query, Movie.class);
    }

    public List<Movie> getMoviesByTitle(String title) throws Exception{

        Query query = new Query();
        query.addCriteria(Criteria.where("title").regex(title));
   
        List<Movie> movies =  mongoTemplate.find(query, Movie.class);

        if(movies.isEmpty())
            throw new Exception("No movie with title " + title);
        
        return movies;
        
    }

    public void insertMovies(Movie movie){

        repo.insert(movie);
    }

    public Optional<Movie> getAllById(String Id) throws Exception{

        Optional<Movie> movie = repo.findById(Id);

        if (!movie.isPresent())
            throw new Exception("Movie with " + Id + " is not found");
            
        return movie;        
    }

    public List<Movie> getFeaturedByType(String type){

        Query query = new Query();
        query.addCriteria(Criteria.where("featured").is(true));
        if (!(type == null))
            query.addCriteria(Criteria.where("type").is(type));

        System.out.println(query.toString());
        return mongoTemplate.find(query, Movie.class);
    }

    public void deleteById(String id) throws Exception{
        Optional<Movie> movie = getAllById(id);

        if (!movie.isPresent())
            throw new Exception("Movie with " + id + " is not found");
        
        repo.deleteById(id);
    }

    public Movie updateMovie(String id, Movie movie) throws Exception{

        Optional<Movie> orgMovie = repo.findById(id);

        if (!orgMovie.isPresent())
            throw new Exception("Movie with " + id + " is not found");

        orgMovie.get().setBigPoster(movie.getBigPoster());
        orgMovie.get().setDescription(movie.getDescription());
        orgMovie.get().setFeatured(movie.isFeatured());
        orgMovie.get().setPurchasePrice(movie.getPurchasePrice());
        orgMovie.get().setRentalPrice(movie.getRentalPrice());
        orgMovie.get().setSmallPoster(movie.getSmallPoster());
        orgMovie.get().setTitle(movie.getTitle());
        orgMovie.get().setType(movie.getType());

        Movie savedMovie = repo.save(orgMovie.get());

        return savedMovie;
    }
}
