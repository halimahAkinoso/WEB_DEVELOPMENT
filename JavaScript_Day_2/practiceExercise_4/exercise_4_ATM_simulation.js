
let balance = 15000;

function atm( balance, action, amount){
    if (action === "withdraw"){
        if (amount > balance){  
            console.log("Insufficient funds");
            return balance;
        } else if (amount > 500){
            console.log("withdrawer limit exceeded  maximum withdrawer is 500 at once")
            return balance;
        }

    } else if (action === "deposit"){
        if (amount <= 0 ){
            console.log("Invalid amount");
            return balance;
        }else{
            balance += amount;
            console.log(`deposit successful , ${balance}`);
            return balance;
        }
    } else{
        console.log(`invalid action ,use  'withdraw' or deposit`);
        return balance
    }

}



balance = atm(balance, "withdraw", 5000);
balance = atm(balance, "withdraw", 2000);
balance = atm(balance, "withdraw", 1000);
