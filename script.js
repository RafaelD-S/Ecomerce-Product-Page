const asideDisplay = document.querySelector("aside")

document.getElementById("menu").onclick = () => asideDisplay.style.display = "flex";
document.getElementById("fechar").onclick = () => asideDisplay.style.display = "none";

const imgInfo = [
{
    key: 0,
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

const imgArray = document.querySelector(".img-area").querySelectorAll("*")
const imgOverlay = document.querySelector(".overlay-box").querySelectorAll("*")
const overlay = document.querySelector("#img-overlay")
let selected;

console.log(imgOverlay)

const brincadeira = (e, i, which) => {
    if (i == 0) {
        e.attributes.src.value = imgInfo[i].src
        e.addEventListener("click", () => {
            imgOverlay[0].attributes.src.value = e.attributes.src.value
            overlay.style.display = "flex"
            imgOverlay.forEach((x, y) => {
                selected == y ? imgOverlay[selected].style.opacity = ".5" : imgOverlay[y].style.opacity = "1"
            })
        })
    } else {
        e.attributes.src.value = imgInfo[i].thumbnail
        e.addEventListener("click", () => {
            which[0].attributes.src.value = imgInfo[i].src;
            which.forEach((x, y) => {
                if (i == y) {
                    x.style.opacity = ".5";
                    selected = y;
                } else {
                    x.style.opacity = "1";
                }
            })
        })
    }
}

document.querySelector("#close-overlay").onclick = () => overlay.style.display = "none"


imgArray.forEach(brincadeira)
imgOverlay.forEach(brincadeira)