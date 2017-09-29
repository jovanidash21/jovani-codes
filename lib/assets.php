<?php

function assets() {

  // Fonts
  wp_enqueue_style( 'google_font/lobster', 'https://fonts.googleapis.com/css?family=Lobster' );
  wp_enqueue_style( 'google_font/lato', 'https://fonts.googleapis.com/css?family=Lato' );

  // Stylesheets
  wp_enqueue_style( 'main-css', get_template_directory_uri().'/dist/styles/main.css', false, null);

  // Scripts
  wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/dist/scripts/main.js', array(), null, true);
  wp_enqueue_script( 'react-redux-js', get_stylesheet_directory_uri() . '/dist/build/bundle.js', array(), null, true);
}

add_action( 'wp_enqueue_scripts', 'assets' );