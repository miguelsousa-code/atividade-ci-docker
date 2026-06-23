# Atividade CI Docker

Projeto desenvolvido para a disciplina do IESB com o objetivo de aplicar os conceitos de Docker e GitHub Actions para automatizar o processo de build e publicação de uma aplicação containerizada.

## Tecnologias Utilizadas

* Node.js
* Docker
* GitHub Actions
* Docker Hub

## Executando Localmente

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Executando com Docker

Construir a imagem:

```bash
docker build -t atividade-ci-docker .
```

Executar o container:

```bash
docker run -p 3000:3000 atividade-ci-docker
```

Acesse:

```text
http://localhost:3000
```

## Docker Hub

Imagem publicada:

https://hub.docker.com/r/miguelnt/atividade-ci-docker

## GitHub Actions

A pipeline executa automaticamente:

* Checkout do código
* Build da aplicação
* Build da imagem Docker
* Publicação da imagem no Docker Hub

## Autor

Miguel Nathan Santos de Sousa.
Matrícula: 24114290022.
