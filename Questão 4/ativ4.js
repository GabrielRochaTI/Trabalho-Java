function calc(event) {
    event.preventDefault();

    let resultado = null;

    let val1 = Number(document.getElementById('valor1').value);
    let val2 = Number(document.getElementById('valor2').value);
    let operacao = document.getElementById('opera').value;

    switch (operacao) {
        case '+':
            resultado = val1 + val2;
            break;

        case '-':
            resultado = val1 - val2;
            break;

        case '*':
            resultado = val1 * val2;
            break;

        case '/':
            resultado = val1 / val2;
            break;
    }

    console.log(resultado);
    document.querySelector('#resul').innerHTML = `Resultado: ${resultado}`;
}

let formulario = document.querySelector("#calcular");

formulario.addEventListener('submit', calc);
