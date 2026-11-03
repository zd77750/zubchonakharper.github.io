// Constructor: a blueprint for creating car objects.
function Car(year, make, model, trim, color) {

    // Five properties: information about each car.
    this.year = year;
    this.make = make;
    this.model = model;
    this.trim = trim;
    this.color = color;

    // Method #1: combine the car's information into one name.
    this.fullModel = function() {
        return this.year + " " + this.make + " " +
               this.model + " " + this.trim;
    };

    // Method #2: calculate the car's age for a given year.
    this.getAge = function(currentYear) {
        return currentYear - this.year;
    };
}


// Create three separate car objects.
const car1 = new Car(2009, "Chevrolet", "Corvette", "ZR1", "Blue");

const car2 = new Car(2016, "Audi", "A6", "Prestige", "Silver");

const car3 = new Car(2015, "Chrysler", "200", "S", "Gray");


// Display one car's properties and method results.
function displayCar(car, listId) {

    document.getElementById(listId).innerHTML =
        "<li>Year: " + car.year + "</li>" +
        "<li>Make: " + car.make + "</li>" +
        "<li>Model: " + car.model + "</li>" +
        "<li>Trim: " + car.trim + "</li>" +
        "<li>Color: " + car.color + "</li>" +
        "<li>Full Model: " + car.fullModel() + "</li>" +
        "<li>Age in 2026: " + car.getAge(2026) + " years</li>";
}


// Display all three cars.
displayCar(car1, "car1");
displayCar(car2, "car2");
displayCar(car3, "car3");

