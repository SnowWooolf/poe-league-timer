// Таймер
function updateTimer() {
    const endDate = new Date('2025-06-13T23:00:00+03:00');
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
        document.getElementById('timer').innerHTML = "Лига началась!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

// Автоопределение ссылки сайта
document.addEventListener('DOMContentLoaded', function() {
    updateTimer();
    setInterval(updateTimer, 1000);

    const currentUrl = window.location.href;
    const urlElement = document.getElementById('site-url');
    urlElement.href = currentUrl;
    urlElement.textContent = currentUrl;

    document.getElementById('copy-url').addEventListener('click', function() {
        navigator.clipboard.writeText(currentUrl);
        document.getElementById('copy-message').textContent = "Скопировано!";
    });
});
