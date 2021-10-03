// imports always go on top
import { testLengthOfInput } from "./libs/validation.js";
import writeToDOM from "./libs/writeToDom.js";
import {
  saveToLocalStorage,
  getStorageItem,
} from "./libs/localStorageHelper.js";

const itemInput = document.querySelector(".itemInput");
const addItem = document.querySelector(".addItem");
const items = document.querySelector(".items");
let groceryArray = getStorageItem("groceryArrayKey");
const removeItem = document.querySelector(".reset-btn");

writeToDOM(items, groceryArray);

addItem.onclick = function () {
  let valueOfGroceryInputBox = itemInput.value;
  if (testLengthOfInput(valueOfGroceryInputBox, 3)) {
    let groceryItem = {
      id: groceryArray.length,
      name: valueOfGroceryInputBox,
    };
    groceryArray.push(groceryItem);
    saveToLocalStorage("groceryArrayKey", groceryArray);
    writeToDOM(items, groceryArray);
  } else {
    console.log("Input needs more characters");
  }
  itemInput.value = "";
};

removeItem.onclick = function () {
  localStorage.clear();
  items.innerHTML = "";
};
