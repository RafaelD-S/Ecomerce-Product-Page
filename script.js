// Abrir e fechar barra lateral
const asideDisplay = document.querySelector("aside")
document.getElementById("menu").onclick = () => asideDisplay.style.display = "flex";
document.getElementById("fechar").onclick = () => asideDisplay.style.display = "none";

// Array de objetos com as imagens
const productInfo = [
    {
        key: 1,
        src: './assets/img/image-product-1.jpg',
        thumbnail: './assets/img/image-product-1-thumbnail.jpg',
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        finalprice: "125.00",
        discount: [true, "50%", "250.00"]
    },
    {
        key: 2,
        src: './assets/img/image-product-1.jpg',
        thumbnail: './assets/img/image-product-1-thumbnail.jpg'
    },
    {
        key: 3,
        src: './assets/img/image-product-2.jpg',
        thumbnail: './assets/img/image-product-2-thumbnail.jpg'
    },
    {
        key: 4,
        src: './assets/img/image-product-3.jpg',
        thumbnail: './assets/img/image-product-3-thumbnail.jpg'
    },
    {
        key: 5,
        src: './assets/img/image-product-4.jpg',
        thumbnail: './assets/img/image-product-4-thumbnail.jpg'
    },
]
document.querySelector("h1").innerText = productInfo[0].name
document.querySelector(".description").innerText = productInfo[0].description
document.querySelector(".price-area h2").innerText = "$" + productInfo[0].finalprice

if (productInfo[0].discount[0]) {
    document.querySelector(".discount").innerText = productInfo[0].discount[1]
    document.querySelector(".price-area h4").innerText = "$" + productInfo[0].discount[2]
}


// Puxando todas as imagens e areas
const imgShowcase = document.querySelector(".img-area").querySelectorAll("img:not(.showcase-arrow)")
const imgOverlay = document.querySelector(".overlay-box").querySelectorAll(".mudanca-img")
const overlay = document.querySelector("#img-overlay")

// Colocar as imagens nos img's da pagina
pegarImagens = (e) => {
    e.forEach((e, i) => {
        i == 0 ? e.attributes.src.value = productInfo[i].src : e.attributes.src.value = productInfo[i].thumbnail
    })
}
pegarImagens(imgShowcase)
pegarImagens(imgOverlay)

// Botão para quando clicar na imagem do meio abrir ela maior
if (window.innerWidth > 700) {
    imgShowcase[0].addEventListener("click", () => {
        overlay.style.display = "flex"
        imgOverlay[0].attributes.src.value = imgShowcase[0].attributes.src.value
    })
}
// Botão para fechar overlay
document.querySelector("#close-overlay").onclick = () => overlay.style.display = "none"

// Função para mudar a imagem principal
// e diminuir opacidade do item selecionado
mudarImagem = (par) => {
    par.forEach((e, i) => {
        if (i > 0) {
            e.addEventListener("click", () => {
                par[0].attributes.src.value = productInfo[i].src
                productInfo[0].key = i;
                par.forEach((x, y) => {
                    if (i == y) {
                        x.style.opacity = ".5"
                        imgOverlay[y].style.opacity = ".5"
                    } else {
                        x.style.opacity = "1"
                        imgOverlay[y].style.opacity = "1"
                    }
                })
            })
        }
    })
}
mudarImagem(imgShowcase)
mudarImagem(imgOverlay)

// Função para avançar e voltar em um slide
let botaoEsquerdaOverlay = document.querySelector(".arrows img:nth-child(1)")
let botaoDireitaOverlay = document.querySelector(".arrows img:nth-child(2)")
let botaoEsquerdaShowcase = document.querySelector(".pass-img-showcase img:nth-child(1)")
let botaoDireitaShowcase = document.querySelector(".pass-img-showcase img:nth-child(2)")
const frente = (alvo, par) => {
    alvo.addEventListener("click", () => {
        if (productInfo[0].key < 4) {
            par[0].attributes.src.value = productInfo[++productInfo[0].key].src
            par.forEach((e, i) => {
                productInfo[0].key == i ? par[i].style.opacity = '.5' : par[i].style.opacity = '1'
            })
        }
    })
}
const tras = (alvo, par) => {
    alvo.addEventListener("click", () => {
        if (productInfo[0].key > 1) {
            par[0].attributes.src.value = productInfo[--productInfo[0].key].src
            par.forEach((e, i) => {
                productInfo[0].key == i ? par[i].style.opacity = '.5' : par[i].style.opacity = '1'
            })
        }
    })
}

// Ativar o slide no overlay
frente(botaoDireitaOverlay, imgOverlay)
tras(botaoEsquerdaOverlay, imgOverlay)

// Ativar o slide no showcase
frente(botaoDireitaShowcase, imgShowcase)
tras(botaoEsquerdaShowcase, imgShowcase)

// Adcionar ou subtrair a quantidade de itens
const quantidade = document.getElementById("quantidade")
document.querySelector(".som").onclick = () => ++quantidade.value;
document.querySelector(".sub").onclick = () => quantidade.value > 0 ? --quantidade.value : '';

// Abrir e fechar o carrinho
cart = document.querySelector(".cart")
document.querySelector("#cart").onclick = () => cart.style.display == "block" ? cart.style.display = "none" : cart.style.display = "block"

// Adcionar ao carrinho
notification = document.getElementById("notificacao")
document.getElementById("add-to-cart").onclick = () => {
    if (quantidade.value > 0) {
        document.querySelector(".cart figure").style.display = "flex"
        document.querySelector(".cart button").style.display = "flex"
        document.querySelector(".empty").style.display = "none"
        notification.innerText = +notification.innerText + +quantidade.value;
        document.querySelector(".cart-name").innerText = productInfo[0].name;
        document.querySelector(".cart-img").attributes.src.value = productInfo[0].thumbnail
        document.querySelector(".cart-price span:nth-child(1)").innerText = productInfo[0].finalprice
        document.querySelector(".cart-price span:nth-child(2)").innerText = notification.innerText
        document.querySelector(".cart-price span:nth-child(3)").innerText = "$" + (+notification.innerText * +productInfo[0].finalprice).toFixed(2)
    }
}

// Excluir do carrinho 
document.querySelector(".excluir").onclick = () => {
    document.querySelector(".cart figure").style.display = "none"
    document.querySelector(".cart button").style.display = "none"
    document.querySelector(".empty").style.display = "block"
    notification.innerText = ''
}