const config = {
  selectors: {
    xPos: "xPos",
    yPos: "yPos",
    random1: "random1",
    random2: "random2"
  },
  data: {
    random1to5: Math.floor(Math.random() * 5) + 1,
    textCharAppearance: 70 // milliseconds
  }
};

let log = {
  init() {
    let xPos = document.getElementById(config.selectors.xPos),
      yPos = document.getElementById(config.selectors.yPos),
      random1 = document.getElementById(config.selectors.random1),
      random2 = document.getElementById(config.selectors.random2);
  },
  log(element, data) {
    element.innerText = data;
  }
};

let timer1Id;
let timer2Id;

let setRandom = {
  setRandomNumber1(interval) {
    timer1Id = setInterval(() => {
      let number = Math.random();
      document.body.style.setProperty("--random1", number);
      log.log(random1, number);
    }, interval);
  },

  setRandomNumber2(interval) {
    timer2Id = setInterval(() => {
      let number = Math.random();
      document.body.style.setProperty("--random2", number);
      log.log(random2, number);
    }, interval);
  },

  init() {
    // Populate css custom properties with random numbers
    this.setRandomNumber1(200);
    this.setRandomNumber2(config.data.random1to5 * 1000);
  }
};

function _mouseMove(e) {
  let wh = window.innerHeight / 2,
    ww = window.innerWidth / 2,
    mouseXVal = (e.clientX - ww) / 100,
    mouseYVal = -((e.clientY - wh) / 100);

  document.body.style.setProperty("--mouseX", mouseXVal);
  document.body.style.setProperty("--mouseY", mouseYVal);

  log.log(xPos, mouseXVal);
  log.log(yPos, mouseYVal);
}

let mouseMove = {
  init() {
    document.addEventListener("mousemove", _mouseMove);
  }
};

let animateTexts = {
  animate(text) {
    text.classList.remove("waiting");
    text.classList.add("animating");
    // Check for text presence
    if (text.innerText !== "") {
      const baseText = text.innerText;
      const charCount = baseText.length;
      let counter = 0;
      text.innerText = "";

      let interval = setInterval(function() {
        text.innerText = baseText.slice(0, charCount - (charCount - counter));
        counter++;

        if (counter > charCount) {
          clearInterval(interval);
          text.classList.remove("animating");
          text.classList.add("animated");
        }
      }, config.data.textCharAppearance);
    }
  }
};

let UATester = {
  UA: window.navigator.userAgent,

  init() {
    if (/firefox/gi.test(this.UA)) {
      document.querySelector("html").classList.add("firefox");
    }
  }
};

document.addEventListener("DOMContentLoaded", event => {
  UATester.init();
  log.init();
  setRandom.init();
  mouseMove.init();
});

setTimeout(() => {
  const button = document.querySelector("#start-button");
  button.addEventListener("click", () => {
    const introWrapper = document.querySelector("#introWrapper");
    introWrapper.style.display = "none";

    const gameWrapper = document.querySelector("#gameWrapper");
    gameWrapper.style.display = "block";
    start();

    document.removeEventListener("mousemove", _mouseMove);
    clearInterval(timer1Id);
    clearInterval(timer2Id);
    document.styleSheets[0].disabled = true;
  });
  button.style.opacity = 1;
}, 2000);
