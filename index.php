<!DOCTYPE html>
<html>
  <head>
    <?php wp_head(); ?>
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri() . '/favicons/apple-touch-icon.png' ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() . '/favicons/favicon-32x32.png' ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() . '/favicons/favicon-16x16.png' ?>">
    <link rel="manifest" href="<?php echo get_template_directory_uri() . '/favicons/manifest.json' ?>">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri() . '/favicons/safari-pinned-tab.svg' ?>" color="#16d5af ">
  </head>
  <body <?php body_class(); ?>>
    <div id="root">
    </div>
    <?php wp_footer(); ?>
  </body>
</html>
