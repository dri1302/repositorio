function cadastroCliente() {
    let email = document.querySelector('#cademail');
    let nome = document.querySelector('#cadnome');
    let cnpj = document.querySelector('#cadcnpj');
    let senha = document.querySelector('#cadsenha');
    let confsenha = document.querySelector('#cadconfsenha');
    // Verificando se campo está preenchido com os dados
    if (email.value && nome.value && cnpj.value && senha.value && confsenha.value) {  
        if (senha.value == confsenha.value) { // Senha confere ou não
            let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]') // Criando lista no localStorage
            listaUsuario.push( // Adicionando dados na lista
                {
                    "emailCad": email.value,
                    "nomeCad": nome.value,
                    "cnpjCad": cnpj.value,
                    "senhaCad": senha.value,
                    "cadconfsenhaCad": confsenha.value
                }
            );
            // Convertendo pra string e acrescentando no localStorage os dados da lista
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

// Enviar email suporte
function emailSuporte() {
    alert('FUNÇÃO emailSuporte()()')
}

// Busca Nota
function buscaNota() {
    alert('FUNÇÃO: buscaNota')
}

// Buscar Relatórios
function buscaRelatorio() {
    alert('FUNÇÃO: buscaRelatorio()')
}

function atualizaDados() {
    let email = document.querySelector('#atemail');
    let nome = document.querySelector('#atnome');
    let cnpj = document.querySelector('#atcnpj');
    let senha = document.querySelector('#atsenha');
    let confsenha = document.querySelector('#atsenconf');
      // Verificando se campo está preenchido com os dados
     

    let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));
    let cont = 0
    listaUsuario.forEach(item => { // percorrendo local
        cont++;
        console.log(item)        
    });
    console.log(cont)        
/*
    "emailCad": email.value,
    "nomeCad": nome.value,
    "cnpjCad": cnpj.value,
    "senhaCad": senha.value,
    "cadconfsenhaCad": confsenha.value
*/

    
    if (email.value && nome.value && cnpj.value && senha.value && confsenha.value) {
      //  alert('entrou')
        if (senha.value == confsenha.value) { // Ver se senha confere
        //console.log(listaUsuario);
        } else {
            alert ('Senha não confere, verifique.')
        }
    } else {
        alert('Dados incompletos, verifique.')
    }
}

/* --- PRÉ - LOGIN ---*/
// Envio email planos - Criar envio
function emailInscreva() {
    const inscreva = document.querySelector('email-rodape#bot-inscreva'); // Class#ID
    alert('ENTROU FUNÇÃO INSCREVA-SE: emailInscreva()')
}

