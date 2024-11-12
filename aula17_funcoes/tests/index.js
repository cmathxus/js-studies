function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(Number(prompt("Insira um valor")), Number(prompt("Insira outro valor")));

console.log(resultado);

const titulo = document.getElementById("titulo-pagina");

titulo.innerHTML = `<p>Olá seu resultado é ${resultado}</p>`