// DOM: Find the HTML elements this script needs.
const form = document.getElementById("registration-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const success = document.getElementById("success");

// Arrays and objects: Each object stores an input ID and its required message.
const fields = [
    { id: "first-name", requiredMessage: "Enter your first name." },
    { id: "last-name", requiredMessage: "Enter your last name." },
    { id: "phone", requiredMessage: "Enter your phone number." },
    { id: "email", requiredMessage: "Enter your email." },
    { id: "address", requiredMessage: "Enter your street address." },
    { id: "password", requiredMessage: "Enter your password." },
    { id: "confirm-password", requiredMessage: "Re-enter your password." }
];

// FUNCTION 1: Check one input and return the first error found.
// An empty string means it passed all its checks.
function getError(input, requiredMessage) {
    if (input.validity.valueMissing || input.value.trim() === "") {
        return requiredMessage;
    }

    // Constraint Validation API: Ask the browser which HTML rule failed.
    if (input.validity.typeMismatch) {
        return "Enter an email like daniel@example.com.";
    }

    if (input.validity.patternMismatch) {
        return "Enter a phone number in this format: 847-555-0134.";
    }

    if (input === password) {
        const value = input.value;

        // Read the minimum length from the HTML.
        if (value.length < input.minLength) {
            return "Use at least " + input.minLength + " characters.";
        }

        // test() asks if the password contains each required character type.
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbol = /[!@#$%^&*]/.test(value);

        if (!hasUppercase || !hasLowercase || !hasNumber || !hasSymbol) {
            return "Use an uppercase letter, a lowercase letter, a number, and a symbol (!@#$%^&*).";
        }
    }

    if (input === confirmPassword && input.value !== password.value) {
        return "The passwords must match.";
    }

    return "";
}

// FUNCTION 2: Run when the form is submitted.
// Check every input, display its message, and show success only if all inputs pass.
function validateForm(event) {
    event.preventDefault();
    success.textContent = "";

    let firstInvalidInput = null;

    // A for loop visits each object in the fields array.
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.id + "-error");

        // Set the current error. If getError returns "", this clears an old error.
        input.setCustomValidity(getError(input, field.requiredMessage));

        // checkValidity returns true or false. Write the message under the input.
        if (input.checkValidity()) {
            error.textContent = "";
            input.removeAttribute("aria-invalid");
        } else {
            error.textContent = input.validationMessage;
            input.setAttribute("aria-invalid", "true");

            // Remember the first invalid input and keep checking the rest.
            if (firstInvalidInput === null) {
                firstInvalidInput = input;
            }
        }
    }

    if (firstInvalidInput !== null) {
        firstInvalidInput.focus();
        return;
    }

    form.reset();
    success.textContent = "Registration successful!";
}

// FUNCTION 3: Remove the old success message when the user starts typing again.
function clearSuccess() {
    success.textContent = "";
}

// Events: Connect the functions to submit and input actions.
form.addEventListener("submit", validateForm);
form.addEventListener("input", clearSuccess);
document.getElementById("register-button").disabled = false;