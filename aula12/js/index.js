const nome = prompt ('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(2)}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA A no seu nome? ${nome.indexOf("a")}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA A no seu nome? ${nome.lastIndexOf("a")}<br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)}<br />`;
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;