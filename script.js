const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const inputInvalid = document.querySelector("#input-invalid");
const listItems = document.querySelector("#item-list");
const clearAllBtn = document.querySelector("#items-clear");

// add item to list
itemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = itemInput.value;

  if (inputValue == "") {
    inputInvalid.innerHTML = "please add valid name for item";
    return;
  } else {
    inputInvalid.innerHTML = "";

    const itemName = document.createElement("li");
    const itemIcon = document.createElement("i");
    itemName.className = "list-item";
    itemName.innerHTML = inputValue;
    itemIcon.className = "bi bi-x remove-item fs-5 text-danger";
    itemName.append(itemIcon);
    listItems.append(itemName);
    itemInput.value = "";
  }
});

//remove item
listItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    e.target.parentElement.remove();
  }
});

//remove all
clearAllBtn.addEventListener("click", () => {
  listItems.innerHTML = "";
});
