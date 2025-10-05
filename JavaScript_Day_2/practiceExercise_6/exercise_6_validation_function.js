function isStrongPassword(password){
    console.log("The password is:")
// return password.includes("[a-zA-Z0-09 !@#$%^&*]{6,16}")
    if (password.length < 8){
         return false;
    }
       
    const hasNumber =/\d/.test(password);
    if (!hasNumber) {
         return false;
    }
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    if (!hasSpecialChar){
         return false;
    }
     return true;
}
console.log(isStrongPassword("pass123"))
 








function formatPercentage(value){
console.log("The number is formatted to :")  

    // return value.toFixed(1) + '%';
    return `${value.toFixed(1) + '%'}`;
}

console.log(formatPercentage(123.674))


function calculateCompoundInterest(principal, rate, years){
    console.log("The calculated compound interest is: ")
    const amount = principal + Math.pow((1 + rate), years);
    return amount;

}
console.log(calculateCompoundInterest(2500, 0.7, 15))  


function canGraduate(credits, gpa){
        console.log("The decision is that: ")
    return credits >=120 && gpa >= 2.0;
}

console.log(canGraduate(110,1.9));


 function reverseWords(sentence){
     console.log("The sentence in reversed form is: ")
     const words = sentence.split(' ');
     // reversed the order of the words
     const reverseWords = words.reverse();
     const capitalizedWords = reverseWords.map(word=>{
        if (word.length === 0){
            return '';// to handle empty words
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
     });
     // join the capitalizes words back
     return capitalizedWords.join('');

 }


 console.log(reverseWords("coding is fun"))