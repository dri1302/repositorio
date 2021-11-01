
function cadastroCliente() {
    let email = document.querySelector('#cademail');
    let nome = document.querySelector('#cadnome');
    let cnpj = document.querySelector('#cadcnpj');
    let senha = document.querySelector('#cadsenha');
    let confsenha = document.querySelector('#cadconfsenha');
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
    let confsenha = document.querySelector('#atconfsenha');
   // alert('entrou')

    if (email.value && nome.value && cnpj.value && senha.value && confsenha.value) {
        alert('entrou')
        if (senha.value == confirmSenha.value) {
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
        console.log(listaUsuario);
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

