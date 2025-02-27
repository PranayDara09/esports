const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;
const darkModeToggle = document.getElementById("darkModeToggle");

// Initialize Slider
document.addEventListener("DOMContentLoaded", () => {
    initializeSlider();
    checkDarkMode();
});

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
        console.log("Slider initialized");
    } else {
        console.log("No slides found!");
    }
}

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove("displaySlide"));
    slides[slideIndex].classList.add("displaySlide");
}

// Restart interval after manual click
function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
    resetInterval();
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    resetInterval();
}

// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = (sidebar.style.right === "0px") ? "-250px" : "0px";
}

// Dark Mode Functionality
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save user preference in LocalStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Check if Dark Mode is enabled
function checkDarkMode() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
}

// Event Listener for Dark Mode Toggle
darkModeToggle.addEventListener("click", toggleDarkMode);
