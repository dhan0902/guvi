<?php

$host = 'localhost'; 
$user = 'root';
$dbname = 'guvi'; 

$conn = mysqli_connect($host, $user, '', $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Success";
}

$email = $_POST['email'];
$pass = $_POST['password'];

$stmt = mysqli_prepare($conn, "SELECT * FROM users_2 WHERE email=? AND password=?");
mysqli_stmt_bind_param($stmt, "ss", $email, $pass);
mysqli_stmt_execute($stmt);

echo "success  2";
$result = mysqli_stmt_get_result($stmt);

echo "success  3";

if (mysqli_num_rows($result) > 0) {
    echo "success  4";
    header("Location: http://localhost/guvi/profile.html");
    echo "success  5";
  exit();
} else {
    header("Location: http://localhost/guvi/register.html");
    exit();
}

mysqli_close($conn);

?>
