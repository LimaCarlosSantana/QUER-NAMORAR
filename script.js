document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btnSim = document.getElementById("sim");
    var span = document.getElementsByClassName("close")[0];

    btnSim.onclick = function() {
        modal.style.display = "flex"; // Usando flex para centralizar
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function fuja() {
    var botaoNao = document.getElementById("nao");
    var painelBranco = document.querySelector(".painel");

    var painelRect = painelBranco.getBoundingClientRect();

    var minX = painelRect.left;
    var minY = painelRect.top;
    var maxX = painelRect.right - botaoNao.offsetWidth;
    var maxY = painelRect.bottom - botaoNao.offsetHeight;

    var aleatorioX, aleatorioY;

    do {
        aleatorioX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        aleatorioY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    } while (aleatorioX < minX || aleatorioY < minY || aleatorioX > maxX || aleatorioY > maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}
