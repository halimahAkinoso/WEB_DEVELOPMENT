// script.js

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        const existingItem = this.items.find(item => item.product.name === product.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeProduct(productName) {
        this.items = this.items.filter(item => item.product.name !== productName);
    }

    getTotal() {
        const total = this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        if (total > 100) {
            return "Free Shipping";
        } else {
            return total;
        }
    }
    

    
}
// script.js (continued)

// Create some products
const product1 = new Product("Laptop", 120);
const product2 = new Product("Mouse", 15);
const product3 = new Product("Keyboard", 30);

// Create a new cart
const myCart = new Cart();

// Add products to the cart
myCart.addProduct(product2, 2); // 2 mice, total 30
myCart.addProduct(product3, 1); // 1 keyboard, total 30+30=60
myCart.addProduct(product1, 1); // 1 laptop, total 60+120=180

// Display the cart and total

// UI functions
function displayCart(cart) {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = '';
    if (cart.items.length === 0) {
        cartDiv.textContent = 'Cart is empty.';
        return;
    }
    cart.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.product.name} x ${item.quantity} ($${item.product.price} each)`;
        cartDiv.appendChild(itemDiv);
    });
}

function displayTotal(cart) {
    const totalDiv = document.getElementById('cart-total');
    const total = cart.getTotal();
    totalDiv.textContent = (typeof total === 'number') ? `Total: $${total}` : total;
}

// Initial display
displayCart(myCart);
displayTotal(myCart);

// Example: Remove a product and update UI
myCart.removeProduct("Laptop");
displayCart(myCart);
displayTotal(myCart);