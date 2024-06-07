document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btnSim = document.getElementById("sim");
    var span = document.getElementsByClassName("close")[0];

    btnSim.onclick = function() {
        var modalContent = document.querySelector(".modal-content");
        var img = document.createElement("img");
        img.src = "imagens/Certificado de Namoro.png";
        img.alt = "Certificado de Namoro";
        // Remove a imagem anterior se houver
        if (modalContent.querySelector("img")) {
            modalContent.querySelector("img").remove();
        }
        modalContent.appendChild(img);
        modal.style.display = "flex"; // Abre o modal
    }

    span.onclick = function() {
        modal.style.display = "none"; // Fecha o modal
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Fecha o modal ao clicar fora dele
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
