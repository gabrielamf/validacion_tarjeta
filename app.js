var str = "4083952015263";

str.split("");
newStr=[];
for(var i= 0 ; i< str.length ; i++){
    newStr.push(parseInt(str[i]));
}

var arrayReverse = newStr.reverse();
arrayReverse;
//[3,6,2,5,1,0,2,5,9,3,8,0,4]
var arrayDigitos = [];

for(var i= 0 ; i < arrayReverse.length ; i++){
    if( i % 2 !== 0){
        if ((arrayReverse[i] * 2) >= 10 ){
            var firstDigit = parseInt((arrayReverse[i] * 2) / 10 );
            var secondDigit = parseInt((arrayReverse[i] * 2) % 10);
            var sum = firstDigit + secondDigit;
            arrayDigitos.push(sum);
        }else{
            arrayDigitos.push(arrayReverse[i]);
        }
    }else{
        arrayDigitos.push(arrayReverse[i]);
    }
}

arrayDigitos;
