import { saveToLocalStorage } from "./localStorageHelper.js";

export default function writeToDOM(
  domElementIAmGoingToPutHTMLInto,
  theArrayIAmGoingToCreateHTMLFrom
) {
  console.log(theArrayIAmGoingToCreateHTMLFrom);
  domElementIAmGoingToPutHTMLInto.innerHTML = "";

  theArrayIAmGoingToCreateHTMLFrom.forEach(function (groceryItem, iteration) {
    let ischecked = "";
    if (groceryItem.checked) {
      ischecked = "checked";
    }

    domElementIAmGoingToPutHTMLInto.innerHTML += `<li>
					<span>${groceryItem.name}</span>
					<input ${ischecked} type="checkbox" class="checkbox" data-id=${groceryItem.id}>
				</li>`;
  });

  const checkboxes = document.querySelectorAll(".checkbox");
  console.log(checkboxes);
  checkboxes.forEach(function (checkbox) {
    checkbox.onclick = function () {
      let indexOfItem = theArrayIAmGoingToCreateHTMLFrom.findIndex(function (
        groceryObject
      ) {
        return groceryObject.id === parseInt(checkbox.dataset.id);
      });

      console.log(indexOfItem);
      console.log(theArrayIAmGoingToCreateHTMLFrom[indexOfItem]);

      if (theArrayIAmGoingToCreateHTMLFrom[indexOfItem].checked) {
        theArrayIAmGoingToCreateHTMLFrom[indexOfItem].checked = "";
      } else {
        theArrayIAmGoingToCreateHTMLFrom[indexOfItem].checked = "checked";
      }

      saveToLocalStorage("groceryArrayKey", theArrayIAmGoingToCreateHTMLFrom);
    };
  });
}
