<?php
  $host_name = 'localhost';
  $database = 'dev3apes';
  $user_name = 'root';
  $password = '';
  $conn = new mysqli($host_name, $user_name, $password, $database);

//   if (mysql_errno()) {
//     die('<p>Failed to connect to MySQL: '.mysql_error().'</p>');
//   } else {
//     echo '<p>Connection to MySQL server successfully established.</p>';
//   }
?>