
function calculatePrice(price, customerType, isFirstPurchase){
   let discount = 0;
   if (customerType === "student"){
    discount = 0.10;
   } else if (customerType === "senior"){
    discount = 0.15;
   }else if (customerType === "Employee"){
    discount = 0.20;
   };
   if (isFirstPurchase){
    discount += 0.5;
   }
    
   let totalPrice = price *(1-discount);
   return{
    originalPrice: price,
    discountPrice: discount * 100,
    totalprice: totalPrice.toFixed(2)
   };

    
}
let result = calculatePrice(100, "student", true);
console.log("price calculation");
console.log(`originalprice: ${result.originalPrice}`);
console.log(`discount: ${result.discountPrice}%`);
console.log(`total: ${result.totalprice}`);
