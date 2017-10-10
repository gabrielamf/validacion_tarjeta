## VALIDACIÓN TARJETA

###### Se presenta un programa que se utiliza para *indicar si un número de tarjeta es válido o no*, utilizando el **ALGORITMO DE LUHN**.  


 *  **Estructura**  
  El código presenta una función:   

  **isValidCard**

    _input_ = 4083952015263  
    _output_ = *"Su tarjeta es válida"*

***
### PSEUDOCÓDIGO  

    function isValidCard (numero_a_validar){  

      Si (numero_a_validar = vacío){
        alert("Escriba el número de su tarjeta porfavor")
      }

    numero_a_validar.split;
    numeros_invertidos = numero_a_validar.reverse;

    array_digitos = 0;

      para ( i = 0 ; i < numeros_invertidos.longitud ; i++){
        si( (i + 1) es numero_par){

          si ((numeros_invertidos[i] * 2) >= 10){
            primer_digito = parseInt((numeros_invertidos[i] * 2) / 10 );
            segundo_digito = parseInt((numeros_invertidos[i] * 2) % 10);

            suma_digitos = primer_digito + segundo_digito;
            arrayDigitos += suma_digitos;

          }sino{
            array_digitos += (numeros_invertidos[i] * 2);
          }

        }sino{
          arrayDigitos.push(numbersInverted[i]);
        }
      }

      suma_elementos_arrayDigitos = 0;

      para (var i = 0; i < arrayDigitos.longitud ; i ++){
      suma_elementos_arrayDigitos +=  arrayDigitos[i];
      }

      imprimir(suma_elementos_arrayDigitos % 10 === 0 ? "Su tarjeta es válida." sino "Su tarjeta es inválida.");
    }

    numero_a_validar= prompt("Ingrese su número de tarjeta para comprobar si es válida o no.");

    isValidCard(numero_a_validar)
***
