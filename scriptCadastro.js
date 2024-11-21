document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordAgain = document.getElementById('passwordagain').value.trim();

    if (password !== passwordAgain) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a página inicial após o cadastro
});