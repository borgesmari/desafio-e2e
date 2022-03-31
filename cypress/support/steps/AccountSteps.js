/* global Given, Then, When */

import AccountPage from '../pageobjects/AccountPage'
import LoginPage from '../pageobjects/LoginPage';
const accountPage = new AccountPage
const loginPage = new LoginPage

And("clico no menu Contas", () => {
    accountPage.clicarMenuContas();
})

And("clico no botão Adicionar", () => {
    accountPage.clicarBotaoAdicionar();
})

And("clico no botão Listar", () => {
    accountPage.clicarBotaoListar();
})

And("informo {} válido", (nome) => {
    accountPage.informarNome(nome);
})

And("informo nome já existente", () => {
    accountPage.informarNomeExistente();
})

Given("Realizo login com sucesso", (email, senha) => {
    loginPage.realizarLoginSistema();
})

When("clico no botão salvar", () => {
    accountPage.clicarBotaoSalvar();
})

When("clicar na opção Remover de uma conta em uso", () => {
    accountPage.RemoverContaComMovimentacoes();
})

When("clicar na opção Remover de uma conta que não possui movimentações", () => {
    accountPage.RemoverContaComSucesso();
})

Then("a nova conta deve ser criada com sucesso", () => {
    accountPage.visualizarMensagemSucesso();
})

Then("o sistema não deve permitir a inclusão de uma conta repetida", () => {
    accountPage.visualizarMensagemErroContaDuplicada();
})

Then("o sistema não deve permitir a inclusão de uma conta vazia", () => {
    accountPage.visualizarMensagemErroContaVazia();
})

Then("o sistema não deve permitir a exclusão de uma conta que possui movimentações", () => {
    accountPage.visualizarMensagemErroExclusao();
})

Then("o sistema deve permitir a exclusão de uma conta que possui movimentações", () => {
    accountPage.visualizarMensagemSucessoExclusao();
})