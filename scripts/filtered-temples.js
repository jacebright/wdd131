const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");


hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

modificationDate.innerHTML = new Date(document.lastModified);

let year = today.getFullYear();

document.querySelector("#currentyear").innerHTML = year;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "The Gila Valley Arizona",
        location: "Central, Arizona, United States",
        dedicated: "2010, May, 23",
        area: 18561,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-gila-valley-arizona/800x500/gila-valley-temple-759378-wallpaper.jpg"
      },
      {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona, United States",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/1280x800/gilbert-arizona-lds-temple-1172166-wallpaper.jpg"
      },
      {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 23",
        area: 113916,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/1280x800/mesa_arizona_temple_main.jpeg"
      },
      {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/1280x800/slctemple7.jpg"
      }
  ];


// Set event listeners
const home = document.getElementById("Home");
const newTemples = document.getElementById("New");
const oldTemples = document.getElementById("Old");
const largeTemples = document.getElementById("Large");
const smallTemples = document.getElementById("Small");

const headingTitle = document.getElementById("title");

headingTitle.innerHTML = "Home";
displayCard(temples);

home.addEventListener("click", () => {
    headingTitle.innerHTML = "Home";
    displayCard(temples);
})
newTemples.addEventListener("click", () => {
    headingTitle.innerHTML = "New Temples";
    displayCard( temples.filter(temple => new Date(temple.dedicated) > new Date(2000, 0, 1)));
})
oldTemples.addEventListener("click", () => {
    headingTitle.innerHTML = "Old Temples";
    displayCard( temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 0, 1)));
})
largeTemples.addEventListener("click", () => {
    headingTitle.innerHTML = "Large Temples";
    displayCard(temples.filter(temple => temple.area > 90000));
})
smallTemples.addEventListener("click", () => {
    headingTitle.innerHTML = "Small Temples";
    displayCard(temples.filter(temple => temple.area <10000));
})


function displayCard(templesfiltered) {
    document.getElementById("photos").innerHTML = ""
    templesfiltered.forEach(temple => {
        const templeCard = document.createElement("section")
        templeCard.innerHTML = `<section><h2>${temple.templeName}</h2><table><tr><td class="label">Location:</td><td>${temple.location}</td></tr><tr><td class="label">Dedicated:</td><td>${temple.dedicated}</td></tr><tr><td class="label">Area:</td><td>${temple.area}</td></tr></table><img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy"></section>`;

        document.getElementById("photos").appendChild(templeCard);
});
}

