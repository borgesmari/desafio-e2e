/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

And("informo {} correto", (email) => {
    loginPage.informarEmail(email);
})

And("informo {} correta", (senha) => {
    loginPage.informarSenha(senha);
})

And("informo {} incorreta", (senha) => {
    loginPage.informarSenha(senha);
})

Given("acesso o sistema Seu Barriga", () => {
    loginPage.acessarSistema();
})


When("clico no botão entrar", () => {
    loginPage.clicarBotaoEntrar();
})

Then("login deve ser realizado com sucesso no sistema", () => {
    loginPage.visualizarMensagemSucessoLogin();
})

Then("deve ser apresentada a mensagem de erro para o usuário", () => {
    loginPage.visualizarMensagemErroLogin();
})
