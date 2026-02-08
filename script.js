const button = document.querySelector("button");
const extra = document.getElementById("extra");
const sound = new Audio("./click.mp3");

let open = false;

button.addEventListener("click", function () {
  // sound
  sound.currentTime = 0;
  sound.play();

  if (!open) {
    extra.style.maxHeight = extra.scrollHeight + "px";
    extra.style.opacity = "1";
    open = true;
  } else {
    extra.style.maxHeight = "0";
    extra.style.opacity = "0";
    open = false;
  }
});
