// EMAIL-JS
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        number : document.getElementById("phone_number").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_d9a2ia6","template_si5inn3",parms).then(alert("Email Send!!"))
}


// FAQ'S-SECTION
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
})

// ---------------- CHANGE BACKGRUOUND HEADER ----------------
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ---------------------- COUNTER SECTION -----------------------
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // The lower the number, the faster the count

    const startCounter = (counter, isPercentage) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace("%", ""); // Remove percentage sign for the calculation
            
            // Calculate increment
            const increment = target / speed;

            // If the count is less than the target, keep incrementing
            if (count < target) {
                if (isPercentage) {
                    counter.innerText = `${Math.ceil(count + increment)}%`; // Add percentage sign if required
                } else {
                    counter.innerText = `${Math.ceil(count + increment)}`; // No percentage sign
                }
                setTimeout(updateCount, 50);
            } else {
                if (isPercentage) {
                    counter.innerText = `${target}%`; // Ensure it ends at target with %
                } else {
                    counter.innerText = `${target}`; // No percentage sign for first and last counters
                }
            }
        };

        updateCount();
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Trigger the counter animation when it's in the viewport
    const checkCounters = () => {
        counters.forEach((counter, index) => {
            if (isInViewport(counter)) {
                if (index === 0 || index === counters.length - 1) {
                    // First and last counters: no percentage
                    startCounter(counter, false);
                } else {
                    // Other counters: show percentage
                    startCounter(counter, true);
                }
            }
        });
    };

    // Check on scroll and on load
    window.addEventListener('scroll', checkCounters);
    checkCounters();
});

// ---------------- COURSES SECTION ---------------
new Swiper('.courses-content-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    // Responsive
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
    
  });



// --------------- TESTIMONIAL SECTION ----------------
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for(let i=0; i<indicatorImages.length; i++){
    indicatorImages[i].addEventListener("click", function(){
        // console.log(this.getAttribute("data-id"))
        for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");
        const id=this.getAttribute("data-id");
        // remove class active from all slides
        for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
        }
        slides[id].classList.add("active");
    })
}


