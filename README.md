# desafio-e2e
<h2>Tecnologias utilizadas</h2>

- cypress com cucumber para a escrita dos testes em BDD

- utilizei como referência para um projeto que já estava estudando: https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766

- A parte de automação de API está sendo iniciada

- Não consegui automatizar todos os cenários a tempo, mas identifique-os antes de iniciar o projeto:

<h2>Cenários desafio E2E:</h2>

Login

1.	Validar login com e-mail e senha válidos
2.	Validar login com e-mail inválido (mensagem genérica)
3.	Validar login com senha inválida (mensagem genérica)


Novo usuário

1.	Validar cadastro de um novo usuário com sucesso
2.	Validar cadastro de um novo usuário com e-mail inválido

Home
1.	Validar exibição da conta
2.	Validar exclusão da conta
3.	Validar edição da conta
4.	Validar clique no logo “Seu barriga”

Contas
1.	Adicionar conta válida
2.	Adicionar conta repetida
3.	Adicionar conta vazia
4.	Remover uma conta sem movimentações
5.	Tentar remover uma conta com movimentações
6.	Editar uma conta

Criar movimentação
1.	Criar movimentação de receita – situação Pago
2.	Criar movimentação de receita – situação Pendente
3.	Criar movimentação de despesa - situação Pago
4.	Criar movimentação de despesa – situação Pendente
5.	Criar movimentação de receita – situação Pago – Data inválida
6.	Criar movimentação de receita – situação Pendente – Valor inválido
7.	Criar movimentação de despesa - situação Pago – Data inválida
8.	Criar movimentação de despesa – situação Pendente – Valor inválido

Resumo mensal:
1.	Validar resumo mensal ano futuro
2.	Validar resumo mensal mês/ano atual
3.	Validar resumo mensal ano passado
4.	Validar resumo mensal Janeiro/ano atual
5.	Validar resumo mensal Julho/ano atual
6.	Validar resumo mensal Dezembro/ano atual
7.	Validar exclusão do resumo mensal

