<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true);

	include("server.php");

	// header('Content-Type: application/json; charset=UTF-8');



	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}	

    $first_name = $_REQUEST['name'];
    $last_name = $_REQUEST['lastName'];
    $email = $_REQUEST['email'];
	   $userid = $_REQUEST['userid'];
 

	// first query - SQL statement accepts parameters and so is prepared to avoid SQL injection.
	// $_REQUEST used for development / debugging. Remember to change to $_POST for production

	$query = $conn->prepare("INSERT INTO `personnal` (unique_id,FirstName ,LastName ,Email) 
                                                VALUE('$userid','$first_name', '$last_name', '$email')");

	

	$query->execute();

    if ($conn->error) {
        die("Connection failed: " . $conn->error);
    }
	
	if (false === $query) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		// echo json_encode($output); 

		exit;

	}
    
	$result = $query->get_result();