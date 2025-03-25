function verificarPar(numero){
    if(numero % 2 === 0) {
        console.log('par');
    }else{
        console.log('impar');
    }
}
    
verificarPar(4);
verificarPar(7);


function calcular(numero1, numero2) {
    console.log ("soma , " + (numero1 + numero2));
    console.log ("subtração , " + (numero1 - numero2));
    console.log ("multiplicação , " + (numero1 * numero2));
    console.log ("divisão , " + (numero1 / numero2));
}

calcular(1, 2);

for (let i = 10; i > 0; i--)
    console.log("número" + i)

    
    let original = "leugiM";
    let reversed = original.split("").reverse().join("");
    console.log(reversed); 

    var str = "Miguel";
    var n = str.length;
    console.log(n);