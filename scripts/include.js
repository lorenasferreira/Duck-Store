async function loadComponent(id, file) {
  document.getElementById(id).innerHTML =
    await fetch(`./components/${file}`).then(res => res.text());
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
