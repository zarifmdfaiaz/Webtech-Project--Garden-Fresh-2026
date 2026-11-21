
function checkContactForm() {
    var name = document.getElementById("contactName").value.trim();
    var email = document.getElementById("contactEmail").value.trim();
    var message = document.getElementById("contactMessage").value.trim();
    var valid = true;

    document.getElementById("contactNameError").textContent = "";
    document.getElementById("contactEmailError").textContent = "";
    document.getElementById("contactMessageError").textContent = "";
    document.getElementById("contactSuccess").textContent = "";

    if (name === "") {
        document.getElementById("contactNameError").textContent =
            "Enter your name.";
        valid = false;
    }

    if (email === "" || email.indexOf("@") === -1) {
        document.getElementById("contactEmailError").textContent =
            "Enter an email containing @.";
        valid = false;
    }

    if (message === "") {
        document.getElementById("contactMessageError").textContent =
            "Enter your message.";
        valid = false;
    }

    if (valid === false) {
        return false;
    }

    document.getElementById("contactSuccess").textContent =
        "Your message passed validation. Thanks for contacting us.";

  
    return false;
}

document.getElementById("contactForm").addEventListener("reset", function () {
    document.getElementById("contactNameError").textContent = "";
    document.getElementById("contactEmailError").textContent = "";
    document.getElementById("contactMessageError").textContent = "";
    document.getElementById("contactSuccess").textContent = "";
});
