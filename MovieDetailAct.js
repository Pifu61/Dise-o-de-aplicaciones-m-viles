package com.example.moviecatalog;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import com.bumptech.glide.Glide;

public class MovieDetailActivity extends AppCompatActivity {

    private ImageView movieImageView;
    private TextView movieTitleTextView;
    private TextView movieYearTextView;
    private TextView movieDirectorTextView;
    private TextView movieGenreTextView;
    private TextView movieSynopsisTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_movie_detail);

        movieImageView = findViewById(R.id.movieImageView);
        movieTitleTextView = findViewById(R.id.movieTitleTextView);
        movieYearTextView = findViewById(R.id.movieYearTextView);
        movieDirectorTextView = findViewById(R.id.movieDirectorTextView);
        movieGenreTextView = findViewById(R.id.movieGenreTextView);
        movieSynopsisTextView = findViewById(R.id.movieSynopsisTextView);

        String movieTitle = getIntent().getStringExtra("MOVIE_TITLE");
        // Load movie details from database or API

        movieTitleTextView.setText(movieTitle);
        movieYearTextView.setText("Year"); // Replace with actual year
        movieDirectorTextView.setText("Director"); // Replace with actual director
        movieGenreTextView.setText("Genre"); // Replace with actual genre
        movieSynopsisTextView.setText("Synopsis"); // Replace with actual synopsis
        Glide.with(this).load("Image URL").into(movieImageView); // Replace with actual image URL
    }
}
