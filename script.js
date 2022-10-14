function escolher(grupo, item) {
    const elementos = document.querySelectorAll(".item");
    const icone = document.querySelectorAll(".icone");
    for (let i = 5 * (grupo - 1); i < 5 * grupo; i++) {
        elementos[i].classList.remove("item-borda");
        icone[i].classList.add("escondido");
    }

    elementos[5 * grupo + item - 6].classList.add("item-borda");
    icone[5 * grupo + item - 6].classList.remove("escondido");
}

