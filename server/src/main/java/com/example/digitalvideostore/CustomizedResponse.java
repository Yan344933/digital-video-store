/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.digitalvideostore;

import java.util.List;

/**
 *
 * @author yan
 * @param <T>
 */
public class CustomizedResponse<T> {
    private String message;
    private List<T> body;

    public CustomizedResponse() {
    }

    public CustomizedResponse(String message, List<T> body) {
        this.body = body;
        this.message = message;
    }

    public CustomizedResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public List<T> getBody() {
        return body;
    }


}
