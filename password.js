const passwordInput = document.getElementById('password');
const passwordDisplay = document.getElementById('password-display');

// Atualiza o campo real de senha quando o usuário digita
passwordDisplay.addEventListener('input', () => {
    const length = passwordDisplay.value.length;
    const maskedValue = '*'.repeat(length); // Cria os asteriscos
    passwordDisplay.value = maskedValue;
    passwordInput.value = passwordDisplay.value; // Sincroniza com o campo real
});
