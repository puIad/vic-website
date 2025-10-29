
const screenHeight = screen.height
const headerDeskDynamic = document.querySelector('#header-desk-dynamic')
const headerMobDynamic = document.querySelector('#header-mob-dynamic')
const wltv = document.querySelector('#hero .text')
const description = document.querySelector('#description-desk')
addEventListener('scroll',() => {
   let y = scrollY;
   // console.log(y);
   if(navStatus == 1){
      document.querySelectorAll('.navmobiletop').forEach(q=>{

         if (q.parentElement.classList.contains('open')) {
            
            toggleNav(q)
         }
      })
   }
   if (y > screenHeight*0.7) {
      headerDeskDynamic.classList.add('active')
      headerMobDynamic.classList.add('active')
      rrrr.style.opacity = 0;
      document.querySelector('.rrrrContainer').style.opacity = 0


   } else {
      headerDeskDynamic.classList.remove('active')
      headerMobDynamic.classList.remove('active')
      document.querySelector('.rrrrContainer').style.opacity = 1

      let scale = 20 * y /(1*screenHeight);
      // let trans = (33.3/screenHeight)*y -50
      rrrr.style.scale = scale + 1
      rrrr.style.filter = `blur(${scale*0.1}px)`
      rrrr.style.opacity = 0.5/(scale+1);
      wltv.style.transform = `translateY(${5*scale}px)`
      
   }
   // wltv.style.transform = `translateY(${trans}%)`

})

if (scrollY < screenHeight*0.7) {
   document.querySelector('.rrrrContainer').style.opacity = 1
}

const ocanimf = document.querySelector('.ocanimf')
const ocanimd = document.querySelector('.ocanimd')


let navanim1 = lottie.loadAnimation({
   container: ocanimf,
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: '../public/menu/menuV2.json' // the path to the animation json
});

let navanim2 = lottie.loadAnimation({
   container: ocanimd,
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: '../public/menu/menuV2.json' // the path to the animation json
});


let navStatus = 0
function toggleNav(p){
   
   if (navStatus == 0) {
      navanim1.setDirection(1)
      navanim1.play()
      navanim2.setDirection(1)
      navanim2.play()
      navStatus = 1
   p.parentElement.classList.add('open')
   } else {
      navanim1.setDirection(-1)
      navanim1.play()
      navanim2.setDirection(-1)
      navanim2.play()
      navStatus = 0
   p.parentElement.classList.remove('open')
}

}




ScrollReveal().reveal('#hero h1',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('#hero p',{reset:true,origin:'bottom',distance:'4em',opacity:0,delay:150});
ScrollReveal().reveal('#hero .buttons',{reset:true,origin:'bottom',distance:'4em',opacity:0, delay:300});
ScrollReveal().reveal('#tsawer .right',{reset:true,origin:'bottom',distance:'4em',opacity:0,delay:150});
ScrollReveal().reveal('#tsawer .left',{reset:true,origin:'bottom',distance:'4em',opacity:0,delay:300});


ScrollReveal().reveal('#vision h1',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('#vision p',{reset:true,origin:'bottom',distance:'4em',opacity:0,delay:200});
// ScrollReveal().reveal('#faq p',{reset:true,origin:'bottom',distance:'1em',opacity:0,delay:20});


// ScrollReveal().reveal('#cta',{reset:true,origin:'bottom',distance:'4em',opacity:0});




let image_1 = document.querySelector('#tsawer .left .imageContainer')
let image_2 = document.querySelector('#tsawer .right .imageContainer')



// image_11.style.backgroundImage = 'lkajsdlf'

let n = 2;
const transitionDuration = 7000
const transitionStart = 200
const transitionEnd = transitionDuration - transitionStart;

[image_1,image_2].forEach(img=>{

   setTimeout(() => {
      img.classList.add('transitioning-src')
   }, transitionEnd);
})

setInterval(() => {
   // console.log(image_11);
   if (2*n>=47) {
      n=1
   }
   
   [image_1].forEach(img=>{
      
      setTimeout(() => {
         img.classList.remove('transitioning-src')
      }, transitionStart);

      img.style.backgroundImage = `url("../public/images/ (${47 - 2*n}).jpg")`
      
      setTimeout(() => {
         img.classList.add('transitioning-src')
      }, transitionEnd);
   });
   
   [image_2].forEach(img=>{
      
      setTimeout(() => {
         img.classList.remove('transitioning-src')
      }, transitionStart);

      img.style.backgroundImage = `url("../public/images/ (${47 - 2*n+1}).jpg")`
      
      setTimeout(() => {
         img.classList.add('transitioning-src')
      }, transitionEnd);
   });

   n++

}, transitionDuration);