function cadastroCliente() {

  let email = document.querySelector('#email');
  let senha = document.querySelector('#senha');
  let confirmSenha = document.querySelector('#confirmSenha');

  if (email.value && senha.value && confirmSenha.value) {
    if (senha.value == confirmSenha.value) {
      let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');

      listaUsuario.push( // Aqui é um objeto 
        {
          "emailCad ": email.value,
          "senhaCad": senha.value
        }
      );
      localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
      alert('Cadastro efetuado com sucesso!');
      window.location.href = "login.html";

    } else { // ELSE do segundo IF, entra caso a confirmação de senha não esteja igual a senha.
      alert('Confirmação de senha incorreta, verifique.');
    }
  } else { // ELSE do primeiro IF, que verifica se todos os campos (nome, senha, confirmar senha) estão preenchidos. 
    alert('Dados incompletos, verifique.');
  }
}


function login() {
  let email = document.querySelector('#email');
  let senha = document.querySelector('#senha')
  let validaUsuario = [];

  listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');

  listaUsuario.forEach(item => {
    if (email.value == item.emailCad && senha.value == item.
      senhaCad) {
      // Array em que são salvos o item 
      validaUsuario = {
        email: item.emailCad,
        senha: item.senhaCad
      }
    }
  }); // Fim forEach

  if (email.value == validaUsuario.email && senha.value == validaUsuario.senha) {
    let token = Math.random().toString(16).substr(2);

    localStorage.setItem('token', token);
    localStorage.setItem(('usuarioLogado'), JSON.stringify(validaUsuario.email));
    window.location.href = "tela-menu.html";
  }
  else { // Entra nesse ELSE caso o usuário não tenha cadastro
    alert('Usuário não cadastrado');
  }
}