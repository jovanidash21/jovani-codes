<?php

function setup() {


}
add_action( 'after_setup_theme', 'setup' );

function cpt_register_work() {
  $slug      = 'work';
  $post_type = 'cpt-work';

  $labels = array(
    'name'               => _x( 'Work', 'post type general name' ),
    'singular_name'      => _x( 'Work', 'post type singular name' ),
    'add_new'            => _x( 'Add Work', 'rep' ),
    'add_new_item'       => __( 'Add New Work' ),
    'edit_item'          => __( 'Edit Work' ),
    'new_item'           => __( 'New Work' ),
    'view_item'          => __( 'View Work' ),
    'search_items'       => __( 'Search Work' ),
    'not_found'          => __( 'Nothing found' ),
    'not_found_in_trash' => __( 'Nothing found in Trash' ),
    'parent_item_colon'  => ''
  );

  $args = array(
    'labels'                => $labels,
    'public'                => true,
    'publicly_queryable'    => true,
    'show_ui'               => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => $slug ),
    'capability_type'       => 'post',
    'hierarchical'          => true,
    'menu_position'         => null,
    'menu_icon'             => 'dashicons-hammer',
    'show_in_rest'          => true,
    'rest_base'             => 'work-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
    'has_archive'           => false
  );

  register_post_type( $post_type, $args );
}

function cpt_register() {
  cpt_register_work();
}

add_action( 'init', 'cpt_register' );
