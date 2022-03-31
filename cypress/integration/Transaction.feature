Feature: Movimentações de despesa e receita

Background: Realizar login no sistema
        Given Realizo login com sucesso
 
    @testeCriarMovimentacaoDespesa
    Scenario Outline: Criar movimentação de despesa com sucesso
        And clico em Criar movimentação
        And seleciono tipo de movimentacao despesa
        And informo a <data_movimentacao> válida
        And informo a <data_pagamento> válida
        And informo a descrição
        And informo o interessado
        And informo o <valor> válido
        And seleciono a conta
        And seleciono a situação
        When clico no botão Salvar
        Then a movimentação deve ser adicionada com sucesso

        Examples:
            |data_movimentacao    |data_pagamento    |valor  |situação
            |25/03/2022           | 27/03/2022       |5000   |pendente    
    

