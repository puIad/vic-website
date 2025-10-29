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

   <!-- <script src="https://unpkg.com/scrollreveal"></script> -->

   <link rel="shortcut icon" href="../public/header-logo.svg" type="image/x-icon">

</head>

<body>



<section id="hero">
      <a href="../" class="backBtn"><i class="fa-solid fa-arrow-left"></i></a>
      <div class="animation">
         
      </div>
   </section>

 
<?php 
include'../footer.php';
?>
 <script>
   
let animation = lottie.loadAnimation({
   container: document.querySelector('.animation'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../public/404/animation.json' // the path to the animation json
});
 </script>
</body>

</html>