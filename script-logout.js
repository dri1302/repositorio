// Pegando o usuário logado no localStorage
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
let logado = document.querySelector('#logado');
//logado.innerHTML = `Olá ${usuarioLogado}`;

// Se não tiver token (token == null) não vai entrar 
if (localStorage.getItem('token') == null) {
    window.alert('Você precisa estar logado');
    window.location.href = "index.html";
}

function logOut() {
    localStorage.removeItem('token'); // Removendo o Token
    localStorage.removeItem('usuarioLogado'); // Removendo o usuário logado
    window.location.href = "index.html"; // Direciona página do login
}

