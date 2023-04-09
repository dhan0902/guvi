<?php


$host = 'localhost'; 
$user = 'root';
$dbname = 'guvi'; 

$conn = mysqli_connect($host, $user, '', $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
    echo "Success";
}

$firstname = $_POST['fname'];
$lastname = $_POST['lname'];
$dateofbirth = $_POST['dateofbirth'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$pass = $_POST['password'];
$gender = $_POST['gender'];



$sql = "SELECT * FROM users WHERE email='$email' AND password='$pass'";
$result = mysqli_query($conn, $sql);
$condition = mysqli_num_rows($result) > 0;
if ($condition) {
    
     header("Location: http://localhost/guvi/register.html");
     echo '<div class="success-box">Already Exist an account using this email or password, try different one.</div>';
     exit();
}
elseif (!$condition) {
$sql1 = "INSERT INTO users (firstname, lastname, dateofbirth, email, phone, city, password, gender) VALUES ('$firstname', '$lastname', '$dateofbirth', '$email', '$phone', '$city', '$pass', '$gender')";
if (mysqli_query($conn, $sql1)) {
    header("Location: http://localhost/guvi/login.html");
   exit();

}

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);

?>