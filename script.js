window.addEventListener("load", () => {

    if (!localStorage.getItem("safeherWelcomeShown")) {

        setTimeout(() => {
            alert("👋 Welcome to SafeHer!\nYour safety is our priority.");

            localStorage.setItem("safeherWelcomeShown", "true");

        }, 800);

    }

});


// SOS Button Functionality with Popup
const sosBtn = document.getElementById("sosBtn");
const sosPopup = document.getElementById("sosPopup");

if (sosBtn) {

    sosBtn.addEventListener("click", () => {

        sosBtn.innerHTML = "⏳ Sending Alert...";
        sosBtn.disabled = true;

        setTimeout(() => {

            if (sosPopup) {
                sosPopup.style.display = "flex";
            }

            sosBtn.innerHTML = "🚨 SOS";
            sosBtn.disabled = false;

        }, 2000);

    });

}

// Close Popup Function
function closePopup() {

    if (sosPopup) {
        sosPopup.style.display = "none";
    }

}

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Get Started button
const getStartedBtn = document.querySelector(".primary-btn");

if (getStartedBtn) {

    getStartedBtn.addEventListener("click", () => {

        const features = document.getElementById("features");

        if (features) {
            features.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}

// Learn More button
const learnMoreBtn = document.querySelector(".secondary-btn");

if (learnMoreBtn) {

    learnMoreBtn.addEventListener("click", () => {

        const about = document.getElementById("about");

        if (about) {
            about.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}
