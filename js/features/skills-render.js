// function renderSkills(){
//     const skillsContainer = document.getElementById("skills-container");
//     if(!skillsContainer){
//         console.log("Skills container not found");
//         return;
//     }
//     skillsContainer.innerHTML = "";
//     skillsData.forEach(function(skill){
//         //to create outer card
//         const card = document.createElement("div");
//         card.className = "p-8 text-center bg-blue rounded-3xl shadow-lg";
//         //create icon
//         const iconBox = document.createElement("div");
//         iconBox.className = "w-20 h-20 mx-auto mb-4 bg-blue-300 rounded-2xl flex item-center justify-center";
//         //create icon text
//         const iconText = document.createElement("span");
//         iconText.className = "text-2xl text-white font-bold";
//         iconText.textContent = skill.shortLabel;
//         //Put icon text inside icon box
//         iconBox.appendChild(iconText);
//         //create skill name
//         const skillName = document.createElement("h3");
//         skillName.className = "text-xl font-bold mb-2";
//         skillName.textContent = skill.name;
//         //skillName.textContent = skill.name[currentLanguage];
//         //create skill desc
//         const skillDescription = document.createElement("p");
//         skillDescription.className = "text-sm";
//         skillDescription.textContent = skill.description;
        
//           //skillDescription.textContent = skill.description[currentLanguage];
//         //Append all child elements to card
//         card.appendChild(iconBox);
//         card.appendChild(skillName);
//         card.appendChild(skillDescription);
//         //Append card to skills container
//         skillsContainer.appendChild(card);
//     });
//     console.log("skills rendered successfully");
// }
function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");

  if (!skillsContainer) {
    console.log("Skills container not found");
    return;
  }

  skillsContainer.innerHTML = "";

  skillsData.forEach(function (skill) {

    // Outer card
    const card = document.createElement("div");
    card.className =
      "p-8 text-center rounded-3xl shadow-lg hover:scale-105 transition duration-300";

    // Icon box
    const iconBox = document.createElement("div");
    iconBox.className =
      "w-20 h-20 mx-auto mb-4 bg-blue-300 rounded-2xl flex items-center justify-center";

    // Lucide icon
    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", skill.icon);
    icon.className = "w-10 h-10 text-white";

    iconBox.appendChild(icon);

    // Skill name
    const skillName = document.createElement("h3");
    skillName.className = "text-xl font-bold mb-2";
    skillName.textContent = skill.name;

    // Skill description
    const skillDescription = document.createElement("p");
    skillDescription.className = "text-sm text-gray-400";
    skillDescription.textContent = skill.description;

    // Append elements
    card.appendChild(iconBox);
    card.appendChild(skillName);
    card.appendChild(skillDescription);

    skillsContainer.appendChild(card);
  });

  // 🔥 IMPORTANT: Activate Lucide icons
  lucide.createIcons();

  console.log("Skills rendered successfully");
}
renderSkills();