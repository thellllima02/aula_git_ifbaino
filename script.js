document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if(username === 'username' && password === 'password'){
        window.location.href = 'home.html';
    }
    else {
        alert('Usuário ou senha não reconhecidos.')
    }
});

