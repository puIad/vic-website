// add member logic:


const soloInp = document.querySelector('#tsolo')
const teamInp = document.querySelector('#tteam')
const teamContainer = document.querySelector('.step2 .container')
const teamMembersN = document.querySelector('#teamMembersN')


// soloInp.addEventListener('input', () => {
//    teamContainer.innerHTML = ''
//    updateMembers()
//    updateNumOfMembers(0)
// })

// teamInp.addEventListener('input', ()=>{

// })

function createNewMemberInp(n) {
   let memberContainer = document.createElement('div')
   memberContainer.classList.add('teamMember')
   memberContainer.classList.add(`teamMember${n}`)

   memberContainer.innerHTML = `
    
  <h2>Member ${n}</h2>
        
  <h2>Personal Information</h2>
  <div class="chunk">
    <div>
      <label for="m${n}name" class="imp">Full Name</label>
      <input
        type="text"
        name="member${n} full name"
        id="m${n}name"
        placeholder="Full Name"
        required
      />
      <label for="m${n}email" class="imp">Email address</label>
      <input
        type="email"
        name="member${n} email"
        id="m${n}email"
        placeholder="Email"
        required
      />
      
    </div>
    <div>
      <label for="m${n}phone" class="imp">Phone Number</label>
      <input
        type="tel"
        name="member${n} phone"
        id="m${n}phone"
        placeholder="Phone Number"
        required
      />
      <div class="smallInps">
        <div>
          <label for="m${n}wilaya" class="imp">Wilaya</label>
          <input
            required
            type="text"
            name="member${n} wilaya"
            id="m${n}wilaya"
            placeholder="Wilaya"
          />
        </div>

        <div>
          <label for="m${n}bd" class="imp">Date of birth</label>
          <input
            required
            type="text"
            name="member${n} birthday"
            id="m${n}bd"
            placeholder="Date of Birth"
          />
        </div>
      </div>
    </div>
  </div>

  <h2>Educational Background</h2>


    <div>
      <label for="m${n}uni" class="imp">University/ School Name</label>
      <input
         
        type="text"
        name="member${n} uni"
        id="m${n}uni"
        placeholder="University / school"
        required
      />
    </div>
    <div class="chunk">
    <div>
      <label for="m${n}yos" class="imp">Year of study</label>
      <input
        type="text"
        name="member${n} year of study"
        id="m${n}yos"
        placeholder="Year of Study"
        required
      />
    </div>
    <div>
      <label for="m${n}fos" class="imp">Field of study</label>
      <input
        type="text"
        name="member${n} field of study"
        id="m${n}fos"
        placeholder="Field of Study"
        required
      />
    </div>
    </div>

  <div class="accommondationchose">
    <div>
      <p>Needs an accommodation (a place to stay)?</p>
      <div class="radioInpContainer">
        <label class="radioContainer">
          <input
            type="radio"
            name="m${n} needs accomm"
            id="m${n}py"
            value="yes"
            checked
          />
          <div class="checkmark"></div>
        </label>
        <label for="m${n}py">Yes</label>

        <label class="radioContainer">
          <input
            type="radio"
            name="m${n} needs accomm"
            id="m${n}pn"
            value="no"
          />
          <div class="checkmark"></div>
        </label>
        <label for="m${n}pn">No</label>
      </div>
    </div>
  </div>

   
   `
   teamContainer.append(memberContainer)
}




function addMember() {
   let mCount = document.querySelector('#mcount')
   let currmm = parseInt(mCount.value)
   console.log(currmm);

   if (currmm <4 && currmm>0) {
      mCount.value++
   }


   // let teamMembersContainer = document.querySelectorAll('.teamMembers .teamMember')

   // let NumOfMembers = teamMembersContainer.length
   // console.log(NumOfMembers);
   // if (NumOfMembers < 3) {

   //    createNewMemberInp(NumOfMembers)
   //    updateNumOfMembers(NumOfMembers + 1)
   // }
   // updateMembers()
   teamInp.checked = true

}

function redMember(){
   let mCount = document.querySelector('#mcount')
   let currmm = parseInt(mCount.value)
   console.log(currmm);

   if(currmm == 2){
   soloInp.checked = true

   }
   if (currmm <=4 && currmm>1) {
      mCount.value--
   }
}

// addMember()

function deleteMember(p) {
   let teamMembersContainer = document.querySelectorAll('.teamMembers .member')
   let NumOfMembers = teamMembersContainer.length

   p.remove()
   updateNumOfMembers(NumOfMembers - 1)
   console.log(NumOfMembers);
   updateMembers()

   if (NumOfMembers == 1) {
      soloInp.checked = true
   }
}

function updateNumOfMembers(n) {
   teamMembersN.innerHTML = n + 1
}

