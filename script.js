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

{
for (let i = 10; i > 0; i--)
    console.log("número" + i)

    
    let original = "leugiM";
    let reversed = original.split("").reverse().join("");
    console.log(reversed);
} 

{
    var str = "Miguel";
    var n = str.length;
    console.log(n);
}

var carro = {
    marca: "Mclaren",
    modelo: "P1 GTR",
    ano: 2015
  };
  console.log(carro.marca);
  console.log(carro.modelo);
  console.log(carro.ano);


  function mensagemPersonalizada(nome, mensagem="Olá!") {
  console.log (mensagem, nome);
}

mensagemPersonalizada("Miguel") ;
mensagemPersonalizada("Natalia", "Você é muito boa");


function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(media(7, 8, 9));


for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(`${i}: Múltiplo de 3`);
    } else {
        console.log(`${i}: Não múltiplo de 3`);
    }
}


function verificarPalindromo(palavra) {
    let invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}


console.log(verificarPalindromo("hello")); 

console.log(verificarPalindromo("arara")); 


function verificarSinal(numero) {
    if (numero > 0) {
      console.log("Positivo");
    } else if (numero < 0) {
      console.log("Negativo");
    } else {
      console.log("Zero");
    }
  }

verificarSinal(2)
verificarSinal(0)
verificarSinal(-2)

