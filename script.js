// Welcome message
window.onload = function () {
    alert("🌸 Welcome to NKH VOYAGES! Start planning your next adventure.");
};

// Explore button
const exploreBtn = document.querySelector("button");

exploreBtn.addEventListener("click", function () {
    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
});

// Contact Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value.trim();
    let email = document.querySelector('input[type="email"]').value.trim();
    let destination = document.querySelector("select").value;
    let message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(
        "Thank you, " +
        name +
        "!Your trip to " +
        destination +
        " has been received.\nWe will contact you soon!"
    );

    form.reset();
});