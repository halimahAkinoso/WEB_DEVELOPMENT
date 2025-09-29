function calculateItemTotal(items){

    console.log("item calculator")

    
if (!Array.isArray(items) || items.length ===0) {
    console.error("invalid input: 'items' must be a non -empty array. ")
    return 0;
}
let total = 0;
for (const item of items){
    if (
        typeof item.price !== 'number' || item.price <= 0 || typeof item.quantity !== 'number' || item.quantity <= 0
    ){
        console.warn(`skipping invalid item: ${JSON.stringify(item)}`)
        continue;
    }
    let discount = (typeof item.discount === 'number'&& item.discount > 0 && item.discount < 1) ? item.discount : 0;
    const discountedPrice = item.price * item.quantity;
}
return total;
}


