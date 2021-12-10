# oficina-app

## O que é ? 

Trata-se de uma aplicação mobile simples que têm como objetivo listar orçamentos realizados por uma oficina fictícia. Os dados são consumidos através de uma API REST. 

## Tecnologias

**Back-end**: A stack utilizada foi ```nodejs```, em conjunto com a biblioteca ```axios``` para fornecer suporte no consumo da API.

**Front-end**: Foi utilizado ```React Native``` como stack principal. O projeto foi criado através do ```Expo``` e algumas de suas bibliotecas também foram utilizadas. 
Para fins de organização de estilização da aplicação foi utilizado ```styled-components```.

**Linguagem**: TypeScript.

## Estrutura de pastas

```
| src\
|   components                # Localização dos componentes utilizados
|   global                    # Definições de características globais, como o tema da aplicação por exemplo.
|   pages                     # Localização das páginas da aplicação
```

## Como rodar a aplicação

- O requisito básico é ter o [nodejs](https://github.com/luanripax/oficina-app.git) instalado, após isso, segue-se com os próximos passos:
- Instale o Expo: ```npm install --global expo-cli```
- No diretório do repositório, instale as dependências: ```npm install```
- Para executar a aplicação: ```expo start```
* Assim que a aplicação iniciar, é possível rodar a aplicação tanto em um emulador, como em um próprio dispositivo físico, com o aplicativo ```Expo Go``` instalado.

