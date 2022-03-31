Feature: Crud contas no sistema

Background: Realizar login no sistema
        Given Realizo login com sucesso

    @testeAdicionarNovaConta
    Scenario Outline: Adicionar conta válida
	    And clico no menu Contas
	    And clico no botão Adicionar
        And informo <nome> válido
        When clico no botão salvar
        Then a nova conta deve ser criada com sucesso

        Examples:
            | nome           |             
            | Teste Souza    |

    @testeAdicionarContaRepetida
    Scenario: Tentar adicionar conta repetida
	    And clico no menu Contas
	    And clico no botão Adicionar
        And informo nome já existente
        When clico no botão salvar
        Then o sistema não deve permitir a inclusão de uma conta repetida

    @testeAdicionarContaVazia
    Scenario: Tentar adicionar conta sem nome
	    And clico no menu Contas
	    And clico no botão Adicionar
        When clico no botão salvar
        Then o sistema não deve permitir a inclusão de uma conta vazia

 