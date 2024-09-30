// Оголошення функції formatMessage
function formatMessage(message, maxLength) {
    // Перевірка довжини рядка
    if (message.length <= maxLength) {
        return message; // Якщо довжина рядка менша або дорівнює maxLength, повертаємо початковий рядок
    } else {
        return message.slice(0, maxLength) + "..."; // Обрізаємо рядок і додаємо трикрапку
    }
}

// Вивід результатів на веб-сторінку
const resultsContainer = document.getElementById("task2-result");
resultsContainer.innerHTML = `
    <p>${formatMessage("Curabitur ligula sapien", 16)}</p>
    <p>${formatMessage("Curabitur ligula sapien", 23)}</p>
    <p>${formatMessage("Vestibulum facilisis purus nec", 20)}</p>
    <p>${formatMessage("Vestibulum facilisis purus nec", 30)}</p>
    <p>${formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)}</p>
    <p>${formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)}</p>
`;
