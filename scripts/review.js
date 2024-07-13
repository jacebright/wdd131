const reviewsDisplay = document.querySelector("#review");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

reviewsDisplay.textContent = numReviews;

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);

const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

modificationDate.innerHTML = new Date(document.lastModified);

let year = today.getFullYear();

document.querySelector("#currentyear").innerHTML = year;
