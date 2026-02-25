
const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

function hasClosedModal() {
    return document.cookie.includes('modalClosed=true');
}

if (!hasClosedModal()) {
    modal.classList.add('modal_active');
}

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');

    document.cookie = 'modalClosed=true; max-age=' + (10 * 365 * 24 * 60 * 60) + '; path=/';
});