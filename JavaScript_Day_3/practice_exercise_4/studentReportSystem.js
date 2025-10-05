let students = []; // Array to store student objects { name, grade, letterGrade }

// 1. Add Student
function addStudent() {
    const name = document.getElementById('studentNameInput').value;
    const grade = parseFloat(document.getElementById('studentGradeInput').value);

    if (name && !isNaN(grade) && grade >= 0 && grade <= 100) {
        const letterGrade = assignLetterGrade(grade);
        students.push({ name, grade, letterGrade });
        document.getElementById('studentNameInput').value = '';
        document.getElementById('studentGradeInput').value = '';
        console.log("Student added:", { name, grade, letterGrade });
    } else {
        alert("Please enter a valid name and a grade between 0-100.");
    }
}

// 4. Grade Categorizer
function assignLetterGrade(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}

// 2. Calculate Average
function calculateAverage() {
    if (students.length === 0) return 0;
    const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
    return totalGrades / students.length;
}

// 3. Find Top & Bottom Student
function findTopBottomStudents() {
    if (students.length === 0) return { top: null, bottom: null };

    let topStudent = students[0];
    let bottomStudent = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].grade > topStudent.grade) {
            topStudent = students[i];
        }
        if (students[i].grade < bottomStudent.grade) {
            bottomStudent = students[i];
        }
    }
    return { top: topStudent, bottom: bottomStudent };
}

// 5. Report Generator
function generateReport() {
    const reportDiv = document.getElementById('report');
    if (students.length === 0) {
        reportDiv.innerHTML = '<p>No students added yet.</p>';
        return;
    }

    const classAverage = calculateAverage();
    const { top, bottom } = findTopBottomStudents();

    let reportHTML = '<h2>Class Report</h2>';
    reportHTML += '<h3>Student Details:</h3>';
    reportHTML += '<table><thead><tr><th>Name</th><th>Grade</th><th>Letter Grade</th></tr></thead><tbody>';
    students.forEach(student => {
        reportHTML += `<tr><td>${student.name}</td><td>${student.grade}</td><td>${student.letterGrade}</td></tr>`;
    });
    reportHTML += '</tbody></table>';

    reportHTML += `<h3>Summary:</h3>`;
    reportHTML += `<p><strong>Class Average:</strong> ${classAverage.toFixed(2)}</p>`;
    if (top) {
        reportHTML += `<p><strong>Top Student:</strong> ${top.name} (Grade: ${top.grade}, Letter: ${top.letterGrade})</p>`;
    }
    if (bottom) {
        reportHTML += `<p><strong>Lowest Student:</strong> ${bottom.name} (Grade: ${bottom.grade}, Letter: ${bottom.letterGrade})</p>`;
    }
    
    reportDiv.innerHTML = reportHTML;
}v 