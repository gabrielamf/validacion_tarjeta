function isValidCard (str){
  //validación para que no entre un String vacío
  if(str === ""){
        alert("Escriba el número de su tarjeta porfavor");
  }

  //Convertimos el str que recibimos del usuario en array
  str.split("");

  //Por medio de un for pasaremos todos los elementos de tipo string a tipo number
  arrayNumber=[];
  for(var i= 0 ; i< str.length ; i++){
    arrayNumber.push(parseInt(str[i]));
  }

  // Según el algoritmo de Luhn, nos pide que los números estén en orden invertido, entonces aplicamos reverse
  var numbersInverted = arrayNumber.reverse();

  //Según el algoritmo todos los números que ocupen posiciones pares se les multiplicará por 2.
  //y si ese número es mayor que 10, se sumarán sus digitos y sino solo se mostrará el digito

  //Sabemos que el indice de un array empieza desde cero, pero el algoritmo cuenta desde
  //la posición 1, entonces cuando iteremos los elementos del array, le sumaremos 1, para
  //que el for lo cuente como posición 1. Todos estos nuevos números los ire agregando
  //uno por uno a un nuevo array que se llamará arraydigitos.

  var arrayDigitos = [];
    for(var i = 0 ; i < numbersInverted.length ; i++){
        if( (i + 1) % 2 === 0){
            if ((numbersInverted[i] * 2) >= 10 ){
              var firstDigit = parseInt((numbersInverted[i] * 2) / 10 );
              var secondDigit = parseInt((numbersInverted[i] * 2) % 10);
              var sum = firstDigit + secondDigit;
              arrayDigitos.push(sum);
            }else{
              arrayDigitos.push(numbersInverted[i] * 2);
            }
        }else{
          arrayDigitos.push(numbersInverted[i]);
        }
    }

  //Ahora vamos a sumar los digitos de este nuevo arrayDigitos
  var sum = 0;
  for (var i = 0; i < arrayDigitos.length ; i ++){
    sum +=  arrayDigitos[i];
  }

  //Si la suma total de estos digitos modulo de 10 es cero, la tarjeta es válida y sino pues no lo es
  document.write(sum % 10 === 0 ? "Su tarjeta es válida." : "Su tarjeta es inválida.");
}

var str = prompt("Ingrese su número de tarjeta para comprobar si es válida o no.");
isValidCard(str)
