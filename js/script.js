// Таймер
function updateTimer() {
    const endDate = new Date('2025-06-13T23:00:00+03:00'); // МСК
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
        document.getElementById('timer').innerHTML = "Массовая уэкуляция началась!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Переключение вкладок
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Автоматическое определение и копирование ссылки
document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    const urlElement = document.getElementById('site-url');
    urlElement.textContent = currentUrl;
    urlElement.href = currentUrl;

    document.getElementById('copy-url').addEventListener('click', function() {
        navigator.clipboard.writeText(currentUrl).then(() => {
            const message = document.getElementById('copy-message');
            message.style.display = 'block';
            setTimeout(() => message.style.display = 'none', 2000);
        });
    });
});
