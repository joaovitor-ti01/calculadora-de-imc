
function calcularImc(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    
    let imc = peso/(altura*altura)

    document.getElementById("resultado").innerText = imc
}