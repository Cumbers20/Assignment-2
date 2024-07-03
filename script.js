document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    addColorToHistory(color);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addColorToHistory(color) {
    const historyList = document.getElementById('historyList');
    const newColorItem = document.createElement('li');
    newColorItem.textContent = color;
    historyList.appendChild(newColorItem);
}
