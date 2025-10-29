const questions = document.querySelectorAll('.question')
let anims = []
questions.forEach(q => {
   let con = q.querySelector('.animationptx')
   let anim = lottie.loadAnimation({
      container: con,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './public/Plus to X/plusToX.json' // the path to the animation json
   });
   anims.push(anim);
})




function openQuestion(q, ani, i) {
   if (q.classList.contains('active')) {
      closeQuestion(q, ani, i);
      return;
   }
   // console.log(i);


   let pt = Number(window.getComputedStyle(q.parentElement).paddingTop.replace('px',''))
   let pl = Number(window.getComputedStyle(q.parentElement).paddingLeft.replace('px',''))
   let pr = Number(window.getComputedStyle(q.parentElement).paddingRight.replace('px',''))
   let pb = Number(window.getComputedStyle(q.parentElement).paddingBottom.replace('px',''))
   let offt = q.offsetTop
   let offl = q.offsetLeft
   let height = q.offsetHeight;
   let width = q.offsetWidth
   let parentHeight = q.parentElement.offsetHeight
   let parentWidth = q.parentElement.offsetWidth

   let offr = parentWidth - width - offl
   let offb = parentHeight - height - offt
   // console.log(pt,pl,pr,pb);
   // console.log(parentHeight,parentWidth);
   // console.log(offt,offr,offb,offl);

   anims[i].setDirection(1)
   anims[i].play()
   
   let empty = document.createElement('div')
   q.after(empty)
   empty.style.height = height+'px'
   q.style.position = 'absolute'
   q.style.top = offt + 'px'
   q.style.right = offr + 'px'
   q.style.bottom = offb + 'px'
   q.style.left = offl + 'px'
   setTimeout(() => {
      q.classList.add('active')
      
   }, 100);
   
   setTimeout(() => {
      q.querySelector('.answer').style.opacity = 1
   }, 400);

}

function closeQuestion(q, ani, i) {
   anims[i].setDirection(-1)
   anims[i].play()
   q.querySelector('.answer').style.opacity = 0

   
   setTimeout(() => {
      q.style.position = 'unset'
      q.nextSibling.remove()
      
   }, 500);
   
   q.classList.remove('active')
}



const screenHeight = screen.height
const headerDeskDynamic = document.querySelector('#header-desk-dynamic')
const headerMobDynamic = document.querySelector('#header-mob-dynamic')
const rrrr = document.querySelector('#rrrr')
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
      wltv.style.transform = `translateY(${15*scale}px)`
      
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
   path: './public/menu/menuV2.json' // the path to the animation json
});

let navanim2 = lottie.loadAnimation({
   container: ocanimd,
   renderer: 'svg',
   loop: false,
   autoplay: false,
   path: './public/menu/menuV2.json' // the path to the animation json
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

   // p.parentElement.classList.add('open')
   // console.log(p.classList);
}



ScrollReveal().reveal('.rrrrContainer');
ScrollReveal().reveal('.descriptionSec h3',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('.descriptionSec p',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('.descriptionSec li',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('.left .imageContainer',{reset:true,origin:'bottom',distance:'4em',opacity:0,delay:150});


ScrollReveal().reveal('#faq',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('#faq .question',{reset:true,origin:'bottom',distance:'4em',opacity:0,delay:100});
ScrollReveal().reveal('#faq p:not(.answer p)',{reset:true,origin:'bottom',distance:'1em',opacity:0,delay:20});


ScrollReveal().reveal('#cta',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('.tag-list h1',{reset:true,origin:'bottom',distance:'4em',opacity:0});
ScrollReveal().reveal('.loop-slider',{reset:true,origin:'bottom',distance:'4em',opacity:0});




let image_11 = document.querySelector('#description-desk .leftDesk .leftImage .imageContainer')
let image_12 = document.querySelector('#description-desk .leftTab .imageContainer:first-child')
let image_13 = document.querySelector('#description-mob .leftImage .imageContainer')


let image_21 = document.querySelector('#description-desk .leftDesk .rightImages .imageContainer:nth-child(1)')
let image_22 = document.querySelector('#description-desk .leftTab .imageContainer:nth-child(2)')
let image_23 = document.querySelector('#description-mob .leftDesk .rightImages .imageContainer:nth-child(1)')



let image_31 = document.querySelector('#description-desk .leftDesk .rightImages .imageContainer:nth-child(2)')
let image_32 = document.querySelector('#description-desk .leftTab .imageContainer:nth-child(3)')
let image_33 = document.querySelector('#description-mob .leftDesk .rightImages .imageContainer:nth-child(2)')


// image_11.style.backgroundImage = 'lkajsdlf'

let n = 2;
const transitionDuration = 7000
const transitionStart = 200
const transitionEnd = transitionDuration - transitionStart;

[image_11,image_12,image_13,image_21,image_22,image_23,image_31,image_32,image_33].forEach(img=>{

   setTimeout(() => {
      img.classList.add('transitioning-src')
   }, transitionEnd);
})

setInterval(() => {
   // console.log(image_11);
   if (3*n>=47) {
      n=1
   }
   
   [image_11,image_12,image_13].forEach(img=>{
      
      setTimeout(() => {
         img.classList.remove('transitioning-src')
      }, transitionStart);

      img.style.backgroundImage = `url("./public/images/ (${3*n}).jpg")`
      
      setTimeout(() => {
         img.classList.add('transitioning-src')
      }, transitionEnd);
   });
   
   [image_21,image_22,image_23].forEach(img=>{
      
      setTimeout(() => {
         img.classList.remove('transitioning-src')
      }, transitionStart);

      img.style.backgroundImage = `url("./public/images/ (${3*n+1}).jpg")`
      
      setTimeout(() => {
         img.classList.add('transitioning-src')
      }, transitionEnd);
   });
   [image_31,image_32,image_33].forEach(img=>{
      
      setTimeout(() => {
         img.classList.remove('transitioning-src')
      }, transitionStart);

      img.style.backgroundImage = `url("./public/images/ (${3*n+2}).jpg")`
      
      setTimeout(() => {
         img.classList.add('transitioning-src')
      }, transitionEnd);
   });
   n++

}, transitionDuration);