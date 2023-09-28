// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navigation bar height
                    behavior: "smooth",
                });
            }
        });
    });
});

// Form submission handling
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(form);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            // Validate form data
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            // Simulate a form submission (replace with actual API call)
            setTimeout(() => {
                // Display a success message
                alert("Form submitted successfully!");

                // Clear the form
                form.reset();
            }, 1500); // Simulate a delay for demonstration
        });
    }
});

// Responsive navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
}

// Scrollspy for navigation highlighting
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
