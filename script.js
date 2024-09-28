const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const inputInvalid = document.querySelector("#input-invalid");
const listItems = document.querySelector("#item-list");
const filterBox = document.querySelector("#filter");
const clearAllBtn = document.querySelector("#items-clear");

// add item to list
itemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = itemInput.value.toLowerCase();

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

    checkUi();
  }
});

//remove item
listItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    e.target.parentElement.remove();
  }

  checkUi();
});

//remove all
clearAllBtn.addEventListener("click", () => {
  listItems.innerHTML = "";

  checkUi();
});

function checkUi() {
  const item = listItems.querySelectorAll("li");
  if (item.length === 0) {
    filterBox.style.display = "none";
    clearAllBtn.style.display = "none";
  } else {
    filterBox.style.display = "block";
    clearAllBtn.style.display = "block";
  }
}

//filter function
filterBox.addEventListener("input", () => {
  const items = listItems.querySelectorAll("li");
  const filterInput = filterBox.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(filterInput) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

checkUi();
