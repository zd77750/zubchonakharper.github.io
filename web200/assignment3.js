let F = 76;
let C = (F - 32) * 5 / 9;

let Celsius = C;
let Fahrenheit = F;


if (Celsius < 16) {
    document.getElementById("TempConverter").innerHTML = "The Tempature today in Las Vegas is " + Celsius + " degrees Celsius. Please put on Sunscreen today, it will be a Hot Day!";
}
if (Celsius > 16) {
    document.getElementById("TempConverter").innerHTML = "The Tempature today in Las Vegas is " + Celsius + " degrees Celsius. It is expected to be lower than average, it will be a Chilly Day!";
}