var qtd, x, valor;

function Function2() {

    qtd = document.calcular.qt.value;
    qtd = parseInt(qtd);
    valor = document.calcular.valor.value;
    valor = parseFloat(valor);

    x = qtd * valor;
    
    if(qtd>100 && qt <= 200){
        x = x * 1.25;
    }
    else if(qtd>200){
        x = x * 1.50;
    }

    alert("Sua conta é: " +x);
    
}
