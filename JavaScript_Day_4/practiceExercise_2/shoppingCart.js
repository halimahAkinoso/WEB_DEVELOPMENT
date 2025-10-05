// 1. Create a class for cartItem with properties and a method
class CartItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // 2. Add a method getTotal()
    getTotal() {
        return this.price * this.quantity;
    }
}

// 3. Create an array cart with at least 3 cart items
const cart = [
    new CartItem('Laptop', 1200, 1),
    new CartItem('Mouse', 25, 2),
    new CartItem('Keyboard', 75, 1)
];

// 4. Write a function getCartTotal(cart)
function getCartTotal(cart) {
    let total = 0;
    for (const item of cart) {
        total += item.getTotal();
    }
    return total;
}

// Calculate and log the total
const finalCartTotal = getCartTotal(cart);
console.log('The total cost of the shopping cart is:', finalCartTotal);