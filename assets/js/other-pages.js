// -------------------------------------------------------COURSES-PAGE-JS------------------------------------------------------------------

// Function to search for courses based on input in the search bar
function searchCourses() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let courses = document.getElementsByClassName('course-card');
    let firstMatch = null; 

    for (let i = 0; i < courses.length; i++) {
        let courseTitle = courses[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        
        if (courseTitle.includes(input)) {
            courses[i].style.display = "flex"; 
            if (firstMatch === null) {
                firstMatch = courses[i]; 
            }
        } else {
            courses[i].style.display = "none"; 
        }
    }

    // Scroll to the first matching course if it exists
    if (firstMatch !== null) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
  
  // Function to filter courses based on level (foundation, intermediate, advanced)
  function filterCourses(level) {
    let courses = document.getElementsByClassName('course-card');
  
    // Loop through all courses and filter based on level
    for (let i = 0; i < courses.length; i++) {
      if (level === 'all') {
        courses[i].style.display = "flex";  
      } else if (courses[i].classList.contains(level)) {
        courses[i].style.display = "flex";  
      } else {
        courses[i].style.display = "none";  
      }
    }
  }
  
  // Show all courses on page load
  window.onload = function() {
    filterCourses('all');
  };
  
  // Function to navigate to course content page
  function goToCoursePage(courseId) {
    window.location.href = `${courseId}.html`; 
  }


// -------------------------------------------------------EVENT-GALLERY-PAGE-JS------------------------------------------------------------------
// Event-Home-Image-Slider
// const eventBtns = document.querySelectorAll('.event-nav-btn');
// const eventSlides = document.querySelectorAll('.event-img-slide');
// const eventContents = document.querySelectorAll('.event-content');

// let sliderNav = function(manual){
//   eventBtns.forEach((btn) => {
//     btn.classList.remove("active")
//   });
//   eventSlides.forEach((slide) => {
//     slide.classList.remove("active")
//   });
//   eventContents.forEach((content) => {
//     content.classList.remove("active")
//   });

//   eventBtns[manual].classList.add("active");
//   eventSlides[manual].classList.add("active");
//   eventContents[manual].classList.add("active");
// }

// eventBtns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     sliderNav(i);
//   });
// });
const eventBtns = document.querySelectorAll('.event-nav-btn');
const eventSlides = document.querySelectorAll('.event-img-slide');
const eventContents = document.querySelectorAll('.event-content');
const eventHome = document.querySelector('.event-home');

let currentSlide = 0; // Keeps track of the current slide index

// Function to update the active slide
let sliderNav = function(manual) {
  eventBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  eventSlides.forEach((slide) => {
    slide.classList.remove("active");
  });
  eventContents.forEach((content) => {
    content.classList.remove("active");
  });

  eventBtns[manual].classList.add("active");
  eventSlides[manual].classList.add("active");
  eventContents[manual].classList.add("active");
};

// Event listeners for manual navigation
eventBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
    currentSlide = i; // Update the current slide index
    resetInterval(); // Reset the interval to prevent skipping
  });
});

// Function to automatically change slides
const autoSlide = () => {
  currentSlide = (currentSlide + 1) % eventSlides.length; // Loop back to the first slide
  sliderNav(currentSlide);
};

// Set an interval for auto-sliding
let slideInterval = setInterval(autoSlide, 6000);

// Function to reset the interval (to restart the timer after manual interaction)
const resetInterval = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 6000);
};
if (eventHome) {
  eventHome.addEventListener('mouseenter', () => {
    clearInterval(slideInterval); // Pause the slider
  });

  eventHome.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 6000); // Resume the slider
  });
} 


// Gallery-Section
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function showGallery(id) {
  const allGalleries = document.querySelectorAll('.gallery-images');
  allGalleries.forEach(gallery => gallery.style.display = 'none');
  
  const selectedGallery = document.getElementById(id);
  selectedGallery.style.display = 'flex';
}

function searchImages() {
  const searchBar = document.getElementById('search-bar').value.toLowerCase();
  const images = document.querySelectorAll('.gallery img');
  
  images.forEach(image => {
    const date = image.getAttribute('data-date').toLowerCase();
    if (date.includes(searchBar)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}
window.onload = () => showGallery('career1');
