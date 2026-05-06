const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

// Track mouse instantly for dot
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

// Smooth follow for ring (lag effect)
function animate() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;

  ring.style.left = ringX + "px";
  ring.style.top = ringY + "px";

  requestAnimationFrame(animate);
}
animate();

// Hover effect
const hoverItems = document.querySelectorAll("a, button");

hoverItems.forEach(el => {
  el.addEventListener("mouseenter", () => {
    ring.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    ring.classList.remove("hover");
  });
});