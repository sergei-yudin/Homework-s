
const signinForm = document.getElementById('signin__form');
const signinBlock = document.getElementById('signin');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

const savedUserId = localStorage.getItem('user_id');

if (savedUserId) {
    showWelcome(savedUserId);
} else {
    signinBlock.classList.add('signin_active');
}

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signinForm);

    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Успешный вход
            const userId = result.user_id;
            localStorage.setItem('user_id', userId);
            showWelcome(userId);

            signinForm.reset();
        } else {
            alert('Неверный логин/пароль');
        }
    } catch (err) {
        console.error('Ошибка запроса:', err);
        alert('Ошибка соединения с сервером');
    }
});

function showWelcome(userId) {
    userIdSpan.textContent = userId;
    welcomeBlock.classList.add('welcome_active');
    signinBlock.classList.remove('signin_active');
}