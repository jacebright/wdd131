const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append(deleteButton);

list.append(li);

document.querySelector("#submit").addEventListener("click", (input) => {
   if (input.value.trim() !== '') {} 
   else {input.focus();}
   input.focus();
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });
