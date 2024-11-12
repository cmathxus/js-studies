function meuEscopo () {
const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')

    function calcularIMC (evento) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3', 'Dados incorretos'];
        evento.preventDefault();
        const peso = Number(document.querySelector('.peso'))
        const altura = Number(document.querySelector('.altura'))
        console.log(peso)
        console.log(typeof altura)
        const resultadoIMC = peso / (altura * altura)
        let imc

        if (resultadoIMC < 18.5) imc = nivel[0]
        else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) imc = nivel[1]
        else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) imc = nivel[2]
        else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) imc = nivel[3]
        else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) imc = nivel[4]
        else if (resultadoIMC >= 40) imc = nivel[5]

        resultado.innerHTML += `<p> ${imc}</p>`
        console.log(imc)

    }
    form.addEventListener('submit', calcularIMC);
}
meuEscopo();