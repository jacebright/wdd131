const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

modificationDate.innerHTML = new Date(document.lastModified);

let year = today.getFullYear();

document.querySelector("#currentyear").innerHTML = year;

// retrieve the necessary elements to calculate wind chill
const temp = 22;
const conditions = "Sunny";
const speedWind = 3;

function CalculateWindChill(Ftemp, windSpeed) {
    const chill = 35.74 + 0.6215 * Ftemp - 35.75 * (windSpeed ** 0.16);
    return chill.toFixed(2);
}

let windChill = 0;

if (temp <= 10) {
    if (speedWind > 4.8) {
        const Ftemp = temp * (9/5) + 32;
        windChill = CalculateWindChill(Ftemp, speedWind);
    }
    else {windChill = "N/A";}
} else {windChill = "N/A";}

document.querySelector("#temperature").innerHTML = temp;
document.querySelector("#conditions").innerHTML = conditions;
document.querySelector("#wind").innerHTML = speedWind;
document.querySelector("#windChill").innerHTML = windChill;