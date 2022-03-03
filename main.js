const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`),
    key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", (e)=>{
    playNote(e.keyCode)
});

for(const key of keys){
    key.addEventListener('click', (e)=>{
        playNote(e.target.getAttribute('data-key'))
       
    })
}