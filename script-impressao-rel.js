    function imprimirRelatorio(){

    let dados = document.querySelector('#dados').innerHTML;
    let janela = window.open('','','width: 100,', 'height: 100');

    janela.document.write('<html><head>');
    janela.document.write('<title></title></head>');
    janela.document.write('<body>');
    janela.document.write(dados);
    janela.document.write('</body></html>');

    janela.document.close();
    janela.print();    
}


/*
<h2><strong>--- REPX - XML e NFe ---</strong></h2>
<h3><strong>Relatórios<br></strong></h3>
<p>- Número NF-e: </p>
<p>- Data Emissão: </p>
<p>- Razão Social: </p>
<p>- Chave de Acesso: </p>
<p>- Valor: </p>


janela.document.write('<html><head>');
janela.document.write('<title> Gerando PDF</title></head>');
janela.document.write('<body>');
janela.document.write(dados);
janela.document.write('</body></html>');
*/