function changeColors() {
    const paragraph = document.getElementById('myParagraph');
    const body = document.body;

    const randomTextColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const randomBgColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

    paragraph.style.color = randomTextColor;
    body.style.backgroundColor = randomBgColor;
}