//Store grades in an array
const grades = [75, 82, 60, 95, 48, 70, 55, 88, 30, 65];

// function getAverage(grades) to calculate average grade
function getAverage(gradesArray) {
    if (gradesArray.length === 0) {
        return 0;
    }
    const sum = gradesArray.reduce((total, grade) => total + grade, 0);
    return sum / gradesArray.length;
}

//function getHighest(grades) to find the highest grade
function getHighest(gradesArray) {
    if (gradesArray.length === 0) {
        return undefined; // Or throw an error, depending on desired behavior for empty array
    }
    return Math.max(...gradesArray);
}

//function getLowest(grades) to find the lowest grade
function getLowest(gradesArray) {
    if (gradesArray.length === 0) {
        return undefined; // Or throw an error
    }
    return Math.min(...gradesArray);
}

//Create a function getPassRate(grades)
function getPassRate(gradesArray) {
    if (gradesArray.length === 0) {
        return "0.00%";
    }
    const passingStudents = gradesArray.filter(grade => grade >= 50).length;
    const passRate = (passingStudents / gradesArray.length) * 100;
    return passRate.toFixed(2) + "%"; // Format to two decimal places
}

// Display results in the HTML
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gradesArray').textContent = grades.join(', ');
    document.getElementById('averageGrade').textContent = getAverage(grades).toFixed(2);
    document.getElementById('highestGrade').textContent = getHighest(grades);
    document.getElementById('lowestGrade').textContent = getLowest(grades);
    document.getElementById('passRate').textContent = getPassRate(grades);
});