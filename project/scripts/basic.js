const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

modificationDate.innerHTML = new Date(document.lastModified);

let year = today.getFullYear();

document.querySelector("#currentyear").innerHTML = year;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");


hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

// Event listeners for the navigation link and the newsletter submit button
// This will utilize localStorage to see if the user has signed up for the 
// newsletter previously and will forward them to the thank you page if they
// have done so

const navLink = document.getElementById("newsletterLink");


let signUp = Number(window.localStorage.getItem("signUp-ls")) || 0;

navLink.addEventListener("click", () => {
    if (signUp > 0) {
        window.location.href("thanks.html")
    }
})



