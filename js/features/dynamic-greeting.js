function initDynamicGreeting() {
  const greetingElement = document.getElementById("greeting");

  // Safety check
  if (!greetingElement) {
    console.warn("Greeting element not found");
    return;
  }

  const hour = new Date().getHours();
  let greetingText = "";

  if (hour >= 5 && hour < 12) {
    greetingText = "Good Morning 🌅" ;
  } else if (hour >= 12 && hour < 17) {
    greetingText = "Good Afternoon☀️";
  } else {
    greetingText = "Good Evening 🌙";
  }

  greetingElement.textContent = greetingText;
}

/* Ensure DOM is loaded before running */
document.addEventListener("DOMContentLoaded", initDynamicGreeting);
console.log("Greeting JS Loaded");
