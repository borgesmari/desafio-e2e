class TransactionElements {

    botaoCriarMovimentacao = () => { return 'a[href="/movimentacao"]' }

    inputDataMovimentacao = () => { return '#data_transacao' }

    inputDataPagamento = () => { return '#data_pagamento' }

    inputDescricao = () => { return '#descricao' }

    inputInteressado = () => { return '#interessado' }

    inputValor = () => { return '#valor' }

    selectConta = () => { return '#conta' }

    selectSituacaoPendente = () => { return '#status_pendente' }

    selectSituacaoPago = () => { return '#status_pago' }

    mensagemErro = () => { return '.alert-danger' }

    mensagemSucesso = () => { return '.alert-success' }


}

export default TransactionElements;