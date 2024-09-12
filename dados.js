let dados = [
    {
        titulo: "Tiranossauro Rex",
        descricao: "Um dos maiores carnívoros terrestres que já existiu, o T-Rex era conhecido por seus poderosos dentes e mandíbulas.",
        periodo: "Cretáceo",
        alimentacao: "Carnívoro",
        tamanho: "Até 13 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Tiranossauro_rex"
    },
    {
        titulo: "Braquiossauro",
        descricao: "Um dos maiores animais terrestres que já viveram, o Braquiossauro era um herbívoro de pescoço longo e cauda curta.",
        periodo: "Jurássico",
        alimentacao: "Herbívoro",
        tamanho: "Até 23 metros de altura",
        link: "https://pt.wikipedia.org/wiki/Braquiossauro"
    },
    {
        titulo: "Triceratops",
        descricao: "Reconhecível por seus três chifres e gola óssea, o Triceratops era um herbívoro quadrúpede.",
        periodo: "Cretáceo",
        alimentacao: "Herbívoro",
        tamanho: "Até 9 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Triceratops"
    },
    // Adicione mais dinossauros aqui:
    {
        {
    titulo: "Archaeopteryx",
    descricao: "Considerado uma forma de transição entre dinossauros e aves modernas, o Archaeopteryx possuía penas e um bico, mas também garras em suas asas e dentes.",
    periodo: "Jurássico Superior",
    alimentacao: "Carnívoro (provavelmente insetos e pequenos animais)",
    tamanho: "Cerca de 50 centímetros de comprimento",
    link: "https://pt.wikipedia.org/wiki/Archaeopteryx"
}
    },
    {
        titulo: "Camptossauro",
        descricao: "Herdívoros bípedes, os Camptossauros eram conhecidos por seus bicos distintivos, semelhantes a um pato, que usavam para cortar plantas.",
        periodo: "Jurássico",
        alimentacao: "Herbívoro",
        tamanho: "Cerca de 8 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Camptossauro"
    },
    {
        titulo: "Espinossauro",
        descricao: "Com uma vela nas costas e um focinho semelhante ao de um crocodilo, o Espinossauro era um predador aquático e terrestre.",
        periodo: "Cretáceo",
        alimentacao: "Carnívoro",
        tamanho: "Até 15 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Espinossauro"
    },
    {
        titulo: "Anquilossauro",
        descricao: "Coberto por placas ósseas e com uma clava na ponta da cauda, o Anquilossauro era um herbívoro bem protegido.",
        periodo: "Cretáceo",
        alimentacao: "Herbívoro",
        tamanho: "Até 10 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Anquilossauro"
    },
    {
        titulo: "Diplodoco",
        descricao: "Com um pescoço e cauda extremamente longos, o Diplodoco era um herbívoro que se alimentava das copas das árvores.",
        periodo: "Jurássico",
        alimentacao: "Herbívoro",
        tamanho: "Até 35 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Diplodoco"
    },
    {
        titulo: "Pterodáctilo",
        descricao: "Embora não fosse um dinossauro, o Pterodáctilo era um pterossauro voador que viveu na mesma época dos dinossauros.",
        periodo: "Jurássico",
        alimentacao: "Carnívoro",
        tamanho: "Envergadura de até 2 metros",
        link: "https://pt.wikipedia.org/wiki/Pterodáctilo"
    },
    {
        titulo: "Iguanodonte",
        descricao: "Um dos primeiros dinossauros a ser descoberto, o Iguanodonte era um herbívoro bípede com um polegar em forma de espinho.",
        periodo: "Cretáceo",
        alimentacao: "Herbívoro",
        tamanho: "Até 10 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Iguanodonte"
    },
    {
        titulo: "Giganotossauro",
        descricao: "Um dos maiores carnívoros terrestres que já existiu, rivalizando em tamanho com o Tiranossauro Rex, mas com um crânio mais estreito e dentes serrilhados.",
        periodo: "Cretáceo",
        alimentacao: "Carnívoro",
        tamanho: "Até 13 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Giganotossauro"
    },
    {
        titulo: "Dilofossauro",
        descricao: "Famoso por sua crista óssea e a capacidade de cuspir veneno (embora essa última característica seja mais uma licença artística), o Dilofossauro era um predador relativamente pequeno.",
        periodo: "Jurássico",
        alimentacao: "Carnívoro",
        tamanho: "Até 6 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Dilofossauro"
    },
    {
        titulo: "Pachycephalosaurus",
        descricao: "Com uma grossa cúpula óssea no topo do crânio, acredita-se que o Pachycephalosaurus usasse a cabeça para embates com outros de sua espécie.",
        periodo: "Cretáceo",
        alimentacao: "Herbívoro",
        tamanho: "Até 5 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Pachycephalosaurus"
    },
    {
        titulo: "Compsognato",
        descricao: "Um dos menores dinossauros conhecidos, o Compsognato era um predador ágil e rápido.",
        periodo: "Jurássico",
        alimentacao: "Carnívoro",
        tamanho: "Até 1 metro de comprimento",
        link: "https://pt.wikipedia.org/wiki/Compsognato"
    },
    {
        titulo: "Gallimimus",
        descricao: "Com aparência semelhante a um avestruz, o Gallimimus era um ornitomímido que corria rapidamente e se alimentava de plantas.",
        periodo: "Cretáceo",
        alimentacao: "Omnívoro",
        tamanho: "Até 6 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Gallimimus"
    },
    {
        titulo: "Alossauro",
        descricao: "Um dos maiores predadores do Jurássico, conhecido por seus dentes afiados e braços poderosos.",
        periodo: "Jurássico",
        alimentacao: "Carnívoro",
        tamanho: "Até 12 metros de comprimento",
        peso: "Até 2 toneladas",
        habitat: "Florestas e planícies",
        curiosidades: "Seus braços eram relativamente longos em comparação com outros grandes terópodes.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tyrannosaurus_Rex_Skeletal.png/800px-Tyrannosaurus_Rex_Skeletal.png", // Substitua por uma imagem do Alossauro
        link: "https://pt.wikipedia.org/wiki/Allosaurus"
    },
    {
        titulo: "Spinosaurus",
        descricao: "Com uma vela nas costas e um focinho semelhante ao de um crocodilo, o Spinosaurus era um predador aquático e terrestre.",
        periodo: "Cretáceo",
        alimentacao: "Carnívoro",
        tamanho: "Até 15 metros de comprimento",
        peso: "Estima-se em torno de 7-12 toneladas",
        habitat: "Ambientes aquáticos e terrestres",
        curiosidades: "Acredita-se que a vela nas costas servia para regular a temperatura corporal.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Spinosaurus_aegyptiacus_skeleton.jpg/1280px-Spinosaurus_aegyptiacus_skeleton.jpg",
        link: "https://pt.wikipedia.org/wiki/Espinossauro"
    },
    {
        titulo: "Ankylosaurus",
        descricao: "Coberto por placas ósseas e com uma clava na ponta da cauda, o Ankylosaurus era uma verdadeira fortaleza.",
        periodo: "Cretáceo",
        alimentacao: "Herbívoro",
        tamanho: "Até 10 metros de comprimento",
        peso: "Estima-se em torno de 6 toneladas",
        habitat: "Planícies e florestas",
        curiosidades: "Sua armadura óssea o protegia de predadores.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ankylosaurus_magniventris_skeleton.jpg/1280px-Ankylosaurus_magniventris_skeleton.jpg",
        link: "https://pt.wikipedia.org/wiki/Anquilossauro"
    },
    {
        titulo: "Velociraptor",
        descricao: "Menor que muitos outros dinossauros, o Velociraptor era um predador ágil e inteligente.",
        periodo: "Cretáceo",
        alimentacao: "Carnívoro",
        tamanho: "Até 2 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Velociraptor"
    },
    {
        titulo: "Estegossauro",
        descricao: "Conhecido por suas placas ósseas nas costas e espinhos na cauda, o Estegossauro era um herbívoro quadrúpede.",
        periodo: "Jurássico",
        alimentacao: "Herbívoro",
        tamanho: "Até 9 metros de comprimento",
        link: "https://pt.wikipedia.org/wiki/Estegossauro"
    },
    {
        titulo: "Pteranodonte",
        descricao: "Embora não fosse um dinossauro, o Pteranodonte era um pterossauro, um réptil voador que viveu na mesma época dos dinossauros.",
        periodo: "Cretáceo",
        alimentacao: "Carnívoro",
        tamanho: "Envergadura de até 7 metros",
        link: "https://pt.wikipedia.org/wiki/Pteranodon"
    }
];
