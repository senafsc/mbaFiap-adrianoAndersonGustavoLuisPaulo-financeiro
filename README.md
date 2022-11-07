# mbaFiap-adrianoAndersonGustavoLuisPaulo-financeiro
  - Projeto de conclusão da disciplina de DESENVOLVIMENTO DE MICROSSERVIÇOS E APIS - MBA FIAP

<br>

## Lista dos participantes da equipe
  -  Adriano Bastos e Silva (rm344764)
  - Anderson Andre dos Santos (rm344968)
  - Gustavo Souza Rodrigues (rm344770)
  - Luis Fernando de Sena Carita (rm344775)
  - Paulo Roberto Petrillo (rm344779)

<br>

  ## Link gitHub:
  - https://github.com/senafsc/mbaFiap-adrianoAndersonGustavoLuisPaulo-financeiro.git

<br>

## Descrição:
  - O Projeto foi realizado como treinamento da aula de desenvolvimento microserviços e apis

- Ele consiste numa aplicação para realizar as seguintes funções:
  - Cadastrar dados financeiros de um usuário;
  - Atualizar dados financeiros de um usuário;

<br><br>

## Requisitos:
- node versão 14.19.1 ou superior;
- instalar nodemon, com o comando abaixo: 
  ```
  npm install nodemon
  ```

## Rodando o projeto:
  - Para rodar o projeto é necessário executar o comando:
    ```
    npm install && npm start
    ```

# Rotas:
## - Cadastrar dados financeiros:
  - **POST:**
    - http://localhost:3000/api/contas/registrar
    - body:
      ~~~JSON
      {
        "idusuario": "636981e0d2f681ba3d15d7e3",
        "nomeubanco": "C6 Bank",
        "tipoconta": "POUPANCA",
        "nometitular": "SEU_NOME",
        "limitecartao": "10000"
      }
      ~~~
    - header: 
      ```
      token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjk2NjNiZTQ2MzJhMjNmYTA4NTY1MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tLmJyIiwiaWF0IjoxNjY3ODUyNzY0LCJleHAiOjE2Njc4NTk5NjR9.uKCWZTo17wCTLAvEBUZL3W0MFiwXvUG2QyYt_zHFB28
      ```

    <br>

  - **RETORNOS ESPERADOS:**
      <br>
      - **status (200)**
        ~~~JSON
        {
          "output": "Cadastro realizado",
          "payload": {
            "idusuario": "636981e0d2f681ba3d15d7e3",
            "nomeubanco": "C6 Bank",
            "tipoconta": "POUPANCA",
            "nometitular": "SEU_NOME",
            "limitecartao": "10000",
            "_id": "636986f779c5d4360df9e1fb",
            "__v": 0
          }
        }
        ~~~

      - **status (500)**
        ~~~JSON
        {
          "output": "Erro ao cadastrar -> ValidationError: limitecartao: Path `limitecartao` is required., nometitular: Path `nometitular` is required., tipoconta: Path `tipoconta` is required., nomeubanco: Path `nomeubanco` is required., idusuario: Path `idusuario` is required."
        }
        ~~~

        ~~~JSON
        {
          "output": "Erro ao cadastrar -> ValidationError: idusuario: Path `idusuario` is required."
        }
        ~~~
  
  <br>

 ## - ATUALIZAR DADOS FINANCEIROS DO USUÁRIO:
  - **PUT:**
    - http://localhost:3000/api/contas/atualizar/636986f779c5d4360df9e1fb
    - body:
      ~~~JSON
      {
        "nomeubanco": "ITAU",
        "tipoconta": "CORRENTE",
        "nometitular": "SEU_NOME_2",
        "limitecartao": "5000"
      }
      ~~~
    - header: 
      ```
      token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjk2NjNiZTQ2MzJhMjNmYTA4NTY1MCIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tLmJyIiwiaWF0IjoxNjY3ODUyNzY0LCJleHAiOjE2Njc4NTk5NjR9.uKCWZTo17wCTLAvEBUZL3W0MFiwXvUG2QyYt_zHFB28
      ```
    
    <br>

  - **RETORNOS ESPERADOS:**
    - **status (202):**
      ~~~JSON
      {
        "output": "Atualizado",
        "payload": {
          "_id": "636986f779c5d4360df9e1fb",
          "idusuario": "636981e0d2f681ba3d15d7e3",
          "nomeubanco": "ITAU",
          "tipoconta": "CORRENTE",
          "nometitular": "SEU_NOME_2",
          "limitecartao": "5000",
          "__v": 0
        }
      }
      ~~~

    - **status (500):**
      - id inválido:
        ~~~JSON
        {
          "output": "Erro ao processar a atualização-> CastError: Cast to ObjectId failed for value \"636986f779c5d4360df9e1f\" (type string) at path \"_id\" for model \"usuario\""
        }
        ~~~
      - Token inválida:
        ~~~JSON
        {
          "output": "Token inválido -> JsonWebTokenError: invalid signature"
        }
        ~~~
        
      - Não passou a token no header:

        ~~~JSON
        {
          "output": "Não autorizado"
        }
        ~~~