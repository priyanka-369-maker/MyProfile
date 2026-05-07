const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Hover effect on buttons & links */
const hoverItems = document.querySelectorAll("a, button");

hoverItems.forEach(item => {

  item.addEventListener("mouseenter", () => {
    cursor.style.width = "35px";
    cursor.style.height = "35px";
    cursor.style.background = "#2563eb";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.background = "#60a5fa";
  });

});