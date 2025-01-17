let keyPressed = document.getElementById("keyPressed");
let history = document.getElementById("history");
let keyCode = document.getElementById("keyCode");

let sound = new Audio("key-press.mp3");
sound.preload = "auto";

document.addEventListener("keypress", (e) => {
  e.preventDefault();
  let keyPress = e.key;
  let keycd = e.keyCode;
  pressing(keyPress, keycd);
});

let pressing = (keyPress, keycd) => {
  sound.currentTime = 0;
  sound.play();
  keyPressed.innerHTML = `You Pressed <span style="color:rgb(5, 133, 90);">${keyPress}</span>`;
  keyCode.innerText = keycd;
  keyCode.style.display = "block";
  history.style.display = "flex";
  let para = document.createElement("p");
  para.innerText = `Key ${keyPress} , Code ${keycd}`;
  para.classList.add("para");
  history.appendChild(para);
  history.scrollLeft = history.scrollWidth;
  console.log(history);
};
