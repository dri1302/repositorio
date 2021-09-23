# 1 - Introdução

A cada ano que passa, a tecnologia da informação vem aprimorando as relações de trabalho e desenvolvendo sistemas cada vez mais complexos e eficazes para a resolução das demandas do setor empresarial. Devido às necessidades legais que uma empresa está submetida, é preciso que alguns requisitos sejam cumpridos.  

Com a implementação da nota fiscal eletrônica - NF-e -em 2005 (SINIEF 07/05, Cláusula Décima, § 2º), o mecanismo de fiscalização por parte do governo, na figura da Secretaria da Fazenda – SEFAZ – foi sendo adaptado para essa nova realidade. Para isso foi criado o que é comumente chamado arquivo XML, que é a própria nota no formato digital.  

Dentro deste novo contexto, as empresas são obrigadas por força de lei a armazenar os arquivos XML para que, mediante solicitação da SEFAZ, sejam apresentados em possíveis fiscalizações futuras. O descumprimento da lei acarreta pesadas multas para as empresas.  

Diante da necessidade de armazenamento desses dados, torna-se imprescindível sistemas capazes de armazenar de forma segura e concisa os arquivos XML, além de disponibilizar para a empresa quando for requisitado.  

## 1.1 - Problema
Conforme dito anteriormente, o problema que se busca resolver dentro desse projeto é a inadequação dos métodos de armazenamento comumente utilizados por empresas diante do que pede a legislação brasileira e do ponto de vista de segurança das próprias empresas em relação a esses dados, criando-se um meio de armazenamento das Notas Fiscais eletrônicas confiável e seguro.  

## 1.2 - Objetivos

O objetivo geral desse estudo é o desenvolvimento de software capaz de armazenar e disponibilizar arquivos XML de notas fiscais para as empresas.  

 Dentro do âmbito dos objetivos específicos, os pontos elencados são:  

    Identificar as dificuldades das empresas em armazenar os arquivos;  

    Desenvolver aplicação para armazenamento de arquivo XML;  

    Criar soluções para download de arquivos nos sistemas da empresa;  

    Substituir a versão física das Notas Fiscais. 

## 1.3 - Justificativa

A nota fiscal eletrônica já é uma realidade no Brasil desde 2005, quando foi implementada pela SEFAZ, através do ajuste SINIEF 07/05. Com o passar do tempo, novas alterações foram feitas nesse mecanismo de NF-e. Um exemplo disso é a alteração feita em 2009, pelo ajuste SINIEF 12/09, definindo que o emitente da NF-e deve encaminhar ou disponibilizar download do arquivo da nota fiscal e seu respectivo Protocolo de Autorização de Uso ao destinatário. E também modifica o Processo de Registro de Contingência1, que deixa de ser realizado através do Livro de Ocorrência2 e passa a ser feito no próprio arquivo XML, não precisando de imprimir as notas fiscais, contribuindo, inclusive, com a redução do uso de papel.  

Com a fiscalização implementada através de processos virtuais, empresários e contadores necessitam cada vez mais de controle e agilidade na busca de seus documentos fiscais, afim de evitar multas para as empresas (Lei 8137/90, Art 1º, inciso V). Dentro desse quadro, é possível desenvolver softwares capazes de realizar todo o trâmite relacionado ao gerenciamento e download dos arquivos XML de NF-e.  

## 1.4 - Público-alvo

A proposta desse projeto tem como foco as empresas emitentes de NF-e, tanto do ponto de vista da relação fornecedor x cliente quanto da relação cliente x fornecedor, visto que ambos devem cumprir as determinações legais de armazenamento desses dados.  

Embora seja possível abranger empresas de diversos portes, os nichos definidos para o público-alvo do presente estudo são as Microempresas (ME) e as Empresas de Pequeno Porte (EPP), que, em muitos casos, não possuem sistemas eficientes para armazenamento de XML ou até mesmo quando os proprietários desconhecem essa possibilidade.  
