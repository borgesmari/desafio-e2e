Feature: Login sistema Seu Barriga

Background: acessar o sistema
        Given acesso o sistema Seu Barriga

    @testeLoginValido
    Scenario Outline: Realizar login com sucesso
        And informo <email> correto
        And informo <senha> correta
        When clico no botão entrar
        Then login deve ser realizado com sucesso no sistema

        Examples:
            | email                        | senha      |
            | marianagb.borges@gmail.com   | Hpteste@21 |

    @testeLoginInvalido
    Scenario Outline: Erro ao tentar logar utilizando senha incorreta
        And informo <email> correto
        And informo <senha> incorreta
        When clico no botão entrar
        Then deve ser apresentada a mensagem de erro para o usuário

        Examples:
            | email                        | senha      |
            | marianagb.borges@gmail.com   | blablabla  |
