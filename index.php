<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <?php wp_head(); ?>
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri() . '/favicons/apple-touch-icon.png' ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() . '/favicons/favicon-32x32.png' ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() . '/favicons/favicon-16x16.png' ?>">
    <link rel="manifest" href="<?php echo get_template_directory_uri() . '/favicons/manifest.json' ?>">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri() . '/favicons/safari-pinned-tab.svg' ?>" color="#16d5af ">
  </head>
  <body <?php body_class(); ?>>
    <!--[if lt IE 9]>
      <div class="alert alert-warning">
        <?php echo 'Your browser is <strong>OUT-OF-DATE</strong>. Please <a href="http://browsehappy.com/">upgrade your browser</a> to view this website correctly.'; ?>
      </div>
    <![endif]-->

    <div id="root"></div>
    <?php wp_footer(); ?>
  </body>
</html>
