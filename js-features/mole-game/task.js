function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i=1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) +1;
        } else {
            lost.textContent = Number(lost.textContent) +1;
        }
        if (Number(dead.textContent) >= 10) {
            alert(`Победа!`)
            dead.textContent = 0;
            lost.textContent = 0;
        }
        else if (Number(lost.textContent) >= 5) {
            alert(`Вы проиграли!`)
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}