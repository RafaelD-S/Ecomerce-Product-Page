// Abrir e fechar barra lateral
const asideDisplay = document.querySelector("aside")
document.getElementById("menu").onclick = () => asideDisplay.style.display = "flex";
document.getElementById("fechar").onclick = () => asideDisplay.style.display = "none";

// Array de objetos com as imagens
const imgInfo = [
{
    key: 1,
    src: './assets/img/image-product-1.jpg',
    thumbnail: './assets/img/image-product-1-thumbnail.jpg',
    alt: 'Product image'
},
{
    key: 1,
    src: './assets/img/image-product-1.jpg',
    thumbnail: './assets/img/image-product-1-thumbnail.jpg',
    alt: 'Product image'
},
{
    key: 2,
    src: './assets/img/image-product-2.jpg',
    thumbnail: './assets/img/image-product-2-thumbnail.jpg',
    alt: 'Product image'
},
{
    key: 3,
    src: './assets/img/image-product-3.jpg',
    thumbnail: './assets/img/image-product-3-thumbnail.jpg',
    alt: 'Product image'
},
{
    key: 4,
    src: './assets/img/image-product-4.jpg',
    thumbnail: './assets/img/image-product-4-thumbnail.jpg',
    alt: 'Product image'
},
]

// Puxando todas as imagens e areas
const imgArray = document.querySelector(".img-area").querySelectorAll("*")
const imgOverlay = document.querySelector(".overlay-box").querySelectorAll(".mudanca-img")
const overlay = document.querySelector("#img-overlay")

// Colocar as imagens nos img's da pagina
pegarImagens = (e) => {
    e.forEach((e, i) => {
        i == 0 ? e.attributes.src.value = imgInfo[i].src : e.attributes.src.value = imgInfo[i].thumbnail
    })
}
pegarImagens(imgArray)
pegarImagens(imgOverlay)

// Botão para quando clicar na imagem do meio abrir ela maior
imgArray[0].addEventListener("click", () => {
    overlay.style.display = "flex"
    imgOverlay[0].attributes.src.value = imgArray[0].attributes.src.value
})
// Botão para fechar overlay
document.querySelector("#close-overlay").onclick = () => overlay.style.display = "none"

// Função para mudar a imagem principal
// e diminuir opacidade do item selecionado
mudarImagem = (par) => {
    par.forEach((e, i) => {
        if (i > 0) {
            e.addEventListener("click", () => {
                par[0].attributes.src.value = imgInfo[i].src
                imgInfo[0].key = i;
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
mudarImagem(imgArray)
mudarImagem(imgOverlay)

let botaoEsquerdaOverlay = document.querySelector(".arrows img:nth-child(1)")
let botaoDireitaOverlay = document.querySelector(".arrows img:nth-child(2)")

const frente = (alvo, par) => {
    alvo.addEventListener("click", () => {
        if (imgInfo[0].key < 4) {
            par[0].attributes.src.value = imgInfo[++imgInfo[0].key].src
            par.forEach((e, i) => {
                imgInfo[0].key == i ? par[i].style.opacity = '.5' : par[i].style.opacity = '1'
            })
        }
    })
}
const tras = (alvo, par) => {
    alvo.addEventListener("click", () => {
        if (imgInfo[0].key > 1) {
            par[0].attributes.src.value = imgInfo[--imgInfo[0].key].src
            par.forEach((e, i) => {
                imgInfo[0].key == i ? par[i].style.opacity = '.5' : par[i].style.opacity = '1'
            })
        }
    })
}

frente(botaoDireitaOverlay, imgOverlay)
tras(botaoEsquerdaOverlay, imgOverlay)