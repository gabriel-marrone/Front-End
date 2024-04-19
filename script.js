/*
var nome = "Joana"
let letnome = "Joana"
const constnome = "Joana"

{
    console.log(nome)
    console.log(letnome)
    console.log(constnome)

    var varnomeinside = "Pedro Jewski"
    let letnomeinside = "Pedro Jetski"
    const constnomeinside = "Pedro Magos"
}

console.log(varnomeinside)

let xOut = 0
var yOut = 0

function sum(a, b){
    let x = a + b;
    var y = x;
    xOut = x;
    yOut = x;
}

sum(1,1)

//console.log(x)
//console.log(y)
console.log(xOut)
console.log(yOut)

console.log("---------------------------")

for(let i = 0; i < 5; i++){
    console.log(i)
}
//console.log(i) -> erro

console.log("---------------------------")

for(var x = 0; x < 5; x++){
    console.log(x)
}console.log(x)

//x vai até 5 por conta que var não é restringido enquanto o i não vai até 5 por conta que o let é.
*/
/*
var VariavelDespassagem = 3
var VariavelDespassagemJR = 6
var xOut = 0

function somamaneira(){
    xOut = VariavelDespassagem + VariavelDespassagemJR
}

somamaneira()
console.log(xOut)
*/
/*
function ChamadentroImprimefora(){
    var x
    x = 450

    function soma(){
        var x1 = x
        console.log(x1)

        function subtracao(){
            console.log(x1 - x)
        }

        subtracao()
    }

    soma()
}

ChamadentroImprimefora()
*/
/*
const arrowFunction = (a, b, c) => {
    return a + b + c
}

console.log(arrowFunction(1, 1, 6))
*/
/*
const SomaDoida = (a, b, c) => {
    return a + b + c
}

const SubtracaoBiruta = (a, b, c) => {
    return a - b - c
}

const DivisaoDoDjanho = (a, b, c) => {
    return a / b / c
}

const MultiplacacaoBagual = (a, b, c) => {
    return a * b * c
}

const ModInaiaVeia = (a, b, c) => {
    return a % b % c
}

console.log(SomaDoida(3, 3, 6))
console.log(SubtracaoBiruta(6, 3, 2))
console.log(DivisaoDoDjanho(36, 6, 2))
console.log(MultiplacacaoBagual(1, 3, 5))
console.log(ModInaiaVeia(36, 6, 2))
*/
/*
let array1 = [10, 20, 30, 40, 50, 100]

function ImprimeNumero(array1){
    console.log(array1)
}

array1.forEach((ImprimeNumero) => {
    console.log(ImprimeNumero)
});
*/
/*
let listanomes = ["carlos", "cleber", "joao"]

listanomes.forEach((nomeatual, indice) => {
    console.log(`nome: ${nomeatual} esta na posicao ${indice}`)
})
*/
/*
let salarioAnual = 0

let MESES = [1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400, 1400]

MESES.forEach((salarioAtual)=>{
    salarioAnual += salarioAtual
})

console.log(salarioAnual)
*/

let pessoa = {
        nome: "Gabriel",
        idade: 18,
        endereco: {
            rua: "Rua Ibitinga",
            numero: 579,
            bairro: "KLP"
        },
        academico: {
            curso: "Engenharia de Software",
            periodo: 2,
            turno: "Noturno"
        }
}

function imprimepessoa(){

}