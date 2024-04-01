function media(){
    let nota1 = parseFloat(document.querySelector("#nota1").value)
    let nota2 = parseFloat(document.querySelector("#nota2").value)
    let nota3 = parseFloat(document.querySelector("#nota3").value)

    let resultado = (nota1+nota2+nota3)/3;
    let texto = document.querySelector("#ola");
    texto.innerHTML = resultado;
}