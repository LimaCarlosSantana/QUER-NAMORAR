function fuja() {
    var botaoNao = document.getElementById("nao");
    var painelBranco = document.querySelector(".painel");

    var painelRect = painelBranco.getBoundingClientRect(); // Obtém as dimensões e a posição do painel

    var minX = painelRect.left;
    var minY = painelRect.top;
    var maxX = painelRect.right - botaoNao.offsetWidth;
    var maxY = painelRect.bottom - botaoNao.offsetHeight;

    var aleatorioX, aleatorioY;

    // Recalcula a posição aleatória até que o botão esteja dentro dos limites do painel branco
    do {
        aleatorioX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        aleatorioY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    } while (aleatorioX < minX || aleatorioY < minY || aleatorioX > maxX || aleatorioY > maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}