function updateMembers() {
   let teamMembersContainer = document.querySelectorAll('.teamMembers .member')
   teamMembersContainer.forEach(member => {
      let i = [...teamMembersContainer].indexOf(member) + 2;
      let domI = member.querySelector('.memberIndex').innerHTML
      console.log(member, i, domI);
      if (i != domI) {
         let labels = member.querySelectorAll('label')
         labels.forEach(label => {
            let foratt = label.getAttribute('for')
            label.setAttribute('for', replaceChar(foratt, domI, i))
         })

         let inputs = member.querySelectorAll('input')
         inputs.forEach(input => {
            let id = input.id
            input.id = replaceChar(id, domI, i)

            let name = input.getAttribute('name');
            input.setAttribute('name', replaceChar(name, domI, i))
         })
         member.querySelector('.memberIndex').innerHTML = `${i}`
      }

   })
}

function replaceChar(string, i1, i2) {
   let index = string.indexOf(i1)
   return string.substring(0, index) + i2 + string.substring(index + 1)
}

// console.log(replaceChar('walid1d', 1, 2));

const step0 = document.querySelector('.step.step0')
const step1 = document.querySelector('.step.step1')
const step2 = document.querySelector('.step.step2')
const step3 = document.querySelector('.step.step3')
const fill = document.querySelector('.progress .fill')
const circleInfo = document.querySelector('.circle.info')
const circleUsers = document.querySelector('.circle.users')
const circleBook = document.querySelector('.circle.book')

function nextSlide(el) {


   let mCount = document.querySelector('#mcount')
   let currmm = parseInt(mCount.value)

   
   let currStep = el.dataset.step;

   let teamMembers = document.querySelectorAll('.step2 .teamMember')

   

   if(verifyStep(el) == true){

      scrollTo({
         top: 0,
         behavior: 'smooth'
      })
      if(currStep == 0){
         step0.style.display = 'none'
         step1.style.display = 'block'
         fill.setAttribute('data-progress', 1)

         circleInfo.classList.add('active')
         circleUsers.classList.remove('active')
         circleBook.classList.remove('active')
      }
   
      if(currStep == 1){
         step1.style.display = 'none'
         step2.style.display = 'block'
         fill.setAttribute('data-progress', 2)

         circleInfo.classList.add('active')
         circleUsers.classList.add('active')
         circleBook.classList.remove('active')


         teamMembers.forEach(m=>{
            m.remove()
         })
      
      for(let i=1; i<=currmm;i++){
         createNewMemberInp(i)
      }

      }
   
      if(currStep == 2){
         step2.style.display = 'none'
         step3.style.display = 'block'
         fill.setAttribute('data-progress', 3)

         circleInfo.classList.add('active')
         circleUsers.classList.add('active')
         circleBook.classList.add('active')
      }

   }
   console.log(verifyStep(el));
}


function prevSlide(el){
   let currStep = el.dataset.step;

   

   if(currStep == 1){
      step1.style.display = 'none'
      step0.style.display = 'flex'

      fill.setAttribute('data-progress', 0)

         circleInfo.classList.remove('active')
         circleUsers.classList.remove('active')
         circleBook.classList.remove('active')
   }

   if(currStep == 2){
      step2.style.display = 'none'
      step1.style.display = 'block'

      fill.setAttribute('data-progress', 1)

         circleInfo.classList.add('active')
         circleUsers.classList.remove('active')
         circleBook.classList.remove('active')
   }
   if(currStep == 3){
      step3.style.display = 'none'
      step2.style.display = 'block'

      fill.setAttribute('data-progress', 2)

         circleInfo.classList.add('active')
         circleUsers.classList.add('active')
         circleBook.classList.remove('active')
   }
}

function verifyStep(el) {
   let r = true
   

   let divInputs = el.querySelectorAll('input[required]:not([type="radio"])')
   divInputs.forEach(inp=>{
      if(inp.value ==''){

         inp.classList.add('red')
         r=false
      } 
     
   })
   return r
}

document.querySelectorAll('input').forEach(input=>{
   input.addEventListener('input', () => {
      console.log('asd');
      input.classList.remove('red')
   })
})
// console.log('asd');
const yesnos = document.querySelectorAll('.step3 .chunk > div')
// console.log(document.querySelectorAll('.experiences'));

yesnos.forEach(c => {
   console.log(c);
   let yes = c.querySelector('input[value="yes"]')

   let no = c.querySelector('input[value="no"]')
   let more = c.querySelector('.moreInfo')
   console.log(more);
   no.addEventListener('input', () => {
      more.style.display = 'none'
      console.log('..');
      more.querySelector('input').required = false
   })

   yes.addEventListener('input', () => {
      more.style.display = 'flex'
      more.querySelector('input').setAttribute('required', '')
   })
})


// FORM



const dateInp = document.querySelector('input[name="time"]')

