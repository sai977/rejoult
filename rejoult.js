let profileIcon = document.getElementById("profileIcon");
let profileSection = document.getElementById("profileSection");
let navbar = document.getElementById("navbar");
let cross = document.getElementById("cross");
let dashboard = document.getElementById("dashboard");
let wallet = document.getElementById("wallet");
let dbcross = document.getElementById("dbcross");
let upd = document.getElementById("upd");
let up1 = document.getElementById("up1");
let up2 = document.getElementById("up2");
console.log(up1);

up1.addEventListener("click", () => {
  let val = parseInt(upd.textContent) + 1;
  upd.textContent = val;
});
up2.addEventListener("click", () => {
  let val = parseInt(upd.textContent) - 1;
  upd.textContent = val;
});

profileIcon.addEventListener("click", () => {
  navbar.classList.toggle("d-none");
  profileSection.classList.toggle("d-none");
});

cross.addEventListener("click", () => {
  navbar.classList.toggle("d-none");
  profileSection.classList.toggle("d-none");
});

wallet.addEventListener("click", () => {
  navbar.classList.toggle("d-none");
  dashboard.classList.toggle("d-none");
});

dbcross.addEventListener("click", () => {
  navbar.classList.toggle("d-none");
  dashboard.classList.toggle("d-none");
});
