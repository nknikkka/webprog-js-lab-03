// Функція для генерації випадкового пароля
function generatePassword(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Функція для перевірки, чи збігаються паролі
function checkPassword(password, confirmPassword) {
    return password === confirmPassword ? "Passwords match" : "Passwords do not match";
}

// Функція для генерації та перевірки пароля з виведенням результатів на веб-сторінку
function generateAndCheckPassword(length = 8) {
    const generatedPassword = generatePassword(length); // Генерація пароля

    // Виведення згенерованого пароля на веб-сторінку
    const generatedPasswordContainer = document.getElementById("generated-password");
    generatedPasswordContainer.innerText = generatedPassword;

    // Запит пароля для перевірки через prompt
    const userPassword = prompt("Please enter the password to check:");

    // Перевірка паролів
    const resultMessage = checkPassword(generatedPassword, userPassword);

    // Виведення результату перевірки на веб-сторінку
    const checkResultContainer = document.getElementById("check-result");
    checkResultContainer.innerText = resultMessage;
}

// Виклик функції для генерації та перевірки пароля
generateAndCheckPassword(8);
