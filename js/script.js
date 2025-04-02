// Counter Animatsiyasi
document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { id: "students-counter", end: 150, duration: 2000 },
        { id: "courses-counter", end: 50, duration: 2000 },
        { id: "awards-counter", end: 1000, duration: 2000 },
    ];

    counters.forEach((counter) => {
        const element = document.getElementById(counter.id);
        let start = 0;
        const increment = counter.end / (counter.duration / 16); // 60 FPS
        const updateCounter = () => {
            start += increment;
            if (start >= counter.end) {
                element.textContent = `+${Math.floor(counter.end)}`;
                return;
            }
            element.textContent = `+${Math.floor(start)}`;
            requestAnimationFrame(updateCounter);
        };
        updateCounter();
    });
});

// Scroll Animatsiyasi
const elementsToAnimate = document.querySelectorAll(".course, .testimonial");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1 }
);

elementsToAnimate.forEach((element) => {
    observer.observe(element);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Navbar balandligini hisobga olamiz
                behavior: "smooth",
            });
        }
    });
});

// Newsletter Formasi Validatsiyasi
const form = document.getElementById("newsletter-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    let errorMessage = "";

    // Name validatsiyasi
    if (nameInput.value.trim() === "") {
        isValid = false;
        errorMessage += "Ism kiritish majburiy.\n";
    }

    // Email validatsiyasi
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        errorMessage += "Iltimos, to‘g‘ri elektron pochta manzilini kiriting.\n";
    }

    // Message validatsiyasi
    if (messageInput.value.trim() === "") {
        isValid = false;
        errorMessage += "Xabar kiritish majburiy.\n";
    }

    if (isValid) {
        alert("Obuna bo‘lganingiz uchun rahmat!");
        form.reset();
    } else {
        alert(errorMessage);
    }
});

document.getElementById("burger-menu").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});