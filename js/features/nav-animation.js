const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // remove old animation
    targetSection.classList.remove("show-section");

    // restart animation
    setTimeout(() => {
      targetSection.classList.add("show-section");
    }, 50);

  });

});