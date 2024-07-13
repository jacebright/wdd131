const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

modificationDate.innerHTML = new Date(document.lastModified);

let year = today.getFullYear();

document.querySelector("#currentyear").innerHTML = year;

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgeragerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

products.forEach(product => {
    const productHTML = document.createElement("option");
    productHTML.setAttribute("value", `${product.name}`);
    productHTML.innerHTML = product.name;
    document.getElementById("productName").appendChild(productHTML);
});

const reviewsDisplay = document.querySelector("#review");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

reviewsDisplay.textContent = numReviews;

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);