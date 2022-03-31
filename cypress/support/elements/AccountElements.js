class AccountElements {

    menuContas = () => { return '.dropdown-toggle' }

    botaoAdicionar = () => { return 'a[href="/addConta"]' }

    botaoListar = () => { return 'a[href="/contas"]' }

    inputNome = () => { return '#nome' }

    botaoSalvar = () => { return '.btn-primary' }

    mensagemSucesso = () => { return '.alert-success' }

    mensagemErro = () => { return '.alert-danger' }

    OpcaoRemoverContaMovimentacoes = () => { return 'a[href="/removerConta?id=1128205"]' }

    tabelaContas = () => { return '#tabelaContas' }

    opcaoRemoverConta = () => { return '.glyphicon-remove-circle' }

}

export default AccountElements;