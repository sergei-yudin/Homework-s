const reveal = document.querySelector('.reveal');

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }
    if ( top < window.innerHeight) {
        return true;
    }
    return true;
}

function action() {
    if (isVisible) {
        reveal.classList.add('reveal_active');
    } else {reveal.classList.remove('reveal_active')}
}

action()