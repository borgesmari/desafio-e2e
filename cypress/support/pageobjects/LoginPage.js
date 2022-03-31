/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    acessarSistema() 
    {
        cy.visit(url)
    }

    informarEmail(email)
    {
        cy.get(loginElements.inputEmail()).type(email)
    }

    informarSenha(senha)
    {
        cy.get(loginElements.inputSenha()).type(senha)
    }

    clicarBotaoEntrar()
    {
        cy.get(loginElements.botaoEntrar()).click()
    }

    visualizarMensagemSucessoLogin()
    {
        cy.get(loginElements.mensagemSucesso()).should('contain', 'Bem vindo')
    }
    

    visualizarMensagemErroLogin()
    {
        cy.get(loginElements.mensagemErro()).should('contain', 'Problemas com o login do usuário')
    }

    realizarLoginSistema()
    {
        cy.visit(url)
        cy.get(loginElements.inputEmail()).type('marianagb.borges@gmail.com')
        cy.get(loginElements.inputSenha()).type('Hpteste@21')
        cy.get(loginElements.botaoEntrar()).click()
    }

}

export default LoginPage;