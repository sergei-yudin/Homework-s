const reveals = document.querySelectorAll('.reveal');

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function checkAllReveals() {
    reveals.forEach(function (item) {
        if (isVisible(item)) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    });
}

checkAllReveals();
window.addEventListener('scroll', checkAllReveals);