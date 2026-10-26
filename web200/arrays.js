//STEP 1: Setting up my Array (Using German Car Manufactures)

let cars = ["Audi", "BMW", "Mercedes", "Porsche", "Volkswagen"];

//STEP 2: Displaying the current array. 
function displayCars() {

    let carList = document.getElementById("carList");

    carList.innerHTML = "";

    cars.forEach(function(car) {

        let listItem = document.createElement("li");

        listItem.textContent = car;

        carList.appendChild(listItem);

    });

}

//STEP 3: Adding a Manufacture (Push Array Method)
function addManufacturer() {

    let newCar = document.getElementById("addCar").value.trim();

    if (newCar !== "") {

        cars.push(newCar);

        displayCars();

        document.getElementById("message").textContent =
            newCar + " was successfully added!";

        document.getElementById("addCar").value = "";

    } else {

        document.getElementById("message").textContent =
            "Please enter a manufacturer!";

    }

}

//STEP 4: Clearing the previous element on the list (Pop Array Method)
function removeManufacturer() {

    let removeCar = document.getElementById("removeCar").value.trim();

    let index = cars.findIndex(function(car) {
        return car.toLowerCase() === removeCar.toLowerCase();
    });

    if (index !== -1) {

        let removedCar = cars[index];

        cars.splice(index, 1);

        displayCars();

        document.getElementById("message").textContent =
            removedCar + " was successfully removed!";

        document.getElementById("removeCar").value = "";

    } else {

        document.getElementById("message").textContent =
            "Manufacturer not found!";

    }

}

// STEP 5: Sorting through each manufacturer (Sort Array Method)
function sortManufacturers() {

    cars.sort();

    displayCars();

    document.getElementById("message").textContent =
        "Manufacturers sorted alphabetically!";

}

//STEP 6: Searching for a manufacturer using Find (EXTRA CREDIT)
function searchManufacturer() {

    let searchCar = document.getElementById("searchCar").value.trim();

    let result = cars.find(function(car) {
        return car.toLowerCase() === searchCar.toLowerCase();
    });

    if (searchCar === "") {

        document.getElementById("searchResult").textContent =
            "Please enter a manufacturer to search!";

    } else if (result !== undefined) {

        document.getElementById("searchResult").textContent =
            "Success! " + result + " was found in the list!";

    } else {

        document.getElementById("searchResult").textContent =
            "Error! Manufacturer was not found!";

    }

}