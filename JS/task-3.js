// Оголошення функції checkForSpam
function checkForSpam(message) {
    // Перетворюємо рядок на нижній регістр для порівняння
    const lowerCaseMessage = message.toLowerCase();
    // Перевіряємо наявність заборонених слів
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

// Вивід результатів перевірки на сторінку
const results = [
    checkForSpam("Latest technology news"), // false
    checkForSpam("JavaScript weekly newsletter"), // false
    checkForSpam("Get best sale offers now!"), // true
    checkForSpam("Amazing SalE, only tonight!"), // true
    checkForSpam("Trust me, this is not a spam message"), // true
    checkForSpam("Get rid of sPaM emails. Our book is on sale!"), // true
    checkForSpam("[SPAM] How to earn fast money?") // true
];

// Виводимо результати в HTML
const task3ResultDiv = document.getElementById('task3-result');
results.forEach((result, index) => {
    task3ResultDiv.innerHTML += `Test ${index + 1}: ${result}<br>`;
});
