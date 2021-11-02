function cadastroCliente() {
    let email = document.querySelector('#cademail');
    let nome = document.querySelector('#cadnome');
    let cnpj = document.querySelector('#cadcnpj');
    let senha = document.querySelector('#cadsenha');
    let confsenha = document.querySelector('#cadconfsenha');
    let codPessoa = geraCodigoPessoa(); // Função para gerar código de usuários

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
                    "cadconfsenhaCad": confsenha.value,
                    "codCad": codPessoa
                }
            );
            // Convertendo pra string e acrescentando no localStorage os dados da lista
            localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
            alert('Cadastro efetuado com sucesso')
            window.location.href = 'index.html'
        }
        else {
            alert('Confirmação de senha incorreta,verifique se a senha inserida esta igual')
        }
    }
    else {
        window.alert('Dados incompletos,verifique')
    }
}

// Função para gerar código de usuários - Chamada em
// cadastroCliente()
function geraCodigoPessoa() {
    let i = 1;
    let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
    listaUsuario.forEach(element => {
        i++;
        //console.log(element);
    });
    return i;
}



/*
function atualizaDados() {
    let email = document.querySelector('#atemail');
    let nome = document.querySelector('#atnome');
    let cnpj = document.querySelector('#atcnpj');
    let senha = document.querySelector('#atsenha');
    let confsenha = document.querySelector('#atsenconf');

    console.log('entrou função')


}


let atualizaUsuario = JSON.parse(localStorage.getItem('atualizaUsuario') || '[]');

 //let listaUsuario = JSON.parse(localStorage.getItem//('listaUsuario') || '[]');

 // Verificando se campo está preenchido com os dados
 if (email.value && nome.value && cnpj.value && senha.value && confsenha.value) {
     if (senha.value == confsenha.value) { // Senha confere ou não
         let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]') // Criando lista no localStorage
         

         atualizaUsuario.push( // Adicionando dados na lista
             {
                 "emailAtt": email.value,
                 "nomeAtt": nome.value,
                 "cnpjAtt": cnpj.value,
                 "senhaAtt": senha.value,
                 "cadconfsenhaAtt": confsenha.value,
                 "codAtt": listaUsuario.codPessoa
             }
         );
         // Convertendo pra string e acrescentando no localStorage os dados da lista
         localStorage.setItem('atualizaUsuario', JSON.stringify(atualizaUsuario));
         alert('Atualização efetuada com sucesso')
         window.location.href = 'index.html'
     }
     else {
         alert('Confirmação de senha incorreta,verifique se a senha inserida esta igual')
     }
 }
 else {
     window.alert('Dados imcompletos,verifique')
 }

*/



/*
    let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));
    let listaAtualiza = JSON.parse(localStorage.getItem('listaAtualiza' || '[]'));
    
  //  if (localStorage.getItem('token') == null) {
//        window.alert('Você precisa estar logado');
 //       window.location.href = "index.html";
 //   }

    // let cont = 0
    listaUsuario.forEach(item => { // percorrendo local
        //cont++;
        // console.log(item)
        listaAtualiza.push({
            "emailAtt": listaUsuario.emailCad,
            "nomeAtt": listaUsuario.nomeCad,
            "cnpjAtt": listaUsuario.cnpjCad,
            "senhaAtt": listaUsuario.senhaCad,
            "confSenhAtt": listaUsuario.cadconsfsenhacad,
            "codAtt": listaUsuario.codCad
        });
    });
    // console.log(cont)   
    localStorage.setItem('listaUsuario', JSON.stringify(listaAtualiza));
 
*/




function buscarNota() {
    alert('entrou busca nota');
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






/* --- PRÉ - LOGIN ---*/
/*
// Envio email planos - Criar envio
function emailInscreva() {
    const inscreva = document.querySelector('email-rodape#bot-inscreva'); // Class#ID
    alert('ENTROU FUNÇÃO INSCREVA-SE: emailInscreva()')
}*/

