var text = document.getElementById("text");
var textTitle = text.textContent;
var textChar = textTitle.split("");
var btnVarim = document.querySelector(".btnVarim");

console.log(textChar);
text.textContent = "";
for (let i = 0; i < textChar.length; i++) {
  text.innerHTML += '<span class="textsSpan">' + textChar[i] + "</span>";
}

var char = 0;
var timer = setInterval(onTick, 75);

function onTick() {
  const span = text.querySelectorAll(".textsSpan")[char];
  span.classList.add("textFade");
  char++;
  if (char === textChar.length) {
    done();
    return;
  }
}

function done() {
  clearInterval(timer);
  timer = null;
}

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
};
