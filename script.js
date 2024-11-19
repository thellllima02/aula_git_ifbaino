document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    console.log("username",username, "password", password)
    if(username === 'username' && password === 'username'){
        window.location.href = 'home.html';
    }
    else {
        alert('Usuário ou senha não reconhecidos.')
        // alert(`Bem-vindo, ${username}!`);
        // Aqui você pode redirecionar o usuário para outra página
    }
});
