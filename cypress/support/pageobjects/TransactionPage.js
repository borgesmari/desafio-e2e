// <reference types="Cypress" />

import TransactionElements from '../elements/TransactionElements'
const transactionElements = new TransactionElements

class TransactionPage {

    clicarMenuCriarMovimentacao()
    {
        cy.get(transactionElements.botaoCriarMovimentacao()).click()

    }

    selecionarTipoMovimentacaoReceita()
    {
        cy.get('select[name="tipo"]').select("REC")
    }

    selecionarTipoMovimentacaoDespesa()
    {
        cy.get('select[name="tipo"]').select("DESP")
    }

    informarDataMovimentacao(data_movimentacao)
    {
        cy.get(transactionElements.inputDataMovimentacao()).type(data_movimentacao)
    }

    informarDataPagamento(data_pagamento)
    {
        cy.get(transactionElements.inputDataPagamento()).type(data_pagamento)
    }

    informarDescricao()
    {
        cy.get(transactionElements.inputDescricao()).type('teste')
    }

    informarInteressado()
    {
        cy.get(transactionElements.inputInteressado()).type('João Teste Junior')
    }

    informarValor(valor)
    {
        cy.get(transactionElements.inputValor()).type(valor)
    }

    selecionarConta()
    {
        cy.get(transactionElements.selectConta()).click()
    }

    selecionarSituacaoPago()
    {
        cy.get(transactionElements.selectSituacaoPago()).click()
    }

    selecionarSituacaoPendente()
    {
        cy.get(transactionElements.selectSituacaoPendente()).click()
    }

    clicarBotaoSalvar()
    {
        cy.get(transactionElements.botaoSalvar()).click()
    }

    visualizarMensagemSucesso()
    {
        cy.get(TransactionElements.mensagemSucesso()).should('contain', 'Movimentação adicionada com sucesso!')
    }

}

export default TransactionPage;