<?php

$libraries = [
  'lib/setup.php',
  'lib/post-types.php',
  'lib/acf.php',
  'lib/assets.php',
  'lib/revision.php'
];

foreach ( $libraries as $lib ) {
  $file_path = locate_template($lib);

  if ( !$file_path ) {
    trigger_error(
      sprintf('%s Not found', $lib), E_USER_ERROR
    );
  }

  require_once $file_path;
}

unset($lib, $libraries);

?>
