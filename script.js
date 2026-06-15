```javascript
// Welcome message
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("👋 Welcome to SafeHer!\nYour safety is our priority.");
    }, 800);
});

// SOS Button Functionality
const sosBtn = document.getElementById("sosBtn");

if (sosBtn) {
    sosBtn.addEventListener("click", () => {

        sosBtn.innerHTML = "⏳ Sending...";
        sosBtn.disabled = true;

        setTimeout(() => {
            alert(
                "🚨 SOS Activated!\n\n" +
                "✔ Emergency alert sent\n" +
                "✔ Trusted contacts notified\n" +
                "✔ Live location shared"
            );

            sosBtn.innerHTML = "🚨 SOS";
            sosBtn.disabled = false;

        }, 2000);
    });
}

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// Get Started button
const getStartedBtn = document.querySelector(".primary-btn");

if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
        document
            .getElementById("features")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}

// Learn More button
const learnMoreBtn = document.querySelector(".secondary-btn");

if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
        document
            .getElementById("about")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}
```
