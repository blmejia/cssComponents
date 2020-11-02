//Js for the navbar 
( () => {
const nav = document.querySelector(".nav")
const logo = document.getElementById("logo")
const linkColor =  document.querySelectorAll("#link")
const linkArr = [...linkColor]
const mobileMenu = document.querySelector('#mobile-menu');
const burgerColor = document.querySelector(".burger");

//mobile navigation
const burger = document.querySelector(".burger").addEventListener("click", function(){
   // alert("working");
    
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }

      mobileMenu.classList.add("animate__fadeInDown", "animate__animated");
    
})

window.onscroll = function(){
    if(window.scrollY > 80){
        nav.classList.add("nav-active",
        "animate__bounce", "animate__animated")
       
        logo.style.color = "black"
        burgerColor.style.color = "black"
        linkArr.forEach(a => {
            a.style.color ="black"
        })
      
    }
    else{
        nav.classList.remove("nav-active",
        "animate__bounce", "animate__animated")
            
       logo.style.color = "white"
       burgerColor.style.color = "white"

        linkArr.forEach(a => {
            a.style.color ="white"
        })
    }
}
})();


//////////////////



