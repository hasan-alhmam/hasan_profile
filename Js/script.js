// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");


menuBtn.onclick = () => {

    navbar.classList.toggle("active");

};


// Close menu when clicking link

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("active");

    }

});


// ===========================
// TYPING EFFECT
// ===========================

const text = "Software Engineer";

let index = 0;

let isDeleting = false;

const typingElement = document.querySelector(".home-content h2");


function typing(){

    if(!typingElement) return;


    if(!isDeleting){

        typingElement.textContent = text.substring(0,index++);

        if(index > text.length){

            isDeleting = true;

            setTimeout(typing,1000);

            return;

        }


    }else{

        typingElement.textContent = text.substring(0,index--);


        if(index === 0){

            isDeleting = false;

        }

    }


    setTimeout(typing,100);

}


typing();


// ===========================
// SCROLL REVEAL
// ===========================

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let top = window.scrollY;

        let offset = section.offsetTop - 500;

        let height = section.offsetHeight;


        if(top >= offset && top < offset + height){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }


    });


});


// ===========================
// INITIAL ANIMATION
// ===========================

window.onload = ()=>{


    document.querySelectorAll("section").forEach(section=>{

        section.style.opacity="0";

        section.style.transform="translateY(50px)";

        section.style.transition="0.8s";

    });


};