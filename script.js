document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Obtendo os valores do formulário
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Obtendo os valores armazenados no localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Verifica se os valores armazenados são válidos e os compara
    if (storedUsername && storedPassword && username === storedUsername && password === storedPassword) {
        window.location.href = 'home.html'; // Redireciona em caso de sucesso
    } else {
        alert('Usuário ou senha não reconhecidos.');
    }
});
