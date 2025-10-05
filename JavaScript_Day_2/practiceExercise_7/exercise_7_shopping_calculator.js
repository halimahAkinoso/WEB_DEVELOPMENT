function productCalculator(price, quantity, discountPercentage) {
    if (typeof price !== 'number' || price < 0 ||
        typeof quantity !== 'number' || quantity < 0 ||
        typeof discountPercentage !== 'number' || discountPercentage < 0 || discountPercentage > 1) {
        console.error("Invalid input for productCalculator.");
        return 0;
    }
    const discountedPrice = price * (1 - discountPercentage);
    return discountedPrice * quantity;
}


// for tax
function taxCalculator(amount, location) {
    if (typeof amount !== 'number' || amount < 0 || typeof location !== 'string' || location.trim() === '') {
        console.error("Invalid input for taxCalculator.");
        return 0;
    }
    let taxRate;
    // Ternary operator example
    taxRate = (location === 'Ijebu Ode') ? 0.075 : 0.05; // Example tax rates
    return amount * taxRate;
}


// Shipping Calculator
function shippingCalculator(weightKg, distanceKm) {
    if (typeof weightKg !== 'number' || weightKg < 0 || typeof distanceKm !== 'number' || distanceKm < 0) {
        console.error("Invalid input for shippingCalculator.");
        return 0;
    }
    const baseRatePerKg = 2;
    const ratePerKm = 0.5;
    return (weightKg * baseRatePerKg) + (distanceKm * ratePerKm);
}


// Membership Discount
function membershipDiscounts(totalAmount, memberType) {
    if (typeof totalAmount !== 'number' || totalAmount < 0 || typeof memberType !== 'string' || memberType.trim() === '') {
        console.error("Invalid input for membershipDiscounts.");
        return totalAmount;
    }
    let discountFactor = 1;
    if (memberType === 'Gold') {
        discountFactor = 0.9; // 10% discount
    } else if (memberType === 'Silver') {
        discountFactor = 0.95; // 5% discount
    }
    return totalAmount * discountFactor;
}


// Final Receipt Generator
function finalReceiptGenerator(items, location, totalWeightKg, shippingDistanceKm, memberType) {
    if (!Array.isArray(items) || !items.every(item => item.price && item.quantity) ||
        typeof location !== 'string' || typeof totalWeightKg !== 'number' ||
        typeof shippingDistanceKm !== 'number' || typeof memberType !== 'string') {
        console.error("Invalid input for finalReceiptGenerator.");
        return "Error: Invalid receipt generation parameters.";
    }

    let subtotal = 0;
    let receiptDetails = "--- Shopping Receipt ---\n";

    items.forEach((item, index) => {
        const itemTotal = productCalculator(item.price, item.quantity, item.discount || 0);
        subtotal += itemTotal;
        receiptDetails += `${index + 1}. Item: $${item.price.toFixed(2)} x ${item.quantity} (Discount: ${(item.discount * 100).toFixed(0)}%) = $${itemTotal.toFixed(2)}\n`;
    });

    const taxAmount = taxCalculator(subtotal, location);
    const shippingCost = shippingCalculator(totalWeightKg, shippingDistanceKm);
    const totalBeforeMembershipDiscount = subtotal + taxAmount + shippingCost;
    const finalTotal = membershipDiscounts(totalBeforeMembershipDiscount, memberType);

    receiptDetails += `\nSubtotal: $${subtotal.toFixed(2)}\n`;
    receiptDetails += `Tax (${location}): $${taxAmount.toFixed(2)}\n`;
    receiptDetails += `Shipping: $${shippingCost.toFixed(2)}\n`;
    receiptDetails += `Total (before member discount): $${totalBeforeMembershipDiscount.toFixed(2)}\n`;
    receiptDetails += `Membership Discount (${memberType}): $${(totalBeforeMembershipDiscount - finalTotal).toFixed(2)}\n`;
    receiptDetails += `\nFinal Total: $${finalTotal.toFixed(2)}\n`;
    receiptDetails += "------------------------";

    return receiptDetails;
}


//usage
// Example Usage and UI integration:
function productCalculatorUI() {
    // Example values
    const price = 100;
    const quantity = 2;
    const discount = 0.1;
    const result = productCalculator(price, quantity, discount);
    document.getElementById('variable-output').textContent = `Total after discount: $${result.toFixed(2)}`;
}

function taxCalculatorUI() {
    const amount = 200;
    const location = 'Ijebu Ode';
    const result = taxCalculator(amount, location);
    document.getElementById('variable-output').textContent = `Tax for ${location}: $${result.toFixed(2)}`;
}

function shippingCalculatorUI() {
    const weight = 5;
    const distance = 100;
    const result = shippingCalculator(weight, distance);
    document.getElementById('variable-output').textContent = `Shipping cost: $${result.toFixed(2)}`;
}

function membershipDiscountsUI() {
    const totalAmount = 300;
    const memberType = 'Gold';
    const result = membershipDiscounts(totalAmount, memberType);
    document.getElementById('variable-output').textContent = `Total after ${memberType} discount: $${result.toFixed(2)}`;
}

function finalReceiptGeneratorUI() {
    const shoppingItems = [
        { price: 100, quantity: 1, discount: 0.10 },
        { price: 50, quantity: 2, discount: 0 },
        { price: 20, quantity: 3, discount: 0.05 }
    ];
    const customerLocation = 'Ijebu Ode';
    const totalWeight = 5;
    const shippingDistance = 100;
    const customerMemberType = 'Gold';
    const receipt = finalReceiptGenerator(shoppingItems, customerLocation, totalWeight, shippingDistance, customerMemberType);
    document.getElementById('receipt').textContent = receipt;
}