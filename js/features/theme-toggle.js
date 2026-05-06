// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById('theme-toggle');
//   const body = document.body;

//   let isDark = false; // ✅ start light

//   toggleBtn.addEventListener('click', () => {

//     if (isDark) {
//       // Light mode
//       body.classList.remove('bg-gray-900','text-white');
//       body.classList.add('bg-white','text-black');
//       toggleBtn.textContent = 'Dark';
//     } else {
//       // Dark mode
//       body.classList.remove('bg-white','text-black');
//       body.classList.add('bg-gray-900','text-white');
//       toggleBtn.textContent = 'Light';
//     }

//     isDark = !isDark;
//   });
// });
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

let isDark = true;

toggleBtn.addEventListener('click', () => {
  if (isDark) {
    body.classList.remove('bg-gray-900','text-white');
    body.classList.add('bg-white','text-black','light-mode'); // 👈 add this
    toggleBtn.textContent = 'Dark';
  } else {
    body.classList.remove('bg-white','text-black','light-mode');
    body.classList.add('bg-gray-900','text-white');
    toggleBtn.textContent = 'Light';
  }
  isDark = !isDark;
});