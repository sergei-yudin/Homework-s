const cookie = document.getElementById('cookie');
let isBig = false
cookie.onclick = () => {
    if (isBig) {
        cookie.width -=20;
        cookie.height -=20;
        isBig = false;
    } else {
        cookie.width +=20;
        cookie.height +=20;
        isBig = true;
    }

    const click = document.getElementById('clicker__counter');
    let clicks = Number(click.textContent);
    clicks += 1;
    click.textContent = clicks;
}

click.textContent = clicks;