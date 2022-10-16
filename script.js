
let preco_prato;
let preco_bebida;
let preco_sobremesa;

function escolher(grupo, item) {
    const elementos = document.querySelectorAll(".item");
    const icone = document.querySelectorAll(".icone");
    for (let i = 5 * (grupo - 1); i < 5 * grupo; i++) {
        elementos[i].classList.remove("item-borda");
        icone[i].classList.add("escondido");
    }

    elementos[5 * grupo + item - 6].classList.add("item-borda");
    icone[5 * grupo + item - 6].classList.remove("escondido");

    const html = elementos[5 * grupo + item - 6].innerHTML;
    const loc = html.search('<h6>');
    if (grupo === 1) {
        preco_prato = Number(`${html.substring(loc + 7, loc + 9)}.${html.substring(loc + 10, loc + 12)}`);
    } else if (grupo === 2) {
        preco_bebida = Number(`${html.substring(loc + 7, loc + 9)}.${html.substring(loc + 10, loc + 12)}`);
    } else {
        preco_sobremesa = Number(`${html.substring(loc + 7, loc + 9)}.${html.substring(loc + 10, loc + 12)}`);
    }

    if (preco_prato && preco_bebida && preco_sobremesa) {
        const novoele = document.querySelector(".text-rodape");
        novoele.classList.remove("text-rodape");
        novoele.classList.add("rodape-green-bg")

        novoele.innerHTML = "<p>Fechar pedido!</p>";
    }
    /*
    if (!total_grupo.includes(grupo)) {
        total_grupo.push(grupo);
        if (total_grupo.length === 3) {
            const rodape = document.querySelectorAll(".rodape div");
            rodape.classList.add("rodape-green-bg")
        }

    }
    */
}

