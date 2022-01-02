function carConteudo() {
    document.getElementById("Conteudo").style.display = "";
    document.getElementById("video").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("SB").style.display = "none";
}

function abrir() {
    document.getElementById("video").style.display = "";
    document.getElementById("Conteudo").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("SB").style.display = "none";
}

function nada() {
    document.getElementById("Conteudo").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("SB").style.display = "";

}

function fecha() {
    document.getElementById("text").style.display = "";
    document.getElementById("Conteudo").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("SB").style.display = "none";
}