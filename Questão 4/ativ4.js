var x, valor1, valor2, resul;

function Function4(opera) {

    valor1 = document.calcular.valor1.value;
    valor1 = parseInt(valor1);
    valor2 = document.calcular.valor2.value;
    valor2 = parseFloat(valor2);

    if( opera == "somar"){
        resul = valor1 + valor2;
    }
    else if( opera == "subtrair"){
        resul = valor1 - valor2;
    }
    else if( opera == "multiplicar"){
        resul = valor1 * valor2;
    }
    else if( opera == "dividir"){
        resul = valor1 / valor2;
    }
    else{
        resul = "Operação inválida";
    }

    document.calcular.resul.value = resul;

}