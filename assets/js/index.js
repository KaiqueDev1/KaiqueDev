const habilidades = [
  {
    id: 0,
    image: "./assets/img/tecnologias/html.svg",
    title: "Html",
    descricao: "Linguagem de Marcação de Hipertexto",
    documentacao: "https://developer.mozilla.org/pt-BR/docs/Web/Html",
  },
  {
    id: 1,
    image: "./assets/img/tecnologias/css.svg",
    title: "Css",
    descricao:
      "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo.",
    documentacao: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    id: 2,
    image: "./assets/img/tecnologias/js.svg",
    title: "Java Script",
    descricao:
      "O JavaScript é uma linguagem multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos.",
    documentacao: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
];

const habilidadesElement = document.querySelector("#habilidades")

function exibirHabilidade() {
    const containerHabilidade = document.createElement("div")
    containerHabilidade.classList.add("content-habilidade-mobile")
   
    habilidadesElement.appendChild(containerHabilidade)

    habilidades.forEach(habilidade => {
        containerHabilidade.innerHTML+=`
        <div class="box">
            <img src="`+habilidade.image+`" />
            <div class="text-bx">
              <h3>`+habilidade.title+`</h3>
              <p>`+habilidade.descricao+`</p>
            </div>
            <button class="btn-documentacao">
              <a href="`+habilidade.documentacao+`">Ver documentação</a>
            </button>
        </div>
        `
    })
}
exibirHabilidade();
function exibirHabilidadeDsk() {
    const containerHabilidade = document.createElement("div")
    containerHabilidade.classList.add("content-habilidade-dsk")
   
    habilidadesElement.appendChild(containerHabilidade)

    habilidades.forEach(habilidade => {
        containerHabilidade.innerHTML+=`
        <div class="box">
            <img src="`+habilidade.image+`" />
            <div class="text-bx">
              <h3>`+habilidade.title+`</h3>
              <p>`+habilidade.descricao+`</p>
              <button class="btn-documentacao">
                <a href="`+habilidade.documentacao+`">Ver documentação</a>
              </button>
            </div>
        </div>
        `
    })
}
exibirHabilidadeDsk();


const portfolio = [
  {
    id: 0,
    midia: "./assets/js/video/PersonalTrainer.mkv",
    title: "Personal Trainer",
    url: "https://kaiquezpriv1.github.io/PersonalTrainer/",
  },
  {
    id: 1,
    midia: "./assets/js/video/projetoRocketSeat.mkv",
    title: "Projeto RocketSeat",
    url: "https://kaiquezpriv1.github.io/Projeto-rocketSeat/",
  },
  {
    id: 2,
    midia: "./assets/js/video/exploreLab.mkv",
    title: "Explore Lab",
    url: "https://explore-lab-azure.vercel.app/",
  },
  {
    id: 3,
    midia: "./assets/js/video/phCakes.mkv",
    title: "Ph Cakes",
    url: "https://kaiquezpriv1.github.io/PhCakess/",
  },
];

const portfolioElement = document.querySelector("#portfolio");

function exibirPortfolio() {
    const containerPortfolio = document.createElement("div");
    containerPortfolio.classList.add("content-portfolio-mobile");

    portfolioElement.appendChild(containerPortfolio)
    portfolio.forEach(pt => {
        containerPortfolio.innerHTML +=
          `
        <div class="box">
            <video
                width="90%"
                height="260"
                controls="controls"
                loop="loop"
                muted="muted"
                autoplay="autoplay"
                src="` +pt.midia +`">
                </video>
                <div class="text-bx">
                <h3>` +
              pt.title +
              `</h3>
                </div>
            <button class="btn-documentacao">
                <a href="` +
          pt.url +
          `">Ver documentação</a>
            </button>
        </div>
        `;
    })
}
exibirPortfolio();
function exibirPortfolioDsk() {
    const containerPortfolio = document.createElement("div");
    containerPortfolio.classList.add("content-portfolio-dsk");

    portfolioElement.appendChild(containerPortfolio)
    portfolio.forEach(pt => {
        containerPortfolio.innerHTML +=
          `
        <div class="box-dsk">
            <video
                width="100%"
                height="auto"
                id="midia-ptf"
                controls="controls"
                loop="loop"
                muted="muted"
                autoplay="autoplay"
                src="` +pt.midia +`">
            </video>
            <button class="btn-documentacao-ptf">
              <a href="` +
              pt.url +
              `">Ver documentação</a>
            </button>
            
        </div>
        `;
    })
}
exibirPortfolioDsk();

