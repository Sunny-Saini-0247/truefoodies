<?php
$con = mysqli_connect('localhost','root',"",'database1');
if(isset($_POST['sb']))
{
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$query="INSERT INTO userdata1(name,email,subject,message)values('$name','$email','$subject','$message')";
$run=mysqli_query($con,$query);

}
?>