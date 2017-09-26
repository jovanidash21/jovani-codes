<?php
function assets() {

	// CSS
	wp_enqueue_style( 'main-css', get_template_directory_uri().'/dist/styles/main.css', false, null);

	// JS
	wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/dist/scripts/main.js', array(), null, true);
}
add_action( 'wp_enqueue_scripts', 'assets' );


?>
