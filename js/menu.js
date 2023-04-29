const mobileMenuBtn = document.querySelector("i#menu_icon");
const menuUl = document.querySelector("#menu ul");
const menu = document.querySelector("#menu");

mobileMenuBtn.addEventListener("click", () => {
  menuUl.classList.toggle("ativo");
});

window.addEventListener("scroll", function () {
  // Verifica a posição do topo da página
  if (document.documentElement.scrollTop !== 0) {
    // Se a posição for diferente de 0, adiciona a classe
    menu.classList.add("scrollTop");
  } else {
    // Caso contrário, remove a classe
    menu.classList.remove("scrollTop");
  }
});
