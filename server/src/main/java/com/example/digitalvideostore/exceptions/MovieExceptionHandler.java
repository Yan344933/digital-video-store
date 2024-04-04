/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.digitalvideostore.exceptions;

import java.util.NoSuchElementException;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

/**
 *
 * @author yan
 */
@ControllerAdvice
public class MovieExceptionHandler {

    @ExceptionHandler(NoHandlerFoundException.class)
    public String handle404(NoHandlerFoundException e){
        return "exception/404";
    }

    @ExceptionHandler(NoSuchElementException.class)
    public String noSuchElementHandler(NoSuchElementException e){
        return "exception/no movie found";
    }
}
