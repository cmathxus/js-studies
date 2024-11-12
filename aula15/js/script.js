const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `
<p> Raiz quadrada : ${numero ** 0.5} <br/>
${numero} é inteiro: ${Number.isInteger(numero)} <br/>
É NaN: ${Number.isNaN(numero)} <br/>
Arredondando para baixo: ${Math.floor(numero)}<br/>
Arredondando para cima: ${Math.ceil(numero)}<br/>
Com duas casas decimais: ${numero.toFixed(2)}<br/>
</p>`