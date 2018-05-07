<?php

function revision() {

  // Styles
  wp_enqueue_style( 'vendor-css', get_template_directory_uri() . '/dist/styles/vendor.css', false, '05ea2ecbb7a7a6cf5ef9eef62f652a8a');
  wp_enqueue_style( 'main-css', get_template_directory_uri() . '/dist/styles/main.css', false, '7d8be5d25fac439b2248844732780faa');

  // Scripts
  wp_enqueue_script( 'vendor-js', get_template_directory_uri() . '/dist/scripts/vendor.js', array(), '1a9bbfb2ddd9a16994cb2d6a4234195d', true );
  wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/scripts/main.js', array(), '12f1fe4e8b29fb5a7a393f6789837b97', true );

}

add_action( 'wp_enqueue_scripts', 'revision', 101 );

?>
