

function trackExpense(budget, action, amount) {
  if (amount > 50000) {
    return "⚠️ Transaction limit exceeded. Maximum ₦50,000 allowed.";
  }

  if (action === "spend") {
    if (budget >= amount) {
      const newBudget = budget - amount;
      return `✅ You spent ₦${amount}. Remaining budget: ₦${newBudget}.`;
    } else {
      return "❌ Insufficient budget. Cannot complete transaction.";
    }
  } else if (action === "add") {
    const newBudget = budget + amount;
    return `💰 You added ₦${amount}. New budget: ₦${newBudget}.`;
  } else {
    return "❌ Invalid action.";
  }
}

// Example test here :
console.log(trackExpense(100000, "spend", 20000)); // ✅
console.log(trackExpense(20000, "spend", 40000));  // ❌
console.log(trackExpense(15000, "add", 5000));     // 💰
