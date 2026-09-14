document.getElementById("convertBtn").addEventListener("click", function () {

    let value = parseFloat(
        document.getElementById("temperature").value
    );

    let unit = document.getElementById("unit").value;
    let error = document.getElementById("error");

    if (isNaN(value)) {
        error.textContent = "Please enter a valid temperature.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "C") {
        celsius = value;
        fahrenheit = (value * 9 / 5) + 32;
        kelvin = value + 273.15;
    }

    else if (unit === "F") {
        fahrenheit = value;
        celsius = (value - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }

    else {
        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    error.textContent = "";

    document.getElementById("celsius").textContent =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").textContent =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").textContent =
        kelvin.toFixed(2) + " K";
});