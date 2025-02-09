"use strict";
function Somar(numeroA, numeroB, numeroC) {
    const somando = numeroC * numeroB + numeroA;
    return somando;
}
let numeroA = 146;
let numeroB = 53;
let numeroC = 28;
const resultadoSoma = Somar(numeroA, numeroB, numeroC);
console.log(`O resultado da soma é ${resultadoSoma}.`);
function Saudacao(diz, nome) {
    const saudacao = diz;
    const seuNome = nome;
    return seuNome + saudacao;
}
let seuNome = "Guilherme";
let saudacao = "Olá :)";
const dizSaudacao = Saudacao(seuNome, saudacao);
console.log(`\n ${seuNome} diz ${saudacao}`);
