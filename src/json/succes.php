<?php
/**
 * Instagram PHP API
 * 
 * @link https://github.com/cosenary/Instagram-PHP-API
 * @author Christian Metz
 */
require 'src/Instagram.php';
use MetzWeb\Instagram\Instagram;
// initialize class

$instagram = new Instagram(array(
  'apiKey'      => 'e70a097fd3484463bffc15e85375512e',
  'apiSecret'   => 'f469c9bbaa4d42099ca59a745eca0e49',
  'apiCallback' => 'http://localhost:81/php/succes.php'
));
session_start();
$token = false;
if (isset($_SESSION['access_token'])) {
  // user authenticated -> receive and set token

  $token = $_SESSION['access_token'];

} else {
  // receive OAuth code parameter
  $code = $_GET['code'];
  // authentication in progress?
  if (isset($code)) {
    // receive and store OAuth token
    $data = $instagram->getOAuthToken($code);
    $token = $data->access_token;
    $_SESSION['access_token'] = $token;
  } else {
    // check whether an error occurred
    if (isset($_GET['error'])) {
      echo 'An error occurred: ' . $_GET['error_description'];
    }
  }
}
// check authentication
if ($token === false) {
  // authentication failed -> redirect to login
  header('Location: index.php');
} else {
  // store user access token
  $instagram->setAccessToken($token);
  
  // now we have access to all authenticated user methods
  $media = $instagram->getUserMedia();
  echo json_encode($media);
}
?>