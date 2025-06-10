// Таймер
function updateTimer() {
    const endDate = new Date('2025-06-13T23:00:00+03:00');
    const now = new Date();
    const diff = endDate - now;

    const timer = document.getElementById('timer');
    
    if (diff <= 0) {
        timer.textContent = "ЛИГА НАЧАЛАСЬ!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timer.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

// Работа с таблицей
document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    setInterval(updateTimer, 1000);

    const table = document.getElementById('poe-table');
    const tbody = table.querySelector('tbody');

    // Добавление строки
    document.getElementById('add-row').addEventListener('click', () => {
        const classInput = document.getElementById('class-input');
        const skillInput = document.getElementById('skill-input');
        const linkInput = document.getElementById('link-input');

        if (!classInput.value || !skillInput.value) return;

        const newRow = document.createElement('tr');
        
        // Проверка и форматирование ссылки
        let link = linkInput.value;
        if (link && !link.startsWith('http')) {
            link = 'https://' + link;
        }

        newRow.innerHTML = `
            <td>${classInput.value}</td>
            <td>${skillInput.value}</td>
            <td>${link ? `<a href="${link}" target="_blank">Открыть</a>` : '—'}</td>
            <td><button class="delete-btn">Уебать</button></td>
        `;

        tbody.appendChild(newRow);
        
        // Очистка полей
        classInput.value = '';
        skillInput.value = '';
        linkInput.value = '';
    });

    // Удаление строки
    table.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('tr').remove();
        }
    });
});
