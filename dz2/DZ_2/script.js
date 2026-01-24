const box = document.getElementById("box");
const offX = document.getElementById("offx");
const offY = document.getElementById("offy");

box.addEventListener("mousemove", function (event) {
  offX.textContent = event.offsetX;
  offY.textContent = event.offsetY;
});

box.addEventListener("mouseleave", function () {
  offX.textContent = "";
  offY.textContent = "";
});