const header = document.querySelector('header.showOnMobile')

const animContainer = document.querySelector('.navToggleWrapper')
// let svgContainer = document.querySelector('.bodymovinanim');

let animDirection = 1

let animItem = lottie.loadAnimation({
   container: animContainer,
   renderer: 'svg',
   loop: false,
   // setDirection: 1,
   autoplay: false,

   path: "../assets/Menu V2/menuV2.json"
});

function navToggle() {
   navToggleAnima(animDirection)
   animDirection = -1 * animDirection
   header.classList.toggle('active')
}

function navToggleAnima(dir) {
   animItem.setDirection(dir)
   animItem.play()
}

// navToggleAnim(1)


const homesec = document.querySelector('#home')
const polymazesec = document.querySelector('#polymaze')
const registersec = document.querySelector('#register')
const faqsec = document.querySelector('#faq')
const specsec = document.querySelector('#specifications')
const testimoniessec = document.querySelector('#testimonies')
const abtussec = document.querySelector('#Aboutus')

const homebtnd = document.querySelector('.hideOnMobile .navLink.home')
const polymazebtnd = document.querySelector('.hideOnMobile .navLink.polymaze')
const participatebtnd = document.querySelector('.hideOnMobile .navLink.participate')
const faqbtnd = document.querySelector('.hideOnMobile .navLink.faq')
const specificationsbtnd = document.querySelector('.hideOnMobile .navLink.specifications')
const testimoniesbtnd = document.querySelector('.hideOnMobile .navLink.testimonies')
const abtusbtnd = document.querySelector('.hideOnMobile .navLink.abtus')


const homebtnm = document.querySelector('.showOnMobile .navLink.home')
const polymazebtnm = document.querySelector('.showOnMobile .navLink.polymaze')
const participatebtnm = document.querySelector('.showOnMobile .navLink.participate')
const faqbtnm = document.querySelector('.showOnMobile .navLink.faq')
const specificationsbtnm = document.querySelector('.showOnMobile .navLink.specifications')
const testimoniesbtnm = document.querySelector('.showOnMobile .navLink.testimonies')
const abtusbtnm = document.querySelector('.showOnMobile .navLink.abtus')

const navLinks = document.querySelectorAll('.navLink')
let sp = screen.height/10
addEventListener('scroll',()=>{
   let y = scrollY 

   if (y<= homesec.offsetHeight) {
      homebtnd.classList.add('active')
      polymazebtnd.classList.remove('active')
      homebtnm.classList.add('active')
      polymazebtnm.classList.remove('active')
   } else if (y>= homesec.offsetHeight && y< polymazesec.offsetHeight + polymazesec.offsetTop -100)  {
      homebtnd.classList.remove('active')
      polymazebtnd.classList.add('active')
      participatebtnd.classList.remove('active')
      homebtnm.classList.remove('active')
      polymazebtnm.classList.add('active')
      participatebtnm.classList.remove('active')
   } else if (y>= polymazesec.offsetHeight  + polymazesec.offsetTop && y< registersec.offsetHeight  + registersec.offsetTop -100) {
      polymazebtnd.classList.remove('active')
      participatebtnd.classList.add('active')
      faqbtnd.classList.remove('active')
      polymazebtnm.classList.remove('active')
      participatebtnm.classList.add('active')
      faqbtnm.classList.remove('active')
   } else if (y>= registersec.offsetHeight   + registersec.offsetTop && y< faqsec.offsetHeight   + faqsec.offsetTop -100) {
      participatebtnd.classList.remove('active')
      faqbtnd.classList.add('active')
      specificationsbtnd.classList.remove('active')
      participatebtnm.classList.remove('active')
      faqbtnm.classList.add('active')
      specificationsbtnm.classList.remove('active')
   } else if (y>= faqsec.offsetHeight  + faqsec.offsetTop && y< specsec.offsetHeight  + specsec.offsetTop -100) {
      faqbtnd.classList.remove('active')
      specificationsbtnd.classList.add('active')
      testimoniesbtnd.classList.remove('active')
      faqbtnm.classList.remove('active')
      specificationsbtnm.classList.add('active')
      testimoniesbtnm.classList.remove('active')
   } else if (y>= specsec.offsetHeight + specsec.offsetTop && y< testimoniessec.offsetHeight + testimoniessec.offsetTop -100) {
      specificationsbtnd.classList.remove('active')
      testimoniesbtnd.classList.add('active')
      abtusbtnd.classList.remove('active')
      specificationsbtnm.classList.remove('active')
      testimoniesbtnm.classList.add('active')
      abtusbtnm.classList.remove('active')

   } else if (y>= testimoniessec.offsetHeight + testimoniessec.offsetTop && y< abtussec.offsetHeight  + abtussec.offsetTop -100) {
      abtusbtnd.classList.add('active')
      testimoniesbtnd.classList.remove('active')
      abtusbtnm.classList.add('active')
      testimoniesbtnm.classList.remove('active')

   } 
})




let y = scrollY

if (y<= homesec.offsetHeight) {
   homebtnd.classList.add('active')
   homebtnm.classList.add('active')
} else if (y> homesec.offsetHeight && y<= polymazesec.offsetHeight + polymazesec.offsetTop) {
   polymazebtnd.classList.add('active')
   polymazebtnm.classList.add('active')
   console.log(y,polymazesec.offsetHeight + polymazesec.offsetTop);
} else if (y> polymazesec.offsetHeight  + polymazesec.offsetTop && y<= registersec.offsetHeight  + registersec.offsetTop) {
   participatebtnd.classList.add('active')
   participatebtnm.classList.add('active')
} else if (y> registersec.offsetHeight   + registersec.offsetTop && y<= faqsec.offsetHeight   + faqsec.offsetTop) {
   faqbtnd.classList.add('active')
   faqbtnm.classList.add('active')
} else if (y> faqsec.offsetHeight  + faqsec.offsetTop && y<= specsec.offsetHeight  + specsec.offsetTop) {
   specificationsbtnd.classList.add('active')
   specificationsbtnm.classList.add('active')
} else if (y> specsec.offsetHeight + specsec.offsetTop && y<= testimoniessec.offsetHeight + testimoniessec.offsetTop) {
   testimoniesbtnd.classList.add('active')
   testimoniesbtnm.classList.add('active')

} else if (y> testimoniessec.offsetHeight + testimoniessec.offsetTop && y<= abtussec.offsetHeight  + abtussec.offsetTop) {
   abtusbtnd.classList.add('active')
   abtusbtnm.classList.add('active')

} 

navLinks.forEach(l=>{
   console.log(l);
   l.addEventListener('click',()=>{
      navLinks.forEach(el=>{
         el.classList.remove('active')
      })
      l.classList.add('active')
      if (l.parentElement.parentElement.classList.contains('showOnMobile')) {
         // navToggle()
      }
   })
})