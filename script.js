
let preco_prato;
let nome_prato;
let preco_bebida;
let nome_bebida;
let preco_sobremesa;
let nome_sobremesa;
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
    const loc_nome = html.search('<h5>');
    const loc_nome1 = html.search('</h5>');
    if (grupo === 1) {
        preco_prato = Number(`${html.substring(loc + 7, loc + 9)}.${html.substring(loc + 10, loc + 12)}`);
        nome_prato = html.substring(loc_nome + 4, loc_nome1)
    } else if (grupo === 2) {
        preco_bebida = Number(`${html.substring(loc + 7, loc + 8)}.${html.substring(loc + 9, loc + 11)}`);
        nome_bebida = html.substring(loc_nome + 4, loc_nome1)
    } else {
        preco_sobremesa = Number(`${html.substring(loc + 7, loc + 9)}.${html.substring(loc + 10, loc + 12)}`);
        nome_sobremesa = html.substring(loc_nome + 4, loc_nome1)
    }

    if (preco_prato && preco_bebida && preco_sobremesa) {
        const novoele = document.querySelector(".botao-pedido");
        novoele.classList.remove("text-rodape");
        novoele.classList.add("rodape-green-bg")

        nome_prato.replace(' ', '%20')
        nome_bebida.replace(' ', '%20')
        nome_prato.replace(' ', '%20')

        const preco_total = preco_prato + preco_bebida + preco_sobremesa;

        novoele.innerHTML = `<a href=' https://wa.me/5561982433886?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%0A-%20Prato%3A%20${nome_prato}%0A-%20Bebida%3A%20${nome_bebida}%0A-%20Sobremesa%3A%20${nome_sobremesa}%0ATotal%3A%20R%24%20${preco_total.toFixed(2)}'>Fechar pedido</a>`;
    }
}

