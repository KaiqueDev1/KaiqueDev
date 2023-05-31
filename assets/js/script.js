const bugerElement = document.querySelector("#burger i");
const menuMobileElement = document.querySelector("#menu-mobile");
const closeElement = document.querySelector(".close-menu i");

bugerElement.addEventListener("click", () => {
    menuMobileElement.style.width = "65%"
    bugerElement.style.display = "none"
})
closeElement.addEventListener("click", () => {
    menuMobileElement.style.width = "0"
    bugerElement.style.display = "block"
})
const linkMenuMobile = document.querySelector(".link-menu-mb")
linkMenuMobile.addEventListener("click", () => {
    window.scroll({
      behavior: "smooth"
    });
});
const scrollMain = document.querySelector(".icon-button");
scrollMain.addEventListener("click", () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
});
const scrollMainDsk = document.querySelector(".icon-button-dsk");
scrollMainDsk.addEventListener("click", () => {
    window.scroll({
      top: 700,
      behavior: "smooth",
    });
});