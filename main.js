const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const brotherss = document.querySelectorAll(".brothers");
// const icon=document.querySelector("i");
const icon = document.querySelectorAll("i");

brotherss.forEach((brothers) => {
  brothers.children[0].addEventListener("click", () => {
    brothers.children[1].classList.toggle("destroy");
    brothers.children[2].classList.toggle("ii");
  });
});
