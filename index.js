function initializeGrid() {
    const conatiner = document.querySelector('.container')
    conatiner.addEventListener('mouseover', (e) => e.target.style.backgroundColor= 'black')
    let boxId = 0;
    for(let col = 0; col < 16; col++) {
        const column = document.createElement('div');
        column.className = 'column';
        for (let row = 0; row < 16; row++) {
            const box = document.createElement('div');
            box.id = `box-${boxId++}`;
            column.appendChild(box);
        }
        conatiner.appendChild(column);
    }
}
initializeGrid();