/* O primeiro acesso é perguntando o nome do usuário
    O saldo da conta não pode ser menor que 0 e se o valor for ficar negativo imprimir "Operação não realizada"
    Quando sacar o valor passado não pode ser igual ou menor a 0
    Extrato ficticio 
    O opção de transferência e para transferir precisa colocar o número da conta e o valor não pode ser menor ou igual a 0
    A ordem das opções é Saldo, Extrato, Saque, Depósito, Transferência e Sair
    É necessário informar a senha sempre que for fazer alguma ação
    Quando usar a opção sair se despedir do usuário*/
var saldo = 100.0;

function senha(){
    var senhaConta = 1234;
    var senhaUsuario = Number(prompt("Qual a sua senha?"));
    if(senhaUsuario === senhaConta){
        alert("Senha correta!");
    }
    else{
        alert("Senha inválida, tente novamente!");
        senha();
    }
}
function inicio() {
    var nome = prompt("Olá, qual é o seu nome?");
    alert("Seja bem vindo " + nome + " é um prazer ter você aqui!!");
    contaUsuario();
}
function erro(){
    alert("Operação inválida, tente novamente!!");
}
function contaUsuario() {
    var numeroDaConta = 123456;
    var conta = Number(prompt("Qual o número da sua conta?"));
    
    if (conta == numeroDaConta) {
        alert("Conta válida.");
        senha();
        escolher();
    } else {
        alert("Número da conta incorreto, tente novamente!!");
        contaUsuario();
    }
}

function verSaldo() {
    alert("O seu saldo atual é de R$" + saldo);
    escolher();
}

function verExtrato() {
    alert("Biqueira: R$200.0 \n Renner: R$1000.0");
    escolher()
}

function sacar() {
    var saque = parseFloat(prompt("Quanto deseja sacar?"));
    if (isNaN(saque) || saque === '' || saque <= 0) {
        alert("Operação inválida, tente novamente!!");
        sacar();
    } else {
        saldo -= saque;
        if (saldo < 0) {
            alert("Operação inválida, tente novamente!!");
            sacar();
        } else {
            senha();
            verSaldo();
        }
    }
}

function depositar() {
    var deposito = parseFloat(prompt("Quanto deseja depositar?"));
    if (isNaN(deposito) || deposito === '' || deposito <= 0) {
        alert("Operação inválida, tente novamente!!");
        depositar();
    } else {
        saldo += deposito;
        senha();
        verSaldo();
    }
}

function transferir() {
    var transferencia = Number(prompt("Quanto deseja transferir?"));
    if (isNaN(transferencia) || transferencia === '' || transferencia <= 0) {
        alert("Operação inválida, tente novamente!!");
        transferir();
    } else {
        saldo -= transferencia;
        if (saldo < 0) {
            alert("Operação inválida, tente novamente!!");
            transferir();
        } else {
            senha();
            verSaldo();
        }
    }
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}

function escolher() {
    var escolha = Number(prompt("Escolha uma opção: \n 1) Ver Saldo \n 2)Ver Extrato \n 3)Sacar \n 4)Depositar \n 5) Transferência \n 6)Sair"));
    switch (escolha) {
        case 1:
            verSaldo();
            break;
        
        case 2:
            verExtrato();
            break;
        
        case 3:
            sacar();
            break;

        case 4:
            depositar();
            break;
        
        case 5:
            transferir();
            break;

        case 6:
            sair();
            break;

        default:
            alert('Opção inválida, tente novamente!!');
            escolher();
            break;
    }
}
inicio();