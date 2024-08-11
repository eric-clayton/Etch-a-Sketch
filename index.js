function initializeGrid(squaresPerSide) {
    const conatiner = document.querySelector('.container')
    conatiner.innerHTML = '';
    conatiner.addEventListener('mouseover', handleMouseover)
    for (let col = 0; col < squaresPerSide; col++) {
        const column = document.createElement('div');
        column.className = 'column';
        for (let row = 0; row < squaresPerSide; row++) {
            const box = document.createElement('div');
            column.appendChild(box);
        }
        conatiner.appendChild(column);
    }
}
function handleMouseover(e) {
    const style = e.target.style;
    if(style.backgroundColor) {
        if (style.opacity < 1) {
            style.opacity = .10 + +style.opacity;
        }
    }
    else {
        style.backgroundColor = randomColor()
        style.opacity = .10;
    }
}
function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}
const initalizeButton = document.querySelector('.initialize-button');
initalizeButton.addEventListener('click', handleClick);
function handleClick() {
    const squaresPerSide = Math.min(100, Math.max(0, +prompt("Please enter the number sqaures per side")));
    initializeGrid(squaresPerSide);
}