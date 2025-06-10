// Таймер
function updateTimer() {
    const endDate = new Date('2025-06-13T23:00:00');
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

    document.getElementById('timer').innerHTML = 
        `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Переключение вкладок
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок и вкладок
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Добавляем активный класс к выбранной кнопке и вкладке
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Здесь можно добавить логику для работы с таблицами
// Например, получение данных с сервера или localStorage
