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
    strings: ['Software Solutionist', 'Tablist', 'Autodidact'],

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

const contactForm = document.getElementById('contactForm');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');

if (typeof CONTACT_API_URL === 'undefined') {
    console.warn('CONTACT_API_URL is not defined. Make sure config.js is loaded before script.js');
}

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const payload = {
            name: formData.get('name')?.toString().trim(),
            email: formData.get('email')?.toString().trim(),
            phone: formData.get('phone')?.toString().trim(),
            subject: formData.get('subject')?.toString().trim(),
            message: formData.get('message')?.toString().trim()
        };

        if (!payload.name || !payload.email || !payload.subject || !payload.message) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing fields',
                text: 'Please fill all required fields before submitting.'
            });
            return;
        }

        try {
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.value = 'Sending...';

            const response = await fetch(CONTACT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Unable to send message right now.');
            }

            await Swal.fire({
                icon: 'success',
                title: 'Message sent!',
                text: data.message || 'Thanks for contacting me. I will get back to you soon.',
                confirmButtonText: 'OK'
            });

            contactForm.reset();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission failed',
                text: error.message || 'Something went wrong. Please try again.'
            });
        } finally {
            contactSubmitBtn.disabled = false;
            contactSubmitBtn.value = 'Send Message';
        }
    });
}