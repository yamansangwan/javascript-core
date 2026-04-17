// easy challange 

// 🟢 Easy Challenge: The Promo Code Engine
// The Business Requirement: Our e-commerce store needs a reusable calculator for the checkout page. We need a system that accepts two pieces of data: the total price of a user's cart, and a promo code string.

// The Rules:

// If the promo code is exactly "WELCOME", apply a 20% discount to the price.

// If the promo code is exactly "HALFOFF", apply a 50% discount.

// If the promo code is anything else (or missing), apply a 0% discount.

// The system must return the final calculated price so the checkout page can display it.

let cartValue = 100; // should have used as an parmeter in if statement
const discountCalc = (promoCode) => {
    if (promoCode == "WELCOME") {
        cartValue = cartValue - (cartValue * 20/100);
        return `20% discount your total is ${cartValue}`;
    }
    else if (promoCode == "HALFOFF") {
        cartValue = cartValue - (cartValue * 50/100);
        return `50% discount your total is ${cartValue}`;
    }
    else {
        return `0% discount your total is ${cartValue}`;
    }
    
}
const finalBill = discountCalc("WELCOME");
console.log(finalBill);









// repaired 


const discountCalc = (cartValue,promoCode) => {
    if (promoCode == "WELCOME") {
        cartValue = cartValue - (cartValue * 20/100);
        return `20% discount your total is ${cartValue}`;
    }
    else if (promoCode == "HALFOFF") {
        cartValue = cartValue - (cartValue * 50/100);
        return `50% discount your total is ${cartValue}`;
    }
    else {
        return `0% discount your total is ${cartValue}`;
    }
    
}
const finalBill = discountCalc(150,"WELCOME");
console.log(finalBill);
