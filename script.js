document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        console.log('verificando username e password')
        alert('Por favor, preencha todos os campos.');
    } else if(username !== 'username' || password !== 'username'){
        alert('Usuário ou senha não reconhecidos.')
    }
    else {
        // alert(`Bem-vindo, ${username}!`);
        // Aqui você pode redirecionar o usuário para outra página
         window.location.href = 'home.html';
    }
});
