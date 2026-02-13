// Waitlist Form
const form = document.getElementById("waitlistForm");
const emailInput = document.getElementById("emailInput");
const waitlistNumber = document.getElementById("waitlistNumber");
const ctaBtn = document.querySelector(".cta-btn");
const scrollTopBtn = document.getElementById("scrollTop");

// Scroll to waitlist section
ctaBtn.addEventListener("click", () => {
    document.getElementById("waitlist").scrollIntoView({
        behavior: "smooth"
    });
});

// Handle form submit
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (emailInput.value !== "") {
        let currentNumber = parseInt(waitlistNumber.textContent);
        waitlistNumber.textContent = currentNumber + 1;
        alert("You joined the waitlist!");
        emailInput.value = "";
    }
});

// Show scroll-to-top button
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll to top
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
