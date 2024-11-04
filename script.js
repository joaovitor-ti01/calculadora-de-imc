
function calcularImc(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    
    if (peso==0 || altura==0){document.getElementById("resultado").innerText = "Coloque um valor real"}
else{
    let imc = peso/(altura*altura)
    
    let resultado 
    if (imc<17){resultado='Muito abaixo do peso'}
    
    else if (imc>=17 && imc<18.5){resultado="Abaixo do peso"}
    
    else if (imc>=18,5 && imc<24.99){resultado=" Com o peso normal"}
    
    else if (imc>=25 && imc<29.99){resultado="Acima do peso"}
    
    else if (imc>=30 && imc<34.99){resultado="Com Obesidade grau I"}
    
    else if (imc>=35 && imc<39.99){resultado="Com Obesidade grau II (severa)"}
    
    else if (imc>=40){resultado="Com Obesidade grau III (mórbida)"}
    
    
    document.getElementById("resultado").innerText = `Você está ${resultado}`
}
}

// Abaixo de 17	Muito abaixo do peso
// Entre 17 e 18,49	Abaixo do peso
// Entre 18,5 e 24,99	Peso normal
// Entre 25 e 29,99	Acima do peso
// Entre 30 e 34,99	Obesidade I
// Entre 35 e 39,99	Obesidade II (severa)
// Acima de 40	Obesidade III (mórbida)