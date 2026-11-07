
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const heading = document.getElementById("heading");
const subtitle = document.getElementById("subtitle");
const message = document.getElementById("message");

// Show Login Form
function showLogin() {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    heading.textContent = "Welcome Back!";
    subtitle.textContent =
        "Log in and continue your creative journey.";

    message.textContent = "";
}

// Show Registration Form
function showRegister() {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    heading.textContent = "Join Our Community!";
    subtitle.textContent =
        "Create an account and discover your next hobby.";

    message.textContent = "";
}

// Display message
function showMessage(text, success) {
    message.textContent = text;
    message.style.color = success ? "green" : "red";
}

// Login Validation
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        showMessage("Please fill in all fields!", false);
    }
    else if (!loginForm.checkValidity()) {
        showMessage("Please enter a valid email!", false);
    }
    else {
        showMessage(
            "Login form validated! PHP authentication is still required.",
            true
        );
    }
});

// Registration Validation
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("registerEmail").value.trim();
    let password = document.getElementById("registerPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirm) {
        showMessage("Please fill in all fields!", false);
    }
    else if (!registerForm.checkValidity()) {
        showMessage(
            "Enter a valid email and password of at least 8 characters!",
            false
        );
    }
    else if (password !== confirm) {
        showMessage("Passwords do not match!", false);
    }
    else {
        showMessage(
            "Registration form validated! PHP is required to save your account.",
            true
        );
    }
});