let form = document.querySelector('form');
let submitBtn = document.querySelector('button[type="submit"]')
form.addEventListener("submit", e => {
   submitBtn.classList.add('clicked');
   submitBtn.setAttribute('disabled', true)
   e.preventDefault();
   dateInp.value = new Date()

   fetch(form.action, {
      method: "POST",
      body: new FormData(form),
   }).then(
      response => response.json()
   ).then((html) => {
      let membersarr = []
      let membersCount = parseInt(document.querySelector('input#mcount').value)
      const teamNameInp = document.querySelector('input#teamName')

      for (let i = 1; i <= membersCount; i++) {
         let fullName = document.querySelector(`input#m${i}name`).value;
         let email = document.querySelector(`input#m${i}email`).value;
         membersarr.push({fullName:fullName,email:email});

      }
      
      const m1nameInp = document.querySelector('input#m1name')
      const m1emailInp = document.querySelector('input#m1email')
      let teamMembersContainer = document.querySelectorAll('.teamMembers .member')
      let members = []
      for (let i = 0; i < [...teamMembersContainer].length; i++) {
         members.push(teamMembersContainer[i].querySelector('input[placeholder="Full Name"]').value)
         
      }
      let msgObj = {
      name:m1nameInp.value,
      email:m1emailInp.value,
      teamName:teamNameInp.value,
      teamMembersCount:teamMembersContainer.length,
      teamMembers:members

      }

      // let msg = `Hi <strong>${msgObj.email}</strong> aka <strong>${msgObj.name}</strong>, You are receiving this email because you registered in polymaze as <strong>${msgObj.teamName}</strong>
      

      // with <strong>${msgObj.teamMembersCount}</strong> other members : <strong></strong>`
      


    membersarr.forEach(member=>{
      let msg = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Email Template</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
body{
    margin: auto;
}
.container{
    max-width: 500px;
    margin: auto;
    position: relative;
}
*{
    margin: 0;
    padding: 0;
}
    .container {
        background: linear-gradient(to bottom, black, rgb(37, 43, 5));
        font-family: 'Roboto Condensed', sans-serif;
        overflow-y: scroll;
    }
    
    header {
        width: 100%;
        background-color: black;
        color: white;
        margin: 0;
        
        
        z-index: 1;
    }
    
    .club{
        width:100%;
    }
    
    header .club img{
        margin: 10px;
        height: 3rem;
        object-fit: contain;
        max-width: 30%;
        width:120px;
    }
    header .club .maze {
        width: 170px;
        border: 0;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .social img {
        width: 30px;
    }
    
    .social {
        display: flex;
        justify-content: center; 
        gap: 10px; 
        width:100%;
    }

    .social a{
        color: aliceblue;
        font-size: 1rem;
    }
    
    footer .social {
        margin-top: 3rem;
        width: 100%;
        justify-content: center;
    }
    
    .text {
        margin: 20px;
        padding: 120px 0;
    }
    
    span {
        color: rgb(191, 224, 8);
        font-weight: bold;
    }
    
    p {
        font-size: 1.2em;
        color: aliceblue;
    }
    
    

    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
    <div class="container">
        <header> 
            <div class="club">
                <img src="https://polymaze.vic-enp.com/assets/logopolymaze_h.png" alt="head" class="maze">
                
            </div>
        </header>
        <section class="text">
            <p>
                Dear ${member.fullName},<br><br> <br>
                We are pleased to confirm that your registration for <span>POLYMAZE 2024</span> has been successfully received. Your application is now officially submitted!<br><br>
                We wish you the best of luck with the selection process.<br>
                If you have any further questions or concerns, please don't hesitate to contact us via our platforms.<br><br> <br> <br>
                Best regards,<br>
            </p>
        </section>
        <footer>
            <div class="social">
                <a href="https://www.facebook.com/vic.enpa"><img src ="https://polymaze.vic-enp.com/email/images/facebook.png"></a>
                <a href="https://www.instagram.com/vic.enp/"><img src ="https://polymaze.vic-enp.com/email/images/insta.png"></a>
                <a href="https://www.linkedin.com/company/vicenp/"><img src ="https://polymaze.vic-enp.com/email/images/linkdin.png"></a>
            </div>
        </footer>
    </div>
</body>
</html>
`
      let msgObj = {
         name:member.fullName,
         email:member.email,
         teamName:teamNameInp.value,
         
         
   
         }
       sendEmail(msg,msgObj.email)
    })
      window.open('../page.html', '_self');

   }).catch(err => {
      window.open('../error.html', '_blank')
   })
});



// yes/no inputs pop out




// Require:
// var postmark = require("postmark");

// Send an email:
// var client = new postmark.ServerClient("954883b8-7421-4afc-bba4-c022df0797bc");

function sendEmail(obj ,email){
   Email.send({
      SecureToken : "f34bb377-0cbf-426f-be81-a3b134b910c1 ",
      
      To : email,
      From : "polymaze@vic-enp.com",
      FromName: "POLYMAZE REGESTRATION",

      Subject : "Subject: Confirmation of Registration for PolyMaze 2024",
      TemplateName: "C",
      Body : obj
  }).then(
    message => console.log(message)
  );

}



