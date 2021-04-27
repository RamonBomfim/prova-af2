const apostar = (qtdDados, aposta) => {
    let resultado = 0;
    let sorteio = 0;

    for (let rodadas = 1; rodadas <= qtdDados; rodadas++) {
        sorteio = Math.floor(Math.random() * 5) + 1;
        resultado += sorteio;
    };

    if (qtdDados >= 1 && qtdDados <= 5) {
        if (resultado === aposta) {
            return `Você acertou, sua aposta foi ${aposta} e o resultado foi ${resultado}.`;
        } else {
            return `Você errou, sua aposta foi ${aposta} e o resultado foi ${resultado}.`;
        }
    } else {
        return "Quantidade de dados informada é inválido."
    }   
}

console.log(apostar(3, 12));