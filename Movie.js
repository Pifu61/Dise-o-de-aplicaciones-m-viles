package com.example.moviecatalog;

import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity
public class Movie {
    @PrimaryKey(autoGenerate = true)
    public int id;

    public String title;
    public String year;
    public String director;
    public String genre;
    public String synopsis;
    public String imageUrl;
}
