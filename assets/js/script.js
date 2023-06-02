const bugerElement = document.querySelector("#burger i");
const menuMobileElement = document.querySelector("#menu-mobile");
const closeElement = document.querySelector(".close-menu i");

bugerElement.addEventListener("click", () => {
  menuMobileElement.style.width = "100%"
  bugerElement.style.display = "none"
});
closeElement.addEventListener("click", () => {
  menuMobileElement.style.width = "0"
  bugerElement.style.display = "block"
});
mobileLink = () => {
  menuMobileElement.style.width = "0"
  bugerElement.style.display = "block"

}
const scrollMain = document.querySelector(".icon-button");
scrollMain.addEventListener("click", () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
});
