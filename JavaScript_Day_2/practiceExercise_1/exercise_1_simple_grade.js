let score = 90;

function getGrade() {
    if (score >= 100){
        console.log("outstanding! Grade: A+")
    } else if(score >= 90){
        console.log("score: 90  Grade: A");
        // return "score: 90  Grade: A";
    } else if ( score >= 80){
        console.log("score: 80 - 89  Grade:  B")
        // return "score: 80 - 89  Grade:  B";
    } else if (score >= 70){
        console.log("score: 70-79  grade: C")
        // return "score: 70-79  grade: C";
    } else if (score >= 60){
        console.log("score:60-69 grade: D");
    } else {
        console.log("score: 60 grade: F");
    }  
}
