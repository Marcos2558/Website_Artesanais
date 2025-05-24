const form = document.getElementById('loginForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (usuario === 'admin' && senha === '1234') {
        mensagem.textContent = 'Login bem-sucedido!';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Usuário ou senha incorretos.';
        mensagem.style.color = 'red';
    }

    form.reset();
});
