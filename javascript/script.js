function calcular(operador){
    numero1 =parseInt (document.getElementById ('numero1').value)
    numero2 =parseInt (document.getElementById ('numero2').value)
   
   

    if (operador == "+"){

        resultado = numero1 +   numero2


    }
            else if (operador == "-"){
                resultado = numero1 -   numero2
            }
            else if (operador == "*"){
                resultado = numero1 *   numero2
            }
            else if (operador == "/"){
                resultado = numero1 /   numero2
            }



    document.getElementById('resultado').innerHTML = resultado   
}




