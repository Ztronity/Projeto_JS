//dobro
function dobro(){
    var num1 = prompt("digite um numero");
    var num2 = (num1 * 2);
    alert("O Dobro do seu numero é: " + num2);
}

//Média
function nota(){
    var nota1 = Number(prompt("Digite sua primeira nota: "));
    var nota2 = Number(prompt("Digite sua segunda nota: "));
    const media = ((nota1 + nota2)/2);
    alert("Sua nota é: " + media);
}

//tempo de viagem
function viagem(){
    var viagem_hora = Number(prompt("digite quantas horas durou sua viagem: "));
    const viagem_dias = (viagem_hora/24);
    alert(`Sua viagem durou um total ${viagem_dias} dias`);
}

//tempo de vida
function vida(){
    var id_idade = Number(prompt("Quantos anos você tem: "));
    const id_horas = (id_idade * 8640);
    alert(`Você viveu por ${id_horas} horas`);
}

//restaurante
function restaurante(){
    let valorconta = Number(prompt("Qual o valor da conta: "));
    let taxa = 10;
    let valortotal;
    alert("O valor da conta: " + valorconta + taxa);
}

//IMC
function imc(){
    var peso = Number(prompt("Coloque o seu peso: "));
    var altura = Number(prompt("Coloque a sua altura: "));

    function imc(p, a){
        var imc = (p/ (a*a));
        return imc.toFixed(2);
    }
    var imc2 = imc(peso, altura);

    alert("Seu imc é: " + imc2);

    if(imc2 <= 20,7){
        alert("abaixo do peso");
    }else if(imc2 <= 26,4){
        alert("Peso ideal");
    }else if(imc2 <= 27,8){
        alert("Um pouco acima do peso");
    }else if(imc2 <= 31,1){
        alert("Acima do peso");
    }else{
        alert("obesidade")
    }
}