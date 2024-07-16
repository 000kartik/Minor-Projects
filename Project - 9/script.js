// Function to add a new item to the list
function addItem() {
    var input = document.getElementById("itemInput");
    var itemText = input.value.trim();

    if (itemText !== "") {
        var ul = document.getElementById("itemList");
        var li = document.createElement("li");

        li.textContent = itemText;
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            ul.removeChild(li);
        };

        li.appendChild(removeButton);
        ul.appendChild(li);

        // Clear the input field
        input.value = "";
    }
}

// Function to remove an item from the list
function removeItem(event) {
    var item = event.target.parentElement;
    item.remove();
}
