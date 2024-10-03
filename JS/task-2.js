// Функція перевірки, чи збігаються паролі
function checkPassword(password, confirmPassword) {
    if (password === confirmPassword) {
        return "Passwords match";
    } else {
        return "Passwords do not match";
    }
}

// Знаходимо контейнер для виводу результатів на веб-сторінку
const passwordCheckContainer = document.getElementById("password-check-container");

// Створюємо приклади перевірки паролів та виводимо їх на сторінку
passwordCheckContainer.innerHTML = `
    <p>${checkPassword("f8G7cB2d", "f8G7cB2d")}</p>
    <p>${checkPassword("A9c7J3m2K5pR", "A9c7J3m2")}</p>
    <p>${checkPassword("abc123", "abc123")}</p>
    <p>${checkPassword("12345678", "87654321")}</p>
`;
