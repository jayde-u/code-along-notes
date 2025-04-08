var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

var node = [];
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", () => toggleList(li));
	ul.appendChild(li);
	addButton(li);
	input.value = "";
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

function toggleList(li) {
	li.classList.toggle("done");
}

function deleteListItem(event) {
	var li = event.srcElement.parentNode;
	ul.removeChild(li);
}

function addButton(li) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("x"));
	btn.addEventListener("click", deleteListItem);
	li.appendChild(btn);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

list.forEach(function(li) {
	li.addEventListener("click", () => toggleList(li));
	addButton(li);
})


