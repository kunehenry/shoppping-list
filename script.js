var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function toggleDone() {
	this.classList.toggle("done");
}

function deleteItem() {
	ul.removeChild(this.parentElement);
}

function makingButton(li) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteItem);
}



function existingListItems() {
	var listItems = document.querySelectorAll("li");
	for(var i= 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", toggleDone);
		makingButton(listItems[i]);
	}
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", toggleDone);
	makingButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

existingListItems();

//---------------------



