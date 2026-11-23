const form = document.getElementById("registration-form");
const success = document.getElementById("success");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Each object stores an input ID and the message to show if it is empty.
const fields = [
    { id: "first-name", requiredMessage: "Enter your first name." },
    { id: "last-name", requiredMessage: "Enter your last name." },
    { id: "phone", requiredMessage: "Enter your phone number." },
    { id: "email", requiredMessage: "Enter your email." },
    { id: "address", requiredMessage: "Enter your street address." },
    { id: "password", requiredMessage: "Enter your password." },
    { id: "confirm-password", requiredMessage: "Re-enter your password." }
];

// FUNCTION 1: Check one input.
// Return an error message if a rule fails. Return "" if it passes.
function getError(input, requiredMessage) {
    // trim() also catches fields that contain only spaces.
    if (input.validity.valueMissing || input.value.trim() === "") {
        return requiredMessage;
    }

    // The browser gets these rules from type="email" and pattern in the HTML.
    if (input.validity.typeMismatch) {
        return "Enter an email like daniel@example.com.";
    }

    if (input.validity.patternMismatch) {
        return "Use this phone format: 847-555-0134.";
    }

    if (input === password) {
        const value = input.value;

        if (value.length < input.minLength) {
            return "Use at least " + input.minLength + " characters.";
        }

        // Each test checks for one required character type.
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbol = /[!@#$%^&*]/.test(value);

        if (!hasUppercase || !hasLowercase || !hasNumber || !hasSymbol) {
            return "Include an uppercase letter, a lowercase letter, a number, and a symbol from !@#$%^&*.";
        }
    }

    // Compare the two passwords exactly as typed.
    if (input === confirmPassword && input.value !== password.value) {
        return "The passwords must match.";
    }

    return "";
}

// FUNCTION 2: Check all seven inputs when the user submits the form.
function validateForm(event) {
    event.preventDefault();
    success.textContent = "";

    let allValid = true;

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.id + "-error");

        // An empty message clears any custom error from a previous attempt.
        input.setCustomValidity(getError(input, field.requiredMessage));

        if (input.checkValidity()) {
            error.textContent = "";
        } else {
            error.textContent = input.validationMessage;
            allValid = false;
        }
    }

    // Only show success after every field passes.
    if (allValid) {
        form.reset();
        success.textContent = "Registration successful!";
    }
}

// FUNCTION 3: Clear the previous success message when typing starts again.
function clearSuccess() {
    success.textContent = "";
}

// Connect the functions to the form's submit and input events.
form.addEventListener("submit", validateForm);
form.addEventListener("input", clearSuccess);