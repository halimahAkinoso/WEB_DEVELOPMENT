document.addEventListener('DOMContentLoaded', () => {
    const visitCountDisplay = document.getElementById('visitCountDisplay');
    const firstVisitDisplay = document.getElementById('firstVisitDisplay');
    const resetButton = document.getElementById('resetButton');

    let visitCount = localStorage.getItem('visitCount');
    let firstVisitDate = localStorage.getItem('firstVisitDate');

    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    } else {
        visitCount = 1;
        if (!firstVisitDate) {
            firstVisitDate = new Date().toLocaleDateString();
            localStorage.setItem('firstVisitDate', firstVisitDate);
        }
    }

    localStorage.setItem('visitCount', visitCount);

    visitCountDisplay.textContent = `You have visited ${visitCount} times.`;
    firstVisitDisplay.textContent = `First visit: ${firstVisitDate}`;

    resetButton.addEventListener('click', () => {
        localStorage.removeItem('visitCount');
        localStorage.removeItem('firstVisitDate');
        visitCountDisplay.textContent = 'Counter has been reset.';
        firstVisitDisplay.textContent = '';
        alert('Visit counter has been reset!');
        location.reload();
    });
});