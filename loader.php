
<style>
      .loaderWrapper {
         width: 100vw;
         height: 100lvh;
         display: grid;
         place-items: center;
         position: fixed;
         left: 0;
         top: 0;
         background: var(--bg);
         z-index: 10000;
      }

      .loader {
         width: 60px;
         aspect-ratio: 1;
         --g: conic-gradient(from -90deg at 10px 10px, #fff 90deg, #0000 0);
         background:
            var(--g),
            var(--g) 10px 10px,
            var(--g) 20px 20px;
         background-size: 50% 50%;
         animation: l15 1s infinite;
      }

      @keyframes l15 {

         90%,
         100% {
            background-position: -30px 30px, -20px 40px, -10px 50px
         }
      }
   </style>

   <div class="loaderWrapper">
      <div class="loader"></div>
   </div>
   <script>
      setTimeout(() => {
         document.querySelector('.loaderWrapper').style.display = 'none'

      }, 3000);
   </script>