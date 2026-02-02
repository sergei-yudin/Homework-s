const book = document.getElementById('book');
const buttons = document.querySelectorAll('.font-size');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        buttons.forEach(btn => btn.classList.remove('font-size_active'));

        button.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        if (button.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        }
        else if (button.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        }
    });
});