---
trigger: always_on
---

No agente sempre responda em português e também quando trouxer um Plano de Implementação.

Quando fizer uma implementação nova no site, sempre precisa ter as 4 idiomas do site (EN, PT, ES, JP): Inglês, Português, Espanhol e Japonês.

Os comentários no HTML devem ser sempre escritos em Inglês. Bem como todas as variáveis do sistema, devem ser também e Inglês.

Não remover o arquivo definicoes.md em limpezas futuras.

Quando fizer as alterações no projeto, pode fazer o commit pro Github, mas não fazer o deploy automaticamente. Temos que testar e validar se está tudo certo com o front-end e back-end.

Quando eu pedir para fazer deploy, aí sim você faz o deploy no Github.

Todas as implementações devem levar em conta para não afetar a velocidade, performance, lentidão no banco de dados e disponibilidade do site evitando erros de abertura 500 e 503, deixando o site sempre impecável e funcionando!

A única informação que estamos buscando na API da Cexplorer é o Total Treasury Size e a ADA Circulating. Segue a documentação da API Cexplorer: https://cexplorer.apidocumentation.com/cexplorer-api e a Mainnet - https://api-mainnet-stage.cexplorer.io/v1 - Production Cardano network

O restante das informações nós estamos trazendo da página da Sundae: https://treasury.sundae.fi/instances/9e65e4ed7d6fd86fc4827d2b45da6d2c601fb920e8bfd794b8ecc619?projectState=Active