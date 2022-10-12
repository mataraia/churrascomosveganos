
let inputAdultos = document.getElementById("adultos");
let inputVeganos = document.getElementById("veganos");
let inputCriancas = document.getElementById("criancas");
let inputCriancasVeganas = document.getElementById("criancasveganas");
let inputDuracao = document.getElementById("duracao");
let vv = document.getElementById("vvpd");
let resultado = document.getElementById("resultado");

function calcular(){

    console.log("Calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let criancasveganas = inputCriancasVeganas.value;
    let duracao = inputDuracao.value;
    let veganos = inputVeganos.value;


    let TotalCarne = carnePP(duracao) * (adultos-veganos) + (carnePP(duracao)/2 * (criancas-criancasveganas));
    let TotalVeganos = veganosPP(duracao) * (veganos) + (veganosPP(duracao)/2 * criancasveganas);
    let TotalCerveja = cervejaPP(duracao) * adultos;
    let TotalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    // console.log(TotalCarne)
    // console.log(TotalCerveja)
    // console.log(TotalBebida)
    vv.style.color = "white"
    vv.style.backgroundColor = "navy"
    vv.style.borderRadius = "5px"
    vv.style.textAlign ="center"
    vv.style.marginTop = "10px"


    vv.innerHTML = "Você vai precisar de:"
    resultado.innerHTML = `<p>${TotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${TotalVeganos/1000} Kg de Carne Vegana</p>`
    resultado.innerHTML += `<p>${Math.ceil(TotalCerveja/355)} Latas de Cerveja</p>`   
    resultado.innerHTML += `<p>${Math.ceil(TotalBebida/2000)} Pet's de 2 Litros de Bebidas (água ou refrigerante)</p>`
}



function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }
    else{
        return 450;
    }
}

function cervejaPP(duracao){
    if (duracao >= 5){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 5){
        return 1500;
    }
    else{
        return 1000;
    }
}

function veganosPP(duracao){
    if (duracao >= 5){
        return 700;
    }
    else{
        return 500;
    }
}

// function STV(){
//     let vegan = document.getElementById("veganos")
//     if(vegan.value => 1)
//     {return veganosPP(duraca)
//     }
//     else {
//         return "Não tem vegano"    
//     }
// }