// Таймер (исправлен на 23:00)
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

// Управление таблицей
const table = document.getElementById('players-table');
const addRowBtn = document.getElementById('add-row');

// Загрузка данных из localStorage
function loadTable() {
    const savedData = localStorage.getItem('poePlayers');
    if (savedData) {
        table.querySelector('tbody').innerHTML = savedData;
    }
}

// Сохранение данных в localStorage
function saveTable() {
    const tableContent = table.querySelector('tbody').innerHTML;
    localStorage.setItem('poePlayers', tableContent);
}

// Добавление новой строки
addRowBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td><button class="delete-row">Удалить</button></td>
    `;
    table.querySelector('tbody').appendChild(newRow);
    saveTable();
});

// Удаление строки
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-row')) {
        e.target.closest('tr').remove();
        saveTable();
    }
});

// Редактирование ячеек
table.addEventListener('input', () => {
    saveTable();
});

// Загружаем таблицу при старте
document.addEventListener('DOMContentLoaded', loadTable);
