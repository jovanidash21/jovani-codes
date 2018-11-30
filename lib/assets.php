<?php

function assets() {

  // Fonts
  wp_enqueue_style( 'lobster-font', 'https://fonts.googleapis.com/css?family=Lobster' );
  wp_enqueue_style( 'lato-font', 'https://fonts.googleapis.com/css?family=Lato' );

  // Styles
  wp_enqueue_style( 'react-redux-css', get_template_directory_uri() . '/dist/build/bundle.css', false, null );

  // Scripts
  wp_enqueue_script( 'react-redux-js', get_template_directory_uri() . '/dist/build/bundle.js', array(), null, true );
  wp_localize_script( 'react-redux-js', 'JOVANI_CODES', array(
    'siteName'        => get_bloginfo( 'name' ),
    'siteDescription' => get_bloginfo( 'description' ),
    'siteURL'         => untrailingslashit( get_site_url() ),
    'images'          => get_template_directory_uri() . '/dist/images',
  ) );
}

add_action( 'wp_enqueue_scripts', 'assets', 100 );

?>
