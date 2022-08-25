var lado1, lado2, lado3, x;

function Function3() {

    lado1 = document.calcular.lado1.value;
    lado1 = parseFloat(lado1);
    lado2 = document.calcular.lado2.value;
    lado2 = parseFloat(lado2);
    lado3 = document.calcular.lado3.value;
    lado3 = parseFloat(lado3);

    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){

        alert("Os 3 lados formam um triangulo!\n");
        
        if(lado1 == lado2 && lado1 == lado3){
            
            alert("Triangulo Equilatero\n");
            document.calcular.resul.value = "Triangulo Equilatero";
        }
        
        else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
            alert("Triangulo Isosceles\n");
            document.calcular.resul.value = "Triangulo Isosceles";
        }
        
        else{
            alert("Triangulo Escaleno\n");
            document.calcular.resul.value = "Triangulo Escaleno";
        }
    }
    
    else{
        alert("Os 3 lados não formam um trinagulo!\n");
    }
}