// // function renderEducation(data) {
// //   const container = document.getElementById("experience-container");

// //   if (!container) return;

// //   container.innerHTML = data.map((edu) => `
// //   <div class="card bg-gray-800 p-6 rounded-lg transition-all duration-300"> 
// //       <h3 class="text-xl font-bold text-blue-400">${edu.course}</h3>
// //       <p class="text-gray-300 mt-1">${edu.college}</p>
// //       <p class="text-gray-400 text-sm">${edu.board} • ${edu.year}</p>
// //       <p class="text-green-400 font-semibold mt-2">${edu.percentage}</p>
// //     </div>
// //   `).join("");
// // }

// // // renderEducation(educationsData);
// // function renderEducation(data) {

// //   const container = document.getElementById("experience-container");

// //   if (!container) return;

// //   // Check current theme
// //   const isLight = document.body.classList.contains("bg-white");

// //   container.innerHTML = data.map((edu) => `

// //     <div class="
// //       card
// //       ${isLight ? 'bg-white text-black shadow-lg' : 'bg-gray-800 text-white'}
// //       p-6 rounded-lg transition-all duration-300
// //     ">

// //       <h3 class="text-xl font-bold text-blue-400">
// //         ${edu.course}
// //       </h3>

// //       <p class="${isLight ? 'text-gray-700' : 'text-gray-300'} mt-1">
// //         ${edu.college}
// //       </p>

// //       <p class="${isLight ? 'text-gray-500' : 'text-gray-400'} text-sm">
// //         ${edu.board} • ${edu.year}
// //       </p>

// //       <p class="text-green-400 font-semibold mt-2">
// //         ${edu.percentage}
// //       </p>

// //     </div>

// //   `).join("");
// // }

// // renderEducation(educationsData);

// function renderEducation(data) {

//   const container = document.getElementById("experience-container");

//   if (!container) return;

//   container.innerHTML = data.map((edu) => `

//     <div class="card bg-gray-800 p-6 rounded-lg transition-all duration-300">

//       <h3 class="text-xl font-bold text-blue-400">
//         ${edu.course}
//       </h3>

//       <p class="text-gray-300 mt-1">
//         ${edu.college}
//       </p>

//       <p class="text-gray-400 text-sm">
//         ${edu.board} • ${edu.year}
//       </p>

//       <p class="text-green-400 font-semibold mt-2">
//         ${edu.percentage}
//       </p>

//     </div>

//   `).join("");
// }

// renderEducation(educationsData);
const educationContainer = document.getElementById("education-slider");

function renderEducation() {

  educationContainer.innerHTML = "";

  educationsData.forEach((edu) => {

    const card = document.createElement("div");

    card.className = `
      min-w-[320px]
      ${edu.bg}
      rounded-3xl
      p-8
      shadow-2xl
      flex-shrink-0
    `;

    card.innerHTML = `

      <h3 class="text-4xl font-black ${edu.titleColor} mb-6">
        ${edu.short}
      </h3>

      <h4 class="text-2xl font-bold mb-3">
        ${edu.course}
      </h4>

      <p class="text-gray-300 text-lg mb-2">
        ${edu.year}
      </p>

      <p class="text-gray-400 text-lg mb-6">
        ${edu.college}
      </p>

      <p class="${edu.scoreColor} text-2xl font-bold">
        ${edu.percentage}
      </p>

    `;

    educationContainer.appendChild(card);

  });

}

renderEducation();