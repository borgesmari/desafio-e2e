/* global Given, Then, When */

import TransactionPage from '../pageobjects/TransactionPage'
import LoginPage from '../pageobjects/LoginPage';
const transactionPage = new TransactionPage
const loginPage = new LoginPage

And("clico em Criar movimentação", () => {
    transactionPage.clicarMenuCriarMovimentacao();
})

And("seleciono tipo de movimentacao receita", () => {
    transactionPage.selecionarTipoMovimentacaoReceita();
})

And("seleciono tipo de movimentacao despesa", () => {
    transactionPage.selecionarTipoMovimentacaoDespesa();
})

And("informo a {} válida", (data_movimentacao) => {
    transactionPage.informarDataMovimentacao(data_movimentacao);
})

And("informo a {} válida", (data_pagamento) => {
    transactionPage.informarDataPagamento(data_pagamento);
})

And("informo a descrição", () => {
    transactionPage.informarDescricao();
})

And("informo o interessado", () => {
    transactionPage.informarInteressado();
})

And("informo o {} válido", (valor) => {
    transactionPage.informarValor(valor);
})

And("seleciono a conta", () => {
    transactionPage.selecionarConta();
})

And("seleciono a situação", () => {
    transactionPage.selecionarSituacaoPago();
})

Given("Realizo login com sucesso", (email, senha) => {
    loginPage.realizarLoginSistema();
})

When("clico no botão Salvar", () => {
    transactionPage.clicarBotaoSalvar();
})

Then("a movimentação deve ser adicionada com sucesso", () => {
    transactionPage.visualizarMensagemSucesso();
})

