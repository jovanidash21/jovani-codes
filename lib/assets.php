<?php

function assets() {

  // Fonts
  wp_enqueue_style( 'lobster-font', 'https://fonts.googleapis.com/css?family=Lobster' );
  wp_enqueue_style( 'lato-font', 'https://fonts.googleapis.com/css?family=Lato' );

  // Styles
  wp_enqueue_style( 'vendor-css', get_template_directory_uri() . '/dist/styles/vendor.min.css', false, null);
  wp_enqueue_style( 'main-css', get_template_directory_uri() . '/dist/styles/main.min.css', false, null);

  // Scripts
  wp_enqueue_script( 'vendor-js', get_template_directory_uri() . '/dist/scripts/vendor.min.js', array(), null, true);
  wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/scripts/main.min.js', array(), null, true);
  wp_enqueue_script( 'react-redux-js', get_template_directory_uri() . '/dist/build/bundle.js', array(), null, true);
  wp_localize_script( 'react-redux-js', 'JOVANI_CODES', array(
    'siteName'        => get_bloginfo( 'name' ),
    'siteDescription' => get_bloginfo( 'description' ),
    'images'          => get_template_directory_uri() . '/dist/images',
  ) );
}

add_action( 'wp_enqueue_scripts', 'assets' );

?>
