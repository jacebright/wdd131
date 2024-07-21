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

const navLink = document.querySelector("#newsletterLink");




navLink.addEventListener("click", () => {
    let signUp = Number(window.localStorage.getItem("signUp-ls")) || 0;
    if (signUp > 0) {
        window.location.href("https://jacebright.github.io/wdd131/project/thanks.html")
    }
})



