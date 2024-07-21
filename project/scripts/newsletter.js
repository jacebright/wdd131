const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {
    let signUp = 1;
    localStorage.setItem("signUp-ls", signUp);
})
