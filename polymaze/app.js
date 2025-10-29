const loader = document.querySelector('.loader')

document.onreadystatechange = () => {
   if (document.readyState === 'complete') {
     setTimeout(() => {
      loader.style.display = 'none'
     }, 3000);
   }
 };


 setTimeout(() => {
   loader.style.display = 'none'
   
 }, 8000);


const logo = document.querySelector('img#animatedLogo')
const polymaze = document.querySelector('#polymaze');
const screenH = screen.height;
const slider1 = document.querySelector('#polymaze .slider1 .container')
const slider2 = document.querySelector('#polymaze .slider2 .container')
let animationInterval = screenH*3

addEventListener('scroll', () => {
   let Y = scrollY 
   if (scrollY<polymaze.offsetTop- screenH || scrollY >polymaze.offsetTop + polymaze.offsetHeight){
      // slider1.scrollTo((slider1.scrollWidth / 2) - (slider1.offsetWidth /2),0)
      slider2.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2),0)
      slider1.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2),0)
      
   } else{

      let p = (Y-polymaze.offsetTop - screenH)/polymaze.offsetHeight
      let d = p*(slider1.scrollWidth - slider1.offsetWidth);
      slider1.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2) -d/3 ,0)
      slider2.scrollTo((slider2.scrollWidth / 2) - (slider2.offsetWidth /2) + d/3,0)
      


   }

})


function sliderScroll(slider, speed, y){
   slider.scroll(y/speed,0);
}

setInterval(() => {
      
   document.querySelector("spline-viewer").shadowRoot.querySelector('a').style.display = 'none'
   }, 1200);



// COUNTDOWN ----

const regsCloseDate = new Date(2024,4,30)

let regsClosets = regsCloseDate.getTime()
console.log(regsClosets - new Date().getTime());





function countdown(t){
   
      let dt = (t - new Date().getTime())/1000;
      let d = Math.floor(dt/(24*60*60))
      let hours = (dt%(24*60*60))/(60*60)
      let h = Math.floor(hours)
      let minutes = (hours-h)*60
      let m = Math.floor(minutes)
      let seconds = (minutes-m)*60
      let s = Math.floor(seconds)

      // console.log(d,h,m,s);

      return{d:d,h:h,m:m,s:s}
}


const dc = document.querySelector('#countdown .days p')
const hc = document.querySelector('#countdown .hours p')
const mc = document.querySelector('#countdown .minutes p')
const sc = document.querySelector('#countdown .seconds p')


setInterval(() => {
   let time = countdown(regsClosets)
   // console.log(countdown(regsClosets));
   dc.innerHTML = time.d
   hc.innerHTML = time.h
   mc.innerHTML = time.m
   sc.innerHTML = time.s
}, 1000);


let dirs =[]


// faq show






const faqs = document.querySelectorAll('#faq .el');

console.log([...faqs]);

function showFaq(faq){
   let activeFaqs = document.querySelectorAll('#faq .el.active');
   activeFaqs.forEach(a=>{
      if (a != faq) {
         showFaq(a)
      }
   })
   let index = [...faqs].indexOf(faq)
   console.log(faq);
   let faqAnswer = faq.querySelector('.answer')
   let faqQuestion = faq.querySelector('.question')
   if (faq.classList.contains('active')){
      faq.style.height = faqQuestion.offsetHeight + 'px';
      faq.classList.remove('active')
      
   } else {
      console.log(faqAnswer.offsetHeight + faqQuestion.offsetHeight);
      faq.style.height = faqAnswer.offsetHeight + faqQuestion.offsetHeight + 'px'
      faq.classList.add('active')

   }

   // console.log(activeFaqs);
   navToggleAnim(dirs[index], faq, index)
   dirs[index] *= -1

   
}

console.log('walid');


const faqWrappers = document.querySelectorAll("#faq .el") 
const faqWrappertest = document.querySelector("#faq .el .plusSign") 

console.log(faqWrappertest);

// let animDirection = 1
let anims = []
faqWrappers.forEach(wrapper =>{
   let answer = wrapper.querySelector('.answer')
   let question = wrapper.querySelector('.question')
   let animaItem = lottie.loadAnimation({
      container: wrapper.querySelector('.plusSign'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
   
      path: "./assets/Plus to X/plusToX.json"
   });
   console.log(animaItem);
   anims.push(animaItem)
   dirs.push(1)
   wrapper.style.height = question.offsetHeight + 'px';

   console.log(answer.offsetHeight , answer.clientHeight);
})




function navToggleAnim(dir , element, i) {
   anims[i].setDirection(dir)
   anims[i].play()
}


// swiper


const width = screen.width -200;

let slidesPerView= Math.ceil(width/600);
console.log(slidesPerView);


var swiper = new Swiper(".mySwiper", {
   slidesPerView: slidesPerView,
   spaceBetween: 30,
   centeredSlides: true,
   loop:true,
   autoplay: {
     delay: 10000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   dynamicBullets: true,
     
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });




let ytbanim = lottie.loadAnimation({
   container: document.querySelector('.ytblogo'),
   renderer: 'svg',
   loop: false,
   autoplay:false,
   path: "./assets/YouTube/youtube-2.json"
})
console.log(document.querySelector('.ytblogo'))

// ytbanim.setDirection(1)
// ytbanim.play()


let ytbBtn = document.querySelector('.homeBtns .button')

ytbBtn.addEventListener('mouseenter',() => {
   ytbanim.setDirection(1)
   ytbanim.play()
})

ytbBtn.addEventListener('mouseleave',() => {
   ytbanim.setDirection(-1)
   ytbanim.play()
})