window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  const home = document.getElementById("home");

  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";

    // start animation AFTER loader disappears
    home.classList.add("show-home");

  }, 500);

});