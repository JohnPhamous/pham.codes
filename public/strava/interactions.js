const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const root = document.documentElement;

menuButton.addEventListener("click", () => {
  switch (menu.style.display) {
    case "block":
      menu.style.display = "none";
      break;
    case "none":
      menu.style.display = "block";
      break;
    default:
      menu.style.display = "block";
      break;
  }
});

function colorChange(type, value) {
  root.style.setProperty(`--${type}`, value);
}

function changeStroke(value) {
  root.style.setProperty(`--strokeWidth`, `${value}px`);
}

function changeDrawingSize(value) {
  console.log(value, width);
  width = parseInt(value, 10);
  clear();
  main();
}
