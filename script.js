let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading,.about-content p', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form, .gallery-container' ,{ origin: 'bottom ' });

const typed = new Typed('.multi',{
    strings: ['Web Dev Intern', 'Tablist', 'Student'],

    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}