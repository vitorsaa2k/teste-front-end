# Instruções para compilar, testar e rodar o projeto

Segue instruções para rodar o projeto e poder testar o mesmo. Por enquanto existem duas formas de rodar.

## Docker
Existem dois profiles dentro do docker-compose: `dev` e `preview` (**Recomendo usar o profile de preview**)

### Preview
Nesse profile o vite vai pre-compilar o projeto e levantar um servidor para você poder acessar ele. (Recomendo caso não vá fazer nenhuma modificação no código) 

Para rodar nesse profile utilize o comando: 

```bash
docker compose --profile preview up --build
```
Depois que o container estiver rodando acesse: `http://localhost:4173`

### Dev
Utilize esse profile caso vá fazer modificações no código e queira que live-reload funcione

Para rodar nesse profile utilize o comando:
```bash
docker compose --profile dev up --build
```
Depois que o container estiver rodando acesse: `http://localhost:5173`

## Localmente
Caso não queira utilizar o docker e simplesmente executar os comandos para rodar o projeto, use os conhecidos:

```bash
npm run preview
```
acesse: `http://localhost:4173`

ou 
```bash
npm run dev
```
acesse: `http://localhost:5173`



# Teste Econverse: Vaga Desenvolvedor Front-End

### Vem ser #Econverse!

Segue abaixo as instruções para a execução do teste.

## Instruções
- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Desenvolva a página conforme as **Especificações Técnicas** 
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail gustavo.cipriano@econverse.com.br com o título **Teste Vaga FrontEnd**

## Especificações Técnicas
- Desenvolver a pagina em React e TypeScript conforme o [layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a [vitrine](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png) de produtos consumindo as informações dos produtos em json atraves desse [Link](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

## Pontos Extras
- Utilizar Boas práticas de SEO
- Uso de HTML semântico

## O que avaliaremos em seu teste
- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**
