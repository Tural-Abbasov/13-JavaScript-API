

// const darkModeBtn = document.getElementById("darkModeBtn");
//   const elementsToToggle = [
//     document.body,
//     document.querySelector("header"),
//     document.querySelector(".headerBox h1"),
//     document.querySelector(".searchBox input"),
//     document.querySelector(".searchBox i"),
//     ...document.querySelectorAll(".cardBox"),
//     ...document.querySelectorAll(".cardBox h2"),
//     ...document.querySelectorAll(".cardBox p")
//   ];

//   darkModeBtn.addEventListener("click", () => {
//     elementsToToggle.forEach(element => {
//       element.classList.toggle("dark-mode");
//     });
//   });





const darkModeBtn = document.getElementById("darkModeBtn");
const elementsToToggle = [
  document.body,
  document.querySelector("header"),
  document.querySelector(".headerBox h1"),
  document.querySelector(".searchBox input"),
  document.querySelector(".searchBox i"),
  ...document.querySelectorAll(".cardBox"),
  ...document.querySelectorAll(".cardBox h2"),
  ...document.querySelectorAll(".cardBox p")
];

darkModeBtn.addEventListener("click", () => {
  elementsToToggle.forEach(element => {
    element.classList.toggle("dark-mode");
  });
  darkModeBtn.classList.toggle("dark-mode"); // Düyməyə dark-mode sinfini əlavə edir
});







