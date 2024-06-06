const toggles=document.querySelectorAll(".toggle")
const signIn= document.querySelector('.signIn')
const signUp=document.querySelector('.signUp') 
const container = document.querySelector('.container');


toggles.forEach(toggle=>{
toggle.addEventListener('click',e=>{

    signIn.classList.toggle("show");
    signUp.classList.toggle("show")
    //    ChangeBG()
})
})
// function ChangeBG(){
//     if(signUp.classList.contains("show")){
//         container.style.backgroundImage = 'url(https://i.ibb.co/fM6fG9Y/retro-computer-desk-arrangement-23-2150244352-1.jpg)';
       
//     }else if(signIn.classList.contains("show")){
//         container.style.backgroundImage = 'url(https://i.ibb.co/qyjsnwX/90s-elements-still-life-background-23-2150555403-1.jpg)';
      
//     }
// }
// ChangeBG()