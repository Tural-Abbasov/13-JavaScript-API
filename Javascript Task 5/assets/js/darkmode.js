// Dark and Light Mod 


const darkModeBtns = document.querySelectorAll("#darkModeBtn");  // Bir neçə düyməni seçmək üçün
const elementsToToggle = [
  document.body,
  document.querySelector("header"),
  document.querySelector(".headerBox h1"),
  document.querySelector(".searchBox input"),
  document.querySelector(".searchBox i"),
  ...document.querySelectorAll(".cardBox"),
  ...document.querySelectorAll(".cardBox h2"),
  ...document.querySelectorAll(".cardBox p"),
  document.querySelector(".card-modal"),
  document.querySelector(".card-modal header"),
  document.querySelector(".card-modal .card"),
  document.querySelector(".card-modal .card h5"),
  ...document.querySelectorAll(".card-modal .card p"),
  document.querySelector(".backBtn")
];

// Bütün dark mode düymələri üçün eyni funksiyanı tətbiq etmək
darkModeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    elementsToToggle.forEach(element => {
      element.classList.toggle("dark-mode");
    });
    darkModeBtns.forEach(button => button.classList.toggle("dark-mode"));  // Hər iki düymə dark mode-a keçir
  });
});











