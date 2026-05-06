document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  // Minimum loading time (optional)
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1500); // 1.5 sec loader
});