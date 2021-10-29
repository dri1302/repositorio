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

