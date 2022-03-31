// <reference types="Cypress" />

import AccountElements from '../elements/AccountElements'
const accountElements = new AccountElements

class AccountPage {

    clicarMenuContas()
    {
        cy.get(accountElements.menuContas()).click()
    }

    clicarBotaoAdicionar()
    {
        cy.get(accountElements.botaoAdicionar()).click()
    }

    informarNome(nome)
    {
        cy.get(accountElements.inputNome()).type(nome)
    }

    informarNomeExistente()
    {
        cy.get(accountElements.inputNome()).type('Teste Souza')
    }

    clicarBotaoSalvar()
    {
        cy.get(accountElements.botaoSalvar()).click()
    }

    RemoverContaComMovimentacoes()
    {
        cy.get(accountElements.OpcaoRemoverContaMovimentacoes()).click()
    }

    RemoverContaComSucesso()
    {
        cy.get(accountElements.tabelaContas()).should('contain', 'Teste Souza').opcaoRemoverConta().click();
    }

    visualizarMensagemSucesso()
    {
        cy.get(accountElements.mensagemSucesso()).should('contain', 'Conta adicionada com sucesso!')
    }

    visualizarMensagemErroContaDuplicada()
    {
        cy.get(accountElements.mensagemErro()).should('contain', 'Já existe uma conta com esse nome!')
    }

    visualizarMensagemErroContaVazia()
    {
        cy.get(accountElements.mensagemErro()).should('contain', 'Informe o nome da conta')
    }

    visualizarMensagemErroExclusao()
    {
        cy.get(accountElements.mensagemErro()).should('contain', 'Conta em uso na movimentações')
    }

    visualizarMensagemSucessoExclusao()
    {
        cy.get(accountElements.mensagemSucesso()).should('contain', 'Conta removida com sucesso!')
    }

    clicarBotaoListar()
    {
        cy.get(accountElements.botaoListar()).click()
    }
}

export default AccountPage;