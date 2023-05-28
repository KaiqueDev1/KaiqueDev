const bugerElement = document.querySelector("#burger i");
const menuMobileElement = document.querySelector("#menu-mobile");
const closeElement = document.querySelector(".close-menu i");

bugerElement.addEventListener("click", () => {
    menuMobileElement.style.width = "65%"
})
closeElement.addEventListener("click", () => {
    menuMobileElement.style.width = "0"
})

const linkMenuMobile = document.querySelector(".link-menu-mb")
linkMenuMobile.addEventListener("click", () => {
    window.scroll({
      behavior: "smooth"
    });
    menuMobileElement.style.width = "0";
})

const scrollMain = document.querySelector(".icon-button");
scrollMain.addEventListener("click", () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
})