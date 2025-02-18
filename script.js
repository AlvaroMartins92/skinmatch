function gerarLink() {
    let pele = document.getElementById("pele").value;
    let problema = document.getElementById("problema").value;

    let links = {
        "oleosa-acne": "https://www.mercadolivre.com.br/produto-pele-oleosa-acne",
        "oleosa-rugas": "https://www.mercadolivre.com.br/produto-pele-oleosa-rugas",
        "seca-manchas": "https://www.mercadolivre.com.br/trio-anti-ressecamento-proper-jack-soluco-p-pele-seca/p/MLB41738809?pdp_filters=item_id:MLB5120071198#is_advertising=true&searchVariation=MLB41738809&position=1&search_layout=grid&type=pad&tracking_id=f41164cd-4bcc-4cb0-b230-61e05f5be068&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YjI3ZTQ5ZDMtMDkxNi00NWY1LWI0YmEtYjBlYjE5MWNmMzQw",
        "mista-acne": "https://www.mercadolivre.com.br/produto-pele-mista-acne",
        "sensivel-rugas": "https://www.mercadolivre.com.br/produto-pele-sensivel-rugas"
    };

    let chave = pele + "-" + problema;
    let linkFinal = links[chave] || "https://www.mercadolivre.com.br/default";

    document.getElementById("resultado").innerHTML = `<a href="${linkFinal}" target="_blank">Clique aqui para ver o produto ideal!</a>`;
}
