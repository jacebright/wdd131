const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
    signUp++;
    localStorage.setItem("signUp-ls", signUp);
})
