let email = document.querySelector('#cademail');
let nome = document.querySelector('#cadnome');
let cnpj = document.querySelector('#cadcnpj');
let senha = document.querySelector('#cadsenha');
let confsenha = document.querySelector('#cadconfsenha');

function cadastroCliente() {
    if (email.value && nome.value && cnpj.value && senha.value && confsenha.value) {
        if (senha.value == confsenha.value) {
            let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')
            listaUsuario.push(
                {
                    "emailCad": email.value,
                    "nomeCad": nome.value,
                    "cnpjCad": cnpj.value,
                    "senhaCad": senha.value,
                    "cadconfsenhaCad": confsenha.value
                }
            );
            localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
            alert('Cadastra efetuado com sucesso')
            window.location.href = 'index.html'

        }
        else {
            alert('Confirmação de senha incorreta,verifique se a senha inserida esta igual')
        }

    }
    else {
        window.alert('Dados imcompletos,verifique')
    }

}

function login() {
    // Pegando os valores lidos em nome e senha no input
    let email = document.querySelector('#email');
    let senha = document.querySelector('#senha')
  
    let validaUsuario = []; // Array vazio. Será preenchido com os itens que forem validados
  
    // Pegando a listaUsuario (incluida no cadastro) no localStorage e salvando na variável listaUsuário
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
  
  
    // forEach funciona igual ao for. Vai varrer o array listaUsuario e se encontrar um elemento igual ao comparado no IF, irá preencher o array validaUsuario
  
    listaUsuario.forEach(item => { 
  
      // nome.value e senha.value são lidos lá no input. O item.nomeCad e item.senhaCad, vai pegar o que foi salvo no cadastro e atribuir ao array validaUsuario. Ou seja: O item que está sendo validado no IF será incluído nesse array
      if (nome.value == item.nomeCad && senha.value == item.
        senhaCad) { 
        // Array em que são salvos o item 
        validaUsuario = {
          nome: item.nomeCad,
          senha: item.senhaCad
        }
      }
    }); // Fim forEach
  
    // Fazendo nova comparação para ir para tela inicial
    // Aqui fará uma nova comparação entre o nome.value e senha.value (do input), com as informações salvar no array validaUsuario.
    if (nome.value == validaUsuario.nome && senha.value == validaUsuario.senha) {
      // Gerando números aleatórios em Math.random  ///  toString(16) vai converter para hexadecimal  ///  substr(2) vai pegar do 3º caractere em diante, ignorando os 2 primeiros (vai começar depois da vírgula)
      let token = Math.random().toString(16).substr(2);
  
      // Colocando o token no localStorage
      // O token serve como uma nova validação para o usuário. Quando o usuário faz login é gerado um token aleatório, quando ele sai o token é limpado na função logOut(), que está no arquivo script-logout.js. Esse sistema permite que não seja acessada qualquer página caso não haja nenhum login. Para visualizar melhor, vá em inspecionar no navegador -> em apliccation e local storage.
      localStorage.setItem('token', token);
  
      // No localStorage, pega as informações de validaUsuario (ou seja, o nome usuário que foi validado no login) e salva em usuarioLogado. A continuação dessa parte está em script-logout.js, da linha 4 a 8
      localStorage.setItem(('usuarioLogado'), JSON.stringify(validaUsuario.nome));
    
      // Indo para tela inicial  
      window.location.href = "tela-inicial.html"; 
    }
    else { // Entra nesse ELSE caso o usuário não tenha cadastro
      alert('Usuário não cadastrado');
    }
  }