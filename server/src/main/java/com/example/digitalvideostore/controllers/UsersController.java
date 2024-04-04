/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.digitalvideostore.controllers;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.digitalvideostore.CustomizedResponse;
import com.example.digitalvideostore.models.UserModel;
import com.example.digitalvideostore.services.UserService;

/**
 *
 * @author yan
 */
@Controller
@CrossOrigin
public class UsersController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public ResponseEntity getUsers(){

        CustomizedResponse res;

        List<UserModel> users = service.getUsers();

        res = new CustomizedResponse("get all users", Collections.singletonList(users));

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity getAUser(@PathVariable("id") String id){
        
        CustomizedResponse res;

        Optional<UserModel> user = service.getUserById(id);

        if (user.isPresent())
            res = new CustomizedResponse("get user " + id, Collections.singletonList(user.get()));
        else {
            res = new CustomizedResponse("user not exists " + id, null);
            return new ResponseEntity(res, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity getUserByUsername(@RequestParam String username){
        
        CustomizedResponse res;

        UserModel user = service.getUserByUsername(username);
        user.setPassword("");

        if (user != null)
            res = new CustomizedResponse("get user " + username, Collections.singletonList(user));
        else {
            res = new CustomizedResponse("user not exists " + username, null);
            return new ResponseEntity(res, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(res, HttpStatus.OK);
    }

    @PostMapping(value="/users", consumes={
        MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity createUser(@RequestBody UserModel user){

        CustomizedResponse res;
        try {
            service.addUser(user);
            res = new CustomizedResponse("user created successfully with username " + user.getUsername(), null);
        } catch (Exception e) {
            res = new CustomizedResponse(e.getMessage(), null);
            return new ResponseEntity(res, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(res, HttpStatus.OK);
    }


}
