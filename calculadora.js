function calcularSaldoERank(vitorias, derrotas) {
    // Calcular saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determinar nível baseado nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Exibir mensagem
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função
calcularSaldoERank(25, 10); // Exemplo com 25 vitórias e 10 derrotas
