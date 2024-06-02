function fuja(){
    var botaoNao = document.getElementById("nao");

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var margemLimite = 50; // Margem de segurança para manter o botão visível

    var minX = margemLimite;
    var minY = margemLimite;
    var maxX = larguraJanela - botaoNao.offsetWidth - margemLimite;
    var maxY = alturaJanela - botaoNao.offsetHeight - margemLimite;

    // Garante que a coordenada X aleatória esteja dentro dos limites
    var aleatorioX = Math.max(minX, Math.min(maxX, Math.floor(Math.random() * (maxX - minX + 1)) + minX));
    var aleatorioY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}
