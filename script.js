let rating = Array.from(document.querySelectorAll(".inputs label"));
let submit = document.querySelector(".submit");

let boxFavorite = document.querySelector(".box_favorite");
let boxThanks = document.querySelector(".box_thanks");
let numberSelected = document.querySelector(".numberSelected");

rating.forEach((element) => {
  element.addEventListener("click", (e) => {
    let valor = element.innerHTML;
    rating.forEach((element) => {
      element.classList.remove("active");
      // element.style.backgroundColor = "hsl(210, 20%, 22%)";
    });
    submit.removeAttribute("disabled");
    e.target.classList.add("active");
    // e.target.style.backgroundColor = "hsl(216, 12%, 54%)";

    submit.addEventListener("click", () => {
      boxFavorite.style.display = "none";
      boxThanks.style.display = "flex";
      numberSelected.innerHTML = `${valor}`;
    });
  });
});
