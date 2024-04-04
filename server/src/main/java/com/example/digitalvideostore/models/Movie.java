/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.digitalvideostore.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author yan
 */
@Document("movies")
public class Movie {

    @Id
    private ObjectId id;

    private String title;

    private String Description;
    
    private String smallPoster;

    private String bigPoster;

    private boolean featured;

    private double RentalPrice;

    private double PurchasePrice;

    private String type;

    public Movie(String title, String Description, String smallPoster, String bigPoster, boolean featured, 
                double RentalPrice, double PurchasePrice, String type){
        this.title = title;
        this.Description = Description;
        this.smallPoster = smallPoster;
        this.bigPoster = bigPoster;
        this.featured = featured;
        this.RentalPrice = RentalPrice;
        this.PurchasePrice = PurchasePrice;
        this.type = type;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDescription(){
        return Description;
    }

    public void setDescription(String Description){
        this.Description = Description;
    }


    @Override
    public String toString(){
        return "Movie{" + "id=" + id.toString() + ", title='" + title + "', Description='" + Description + 
        "',smallPoster=" + smallPoster + ", bigPoster=" + bigPoster + "}";
    }

    public String getId() {
        return id.toString();
    }

    public String getSmallPoster() {
        return smallPoster;
    }

    public void setSmallPoster(String smallPoster) {
        this.smallPoster = smallPoster;
    }

    public String getBigPoster() {
        return bigPoster;
    }

    public void setBigPoster(String bigPoster) {
        this.bigPoster = bigPoster;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }

    public double getRentalPrice() {
        return RentalPrice;
    }

    public void setRentalPrice(double RentalPrice) {
        this.RentalPrice = RentalPrice;
    }

    public double getPurchasePrice() {
        return PurchasePrice;
    }

    public void setPurchasePrice(double PurchasePrice) {
        this.PurchasePrice = PurchasePrice;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
