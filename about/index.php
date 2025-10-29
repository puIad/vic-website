<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Vision & Innovation Club</title>

   <link rel="stylesheet" href="../style.css">
   <link rel="stylesheet" href="./style.css">
   <!-- <script src="../script.js" defer></script> -->
   <script src="./script.js" defer></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.1/lottie.min.js" integrity="sha512-H6aKTjvYAazW0iNuGj1f2dZvSWlt1HGZGEDsXRPETo2IB4H6v36Vl2qiZNlCRxOp0kT7iBf+7USNPavNscZGAw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

   <script src="https://unpkg.com/scrollreveal"></script>
<link rel="shortcut icon" href="../public/header-logo.svg" type="image/x-icon">



</head>

<body>
   <header id="header-desk-dynamic">
      <a href="../"><img src="../public/header-logo.svg" alt=""></a>

      <nav>
         <a href="../" >home</a>
         <a href="#" class="active">about</a>
         <a href="../community">community</a>
         <a href="../events">events</a>
         <a href="../contact">contact us</a>
      </nav>
      <div></div>
   </header>
   <header id="header-desk-fix">
      <a href="../"><img src="../public/header-logo.svg" alt=""></a>

      <nav>
         <a href="../" >home</a>
         <a href="#" class="active">about</a>
         <a href="../community">community</a>
         <a href="../events">events</a>
         <a href="../contact">contact us</a>
      </nav>
      <div></div>
   </header>

   <header id="header-mob-fix" class="">
      <div class="navmobiletop">
         <a href="../"><img src="../public/mobile-header-logo.svg" alt=""></a>
         <div class="ocanimf" onclick="toggleNav(this.parentElement)">

         </div>
      </div>
      <nav>
         <a href="../">home</a>
         <a href="#"  class="active">about</a>
         <a href="../community">community</a>
         <a href="../events">events</a>
         <a href="../contact">contact us</a>
         <div></div>
      </nav>
   </header>

   <header id="header-mob-dynamic">
      <div class="navmobiletop">
         <a href="../"><img src="../public/mobile-header-logo.svg" alt=""></a>
         <div class="ocanimd" onclick="toggleNav(this.parentElement)">
   
         </div>

      </div>
      <nav>
         <a href="../" >home</a>
         <a href="#" class="active">about</a>
         <a href="../community">community</a>
         <a href="../events">events</a>
         <a href="../contact">contact us</a>
         <div></div>
      </nav>
   </header>



   <section id="hero">
      <a href="../" class="backBtn"><i class="fa-solid fa-arrow-left"></i></a>
      <div class="text">
         <h1 class="blueishText">A passionate community dedicated to unlocking your potential</h1>
         <p>Our objective is to inspire and elevate your success</p>
         <div class="buttons">
            <a href="" class="joinBtn blueishBg">Join Us</a>
            <a href="../contact" class="contactBtn">Contact Us</a>
         </div>
      </div>
   </section>


   <section id="tsawer">
      <div class="left">
      <div class="imageContainer" style="background-image: url('../public/images/ (1).jpg');"><div></div></div>
      </div>

      <div class="right">
      <div class="imageContainer" style="background-image: url('../public/images/ (2).jpg');"><div></div></div>

      </div>
   </section>

   <section id="vision">
      <h1 class="blueishText">Our Vision</h1>
      <p>"The vision of VIC Club is to inspire and empower individuals to think creatively, collaborate effectively, and lead innovation. We aim to foster a community where bold ideas are turned into impactful solutions that shape the future."</p>
   </section>
   

<?php 
include'../footer.php';
?>
   <div class="rrrrContainer">
      <img id="rrrr" src="./public/logo stroke.svg" alt="">

   </div>
   
   <?php include '../loader.php' ?>

</body>

</html>