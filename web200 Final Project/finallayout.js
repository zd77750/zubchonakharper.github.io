// Find the form in the HTML document.
let pizzaForm = document.getElementById("pizzaForm");

// Update the summary whenever a form selection changes.
pizzaForm.addEventListener("input", updateOrder);

// Run this function when the customer reviews the order.
pizzaForm.addEventListener("submit", reviewOrder);

function updateOrder() {
    // Find the selected radio buttons.
    let size = document.querySelector(
        'input[name="size"]:checked'
    ).value;

    let crust = document.querySelector(
        'input[name="crust"]:checked'
    ).value;

    let quantityField = document.getElementById("quantity");
    let summary = document.getElementById("orderSummary");

    // Clear an earlier review message after the order changes.
    document.getElementById("orderMessage").textContent = "";

    if (!quantityField.checkValidity()) {
        summary.textContent =
            "Please enter a whole number from 1 to 10.";
        return;
    }

    let quantity = Number(quantityField.value);

    // Determine the base price from the selected size.
    let sizePrice = 8;

    if (size === "Medium") {
        sizePrice = 10;
    } else if (size === "Large") {
        sizePrice = 12;
    } else if (size === "XL") {
        sizePrice = 14;
    }

    // Determine the additional crust charge.
    let crustPrice = 0;

    if (crust === "Pan") {
        crustPrice = 2;
    } else if (crust === "Stuffed") {
        crustPrice = 3;
    }

    // This creates a NodeList containing checked toppings.
    let toppings = document.querySelectorAll(
        'input[name="topping"]:checked'
    );

    let toppingNames = "";

    // Loop through the selected toppings.
    for (let i = 0; i < toppings.length; i++) {
        if (i > 0) {
            toppingNames += ", ";
        }

        toppingNames += toppings[i].value;
    }

    if (toppings.length === 0) {
        toppingNames = "Regular cheese only";
    }

    // Each selected topping costs $1 per pizza.
    let toppingPrice = toppings.length * 1;
    let pizzaPrice = sizePrice + crustPrice + toppingPrice;
    let totalPrice = pizzaPrice * quantity;

    // Template literals insert variables into the HTML.
    summary.innerHTML = `
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Crust:</strong> ${crust}</p>
        <p><strong>Toppings:</strong> ${toppingNames}</p>
        <p><strong>Number of pizzas:</strong> ${quantity}</p>
        <p><strong>Price per pizza:</strong>
            $${pizzaPrice.toFixed(2)}</p>
        <p><strong>Order subtotal:</strong>
            $${totalPrice.toFixed(2)}</p>
        <p>Demo prices exclude tax and delivery.</p>
    `;
}

function reviewOrder(event) {
    // Keep the demo form from submitting and reloading the page.
    event.preventDefault();

    let customerName =
        document.getElementById("customerName").value.trim();

    let message = document.getElementById("orderMessage");

    if (customerName === "") {
        message.textContent = "Please enter your name.";
        message.style.color = "#800000";
        return;
    }

    // Use textContent to display customer-entered text safely.
    message.textContent =
        "Thank you, " + customerName +
        "! Your demo order is ready for review. " +
        "No real order was sent.";

    // Change CSS through the DOM.
    message.style.color = "darkgreen";
}

// Display the starting order when the page loads.
updateOrder();