// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
