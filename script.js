function gerarLink() {
    let pele = document.getElementById("pele").value;
    let problema = document.getElementById("problema").value;

    let links = {
        "oleosa-acne": "https://www.mercadolivre.com.br/produto-pele-oleosa-acne",
        "oleosa-rugas": "https://www.mercadolivre.com.br/produto-pele-oleosa-rugas",
        "seca-manchas": "https://www.mercadolivre.com.br/p/MLB41738809",
        "mista-acne": "https://www.mercadolivre.com.br/produto-pele-mista-acne",
        "sensivel-rugas": "https://www.mercadolivre.com.br/produto-pele-sensivel-rugas"
    };

    let chave = pele + "-" + problema;
    let linkFinal = links[chave] || "https://www.mercadolivre.com.br/default";

    document.getElementById("resultado").innerHTML = `<a href="${linkFinal}" target="_blank">Clique aqui para ver o produto ideal!</a>`;
}
