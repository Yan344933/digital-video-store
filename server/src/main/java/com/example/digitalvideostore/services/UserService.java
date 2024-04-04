/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.digitalvideostore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.digitalvideostore.models.UserModel;
import com.example.digitalvideostore.models.UserRepository;

/**
 *
 * @author yan
 */
@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public UserModel addUser(UserModel user) throws Exception {

        UserModel existinguser = repo.findByUsername(user.getUsername());

        if (existinguser != null) {
            throw new Exception("Username already exists");
        }

        String encodedPassword = passwordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);

        UserModel insertedUser = repo.insert(user);

        return insertedUser;
    }

    public List<UserModel> getUsers() {
        return repo.findAll();
    }

    public Optional<UserModel> getUserById(String id) {

        return repo.findById(id);
    }

    public UserModel getUserByUsername(String username) {

        return repo.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserModel foundUser = repo.findByUsername(username);

        String user = foundUser.getUsername();

        String password = foundUser.getPassword();

        return new User(user, password, new ArrayList<>());
    }
}
