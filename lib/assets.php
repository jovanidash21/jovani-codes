<?php

function assets() {

  // Fonts
  wp_enqueue_style( 'lobster-font', 'https://fonts.googleapis.com/css?family=Lobster' );
  wp_enqueue_style( 'lato-font', 'https://fonts.googleapis.com/css?family=Lato' );

  // Stylesheets
  wp_enqueue_style( 'main-css', get_template_directory_uri().'/dist/styles/main.css', false, null);

  // Scripts
  wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/dist/scripts/main.js', array(), null, true);
  wp_enqueue_script( 'react-redux-js', get_stylesheet_directory_uri() . '/dist/build/bundle.js', array(), null, true);
  wp_localize_script( 'react-redux-js', 'WP_REACT_REDUX', array(
    'siteName'        => get_bloginfo( 'name' ),
    'siteDescription' => get_bloginfo( 'description' ),
    'images'          => get_template_directory_uri() . '/dist/images',
  ) );
}

add_action( 'wp_enqueue_scripts', 'assets' );
