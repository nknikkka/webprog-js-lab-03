// Функція для генерації випадкового пароля заданої довжини
function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }

  return password;
}

const passwordContainer = document.getElementById("password-container");

passwordContainer.innerHTML = `
  <p>Пароль 1: ${generatePassword(8)}</p>
  <p>Пароль 2: ${generatePassword(12)}</p>
  <p>Пароль 3: ${generatePassword(10)}</p>
  <p>Пароль 4: ${generatePassword(14)}</p>
`;
