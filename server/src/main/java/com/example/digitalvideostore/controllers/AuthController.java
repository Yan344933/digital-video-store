/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.digitalvideostore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.digitalvideostore.CustomizedResponse;
import com.example.digitalvideostore.models.UserModel;

/**
 *
 * @author yan
 */
@RestController
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthenticationManager authMgr;

    @PostMapping(value="/auth", consumes={
        MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity login(@RequestBody UserModel user){

        CustomizedResponse res ;

        try {

            authMgr.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

            res = new CustomizedResponse("user sucessfully logged in " + user.getUsername(), null);

        } catch (AuthenticationException e) {
            System.out.println(e.getMessage());
            res = new CustomizedResponse("Incorrect username or password", null);
            return new ResponseEntity(res, HttpStatus.BAD_REQUEST);
        }
        

        return new ResponseEntity(res, HttpStatus.OK);
    }
}
