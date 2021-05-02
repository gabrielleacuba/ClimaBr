# ClimaBR com Local Storage 
Trabalho feito para a disciplina de Modelagem e Implementação de Software (GGC132). O Trabalho consiste em uma aplicação simples para consulta à previsão do tempo de cidades brasileiras e gravação das consultas no local storage.

## 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Ter algum browser instalado
* Ter uma máquina `<Windows / Linux / Mac>`
* Ter o node instalado na máquina

## ☕ Usando ClimaBr localStorage

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

## 🤝 Colaboradores

Gabrielle Almeida Cuba

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/gabriellealmeidacuba/">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFy0PrYXpnocw/profile-displayphoto-shrink_200_200/0/1616955634763?e=1625702400&v=beta&t=RcftRgxvUZLk1EZDA9VSoxSHzb4HrmqbUPZY3PWhTYs" width="100px;" alt="Foto da Gabrielle Almeida Linkedin"/><br>
        <sub>
          <b>Gabrielle Cuba</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#nome-do-projeto)<br>
