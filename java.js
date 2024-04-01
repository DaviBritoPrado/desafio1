function media(){
    let nota1 = parseFloat(document.querySelector("#nota1").value)
    let nota2 = parseFloat(document.querySelector("#nota2").value)
    let nota3 = parseFloat(document.querySelector("#nota3").value)
    if(isNaN(nota1) || isNaN(nota2)  || isNaN(nota3)){
        let texto = document.querySelector("#ola");
        texto.innerHTML = "Digite um numero";
    }else if(nota1 < 0 || nota2 < 0 || nota2 < 0){
        let texto = document.querySelector("#ola");
        texto.innerHTML = "todos os inputs devem possuir um numero inteiro";
    }
    
    else{
        let resultado = (nota1+nota2+nota3)/3;
        let texto = document.querySelector("#ola");
        texto.innerHTML = resultado.toFixed(2)
    }

}
