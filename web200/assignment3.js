let Celsius = C;
let C = (F - 32)*5/9;
let Fahrenheit = F;
F = 76;

if (Celsius < 16) {
    document.getElementById("TempConverter").innerHTML = "The Tempature today in Las Vegas is " + Celsius + " degrees. Please put on Sunscreen today, it will be a Hot Day!";
}
if (Celsius > 16) {
    document.getElementById("TempConverter").innerHTML = "The Tempature today in Las Vegas is " + Celsius + " degrees. It is expected to be lower than average, it will be a Chilly Day!";
}