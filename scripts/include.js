async function loadComponent(id, file) {
  await fetch(`./components/${file}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });

  if (id === "header") {
    initHamburgerMenu();
  }
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}