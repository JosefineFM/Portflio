<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
<head>
<title>Home page – My Website</title>
<meta http-equiv="description" content="page description" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<style>
<?php include 'includes/css/index.css'; ?>
</style>

<body>
    <div class="grid-container">

    <div class="col1">
<?php include("includes/navbar.html");?>
</div>

<div class="col2">
<img src="includes/imag/cottageInTheWoods.png" alt="Cabin One">
</div>

<div class="col3">
<button class="bookUs" onclick="window.location.href='booking.php'"> Book It Now </button>
</div>

<div class="col4">
</div>
</div>

</body>
<style>
    img{
        display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
    }
</style>
</html>