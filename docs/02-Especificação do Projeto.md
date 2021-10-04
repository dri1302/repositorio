# 2 - Especificações do Projeto

A definição do problema apresentado nesse projeto e suas respectivas características, foram levantadas a partir de entrevistas com os usuários que lidam direta ou indiretamente com o tema em questão. Todos os pontos relatados foram ao encontro dessas opiniões e experiências dos envolvidos.   

As informações relativas ao processo de pesquisa e entrevista com as partes estão na forma de persona e histórias de usuários.

## 2.1 - Personas

Os profissionais que colaboraram no processo de entendimento do problema estão apresentados abaixo:  
________________________________________________________________________________________
**Ana Alice Soares**
<br>**Idade:** 42 anos.<br/>
**Ocupação:** Contadora, com experiência na área financeira. Atua em uma empresa de pequeno porte no ramo do vestuário voltado para público infantil.  

   **Aplicativos:**   
       Instagram; 
       Facebook. 

   **Motivações:**    
       Incentivar os filhos a encontrarem uma carreira profissional que os deixa feliz. 

   **Frustrações:**    
       Pouco tempo com a família; 
       Grande volume de trabalho. 

   **Hobbies, História:**   
       Adora filmes com histórias comoventes; 
       Mãe da Joana e do Renato, gosta de viajar com os filhos quando tem tempo.  
 ________________________________________________________________________________________
**João Guilherme Pereira**>
<br>**Idade:** 66 anos.<br/>
**Ocupação**: Empresário. Proprietário de um supermercado de pequeno porte. 

   **Aplicativos:**
       Facebook. 

   **Motivações:**
       Ensinar o filho sobre a empresa para que ele possa dar continuidade e até mesmo expandir.  

   **Frustrações:**  
       Alto custo na compra de produtos para revenda;
       Inflação diminuindo o poder de compra dos clientes;
       Despreparo do filho para assumir o negócio da família.    

   **Hobbies, História:**
       Assistir futebol com o filho Mateus;
       Adora o silêncio da pescaria no fim de semana. 
________________________________________________________________________________________
**Cristina Vieira Netto**
<br>**Idade:** 39 anos.<br/>
**Ocupação:** Tecnóloga em marketing, cursando bacharelado em administração, empreendedora e proprietária de microempresa no ramo de publicidade.

   **Aplicativos:** 
       Instagram; 
       Facebook; 
       Tik Tok. 

   **Motivações:**
       Expandir a empresa e abrir filiais. 

   **Frustrações:**  
       Dificuldade no início do negócio;
       Dificuldade de implementação de tecnologia para expandir a empresa.   

   **Hobbies, História:**
       Ama música, tendo preferência para rock e pop;
       Gosta de uma boa leitura, especialmente de romances.    
________________________________________________________________________________________


 ## 2.2 - Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|  EU COMO... `PERSONA`  |      QUERO/PRECISO ... `FUNCIONALIDADE`      |                  PARA ... `MOTIVO/VALOR`                    |
|------------------------|----------------------------------------------|-------------------------------------------------------------|
| Ana Alice Soares       | manter registro de XML em repositório        | evitar perdas de arquivos e multas                          |
| Ana Alice Soares       | emitir relatórios mensais                    | analisar fluxo de notas de entrada/saída                    |
| João Guilherme Pereira | baixar XML e PDF de NF-e                     | impressão de notas e envio para cliente                     | 
| João Guilherme Pereira | verificar NF-e emitidas para meu CNPJ        | conter prejuízo financeiro por emissão indevida             |
| João Guilherme Pereira | emitir relatórios diários de NF-e de entrada | verificar possíveis notas canceladas                        |
| Cristina Vieira Neto   | armazenar XML em plataforma online           | evitar perdas causadas por possíveis danos nos computadores |



## 2.3 - Lista de Requisitos

O escopo do projeto é apresentado em requisitos funcionais, descrevendo a interação do usuário com o sistema, e o em requisitos não funcionais, que define os quesitos de funcionamento do sistema. Os requisitos estão demonstrados nos quadros abaixo:  

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
