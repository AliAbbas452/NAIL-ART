// Mobile Menu

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Book Service

function bookService(serviceName) {

    document.getElementById("service").value = serviceName;

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

}


// Contact Form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || service === "") {

        formMessage.innerText =
            "Please fill all required fields.";

        return;
    }

    formMessage.innerText =
        "Thank you " + name +
        "! Your appointment request has been received. 💅";

    document.getElementById("contactForm").reset();

});


// Gallery Image Click

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(image.src, "_blank");

    });

});