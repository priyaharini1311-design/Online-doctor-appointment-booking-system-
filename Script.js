// ================================
// Hospital Appointment System
// script.js
// ================================

// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to LifeCare Hospital");
});

// ================================
// Appointment Form Validation
// ================================

const form = document.querySelector(".appointment form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[type='tel']").value.trim();
        const department = form.querySelector("select").value;
        const date = form.querySelector("input[type='date']").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            department === "Select Department" ||
            date === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        alert(
            "Appointment Booked Successfully!\n\n" +
            "Name: " + name +
            "\nDepartment: " + department +
            "\nDate: " + date
        );

        form.reset();

    });

}

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// Sticky Header Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 6px 20px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.15)";

    }

});

// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// Doctor Card Animation
// ================================

const doctorCards = document.querySelectorAll(".doctor-card");

doctorCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});

// ================================
// Service Card Animation
// ================================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.background = "#0d6efd";
        card.style.color = "#fff";

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#fff";
        card.style.color = "#222";

    });

});
