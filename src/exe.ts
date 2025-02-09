function Somar(numeroA: number, numeroB: number, numeroC: number): number {
    const somando = numeroC * numeroB + numeroA;
    return somando;
}

let numeroA: number = 146;
let numeroB: number = 53;
let numeroC: number = 28;

const resultadoSoma = Somar(numeroA, numeroB, numeroC);
console.log(`O resultado da soma é ${resultadoSoma}.`)

function Saudacao(diz: string, nome: string): string {
    const saudacao = diz;
    const seuNome = nome;
    return seuNome + saudacao;
}

let seuNome: string = "Guilherme"
let saudacao: string = "Olá :)"

const dizSaudacao = Saudacao(seuNome, saudacao);
console.log(`\n ${seuNome} diz ${saudacao}`);