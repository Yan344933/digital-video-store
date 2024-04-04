/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.digitalvideostore.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.digitalvideostore.services.UserService;



/**
 *
 * @author yan
 */
@Configuration
@EnableWebSecurity
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SecurityConfiguration{

    @Autowired
    private UserService userService;

    //Authentication
    @Autowired
    protected void SecurityConfiguration(UserService service) throws Exception {
        
        this.userService = service;

    }

    // authorization
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authz) -> authz
                .requestMatchers("/users/**").permitAll()
                .requestMatchers("/auth").permitAll()
                .anyRequest().permitAll()
            ).csrf(AbstractHttpConfigurer::disable);
        return http.build();
    }


    //Bcrypt
    
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


/* Deprecated
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception{
        return super.authenticationManager();
    }

*/

    @Bean
    public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

}
