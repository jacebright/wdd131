// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
//   Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   const foodsElement = document.querySelector("#favorite-foods");
//   function createLi(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
//   }

//   myInfo.favoriteFoods.forEach(createLi);

// The map example could be simplified as below:
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

function returnFoodString(food) {
    return `<li>${food}</li>`;
}

function returnPlaceString(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function createHtml(list, stringFunction) {
    const htmlString = list.map(stringFunction);
    return htmlString.join("");
}

foodsElement.innerHTML = createHtml(myInfo.favoriteFoods, returnFoodString);
placesElement.innerHTML = createHtml(myInfo.placesLived, returnPlaceString);



  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (num in studentReport) {
    if (num < 30) {
        console.log(num);
    }
}