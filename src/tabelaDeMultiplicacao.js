// Tabela multiplicação estática.
function tabelaMultiplicacao() { 
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for (let j = 0; j <= 10; j++) {
            x[i][j] = i * j;
        }
    }
    console.table(x);
}
tabelaMultiplicacao()


// Tabela multiplicação dinâmica.
function tabelaMultiplicacaoDinamica(n) {
    let x = [];
    for (let i = 0; i <= n; i++) {
        x[i] = [];
        for (let j = 0; j <= n; j++) {
            x[i][j] = i * j;
        }
    }
    console.table(x);
}
tabelaMultiplicacaoDinamica(5)