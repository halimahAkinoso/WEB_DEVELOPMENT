//  Create an array shopping list
let shoppingList = ["Apples", "Milk", "Bread", "Eggs", "Cheese"];

// Add a new item t
shoppingList.push("Yogurt");

// Remove the first item 
shoppingList.shift();

// Display the total number of items
const itemCountElement = document.getElementById("itemCount");
itemCountElement.textContent = shoppingList.length;

// Create a function formatList(list) that returns the shopping list in a numbered format
function formatList(list) {
    let formattedItems = [];
    for (let i = 0; i < list.length; i++) {
        formattedItems.push(`${i + 1}. ${list[i]}`);
    }
    return formattedItems;
}

// Loop through the list 
const shoppingListDisplay = document.getElementById("shoppingListDisplay");
const formattedShoppingList = formatList(shoppingList);

formattedShoppingList.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingListDisplay.appendChild(listItem);
});