//3 ball here
const area = {
  element: document.getElementById("area"),
  width: 600,
  height: 400,
};

function initialize() {
  area.element.style.width = area.width + "px";
  area.element.style.height = area.height + "px";
  document.body.appendChild(area.element);
}

function moveTo(ball, x, y) {
  ball.element.style.left = x + "px";
  ball.element.style.top = y + "px";
}

function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.height) {
    ball.dy = -ball.dy;
  }
}

function create(color, dx, dy) {
  const newBall = Object.create(this);

  newBall.dx = dx;
  newBall.dy = dy;
  newBall.width = 40;
  newBall.height = 40;

  newBall.element = document.createElement("div");

  newBall.element.style.background = color;
  newBall.element.style.width = newBall.width + "px";
  newBall.element.style.height = newBall.height + "px";

  newBall.element.className += " ball";
  newBall.width = parseInt(newBall.element.style.width);
  newBall.height = parseInt(newBall.element.style.height);
  area.element.appendChild(newBall.element);
  return newBall;
}

function update(ball, x, y) {
  moveTo(ball, x, y);
  setTimeout(function () {
    changeDirectionIfNecessary(ball, x, y);
    update(ball, x + ball.dx, y + ball.dy);
  }, 1000 / 60);
}

initialize();
const ball1 = create("purple", 4, 3);
const ball2 = create("pink", 1, 5);
const ball3 = create("lavender", 2, 2);
moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);

update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);

if (typeof module !== "undefined") {
  module.exports = { update, create, changeDirectionIfNecessary, moveTo, area };
}

//area 2 starts here

const area2 = {
  element: document.getElementById("area2"),
  width: 600,
  height: 400,
};

function initialize2() {
  area2.element.style.width = area2.width + "px";
  area2.element.style.height = area2.height + "px";
  document.body.appendChild(area2.element);
}

function moveTo2(ball, x, y) {
  ball.element.style.left = x + "px";
  ball.element.style.top = y + "px";
}

function changeDirectionIfNecessary2(ball, x, y) {
  if (x < 0 || x > area2.width - ball.width) {
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area2.height - ball.height) {
    ball.dy = -ball.dy;
  }
}

function create2(color, dx, dy) {
  const newBall = Object.create(area2);

  newBall.dx = dx;
  newBall.dy = dy;
  newBall.width = 40;
  newBall.height = 40;

  newBall.element = document.createElement("div");

  newBall.element.style.background = color;
  newBall.element.style.width = newBall.width + "px";
  newBall.element.style.height = newBall.height + "px";

  newBall.element.className += " ball";
  newBall.width = parseInt(newBall.element.style.width);
  newBall.height = parseInt(newBall.element.style.height);
  area2.element.appendChild(newBall.element);
  return newBall;
}

function update2(ball, x, y) {
  moveTo2(ball, x, y);
  setTimeout(function () {
    changeDirectionIfNecessary2(ball, x, y);
    update2(ball, x + ball.dx, y + ball.dy);
  }, 1000 / 60);
}

initialize2();
const ball4 = create2("RebeccaPurple", 4, 3);
const ball5 = create2("pink", 1, 5);
const ball6 = create2("lavender", 2, 2);
const ball7 = create2("DeepPink", 2, 2);
const ball8 = create2("PaleVioletRed", 3, 4);
const ball9 = create2("MediumVioletRed", 2, 3);
const ball10 = create2("HotPink", 4, 2);
const ball11 = create2("Fuchsia", 1, 4);
const ball12 = create2("Orchid", 5, 2);
const ball13 = create2("DarkOrchid", 2, 4);
const ball14 = create2("Thistle", 4, 1);
const ball15 = create2("Plum", 3, 3);
const ball16 = create2("BlueViolet", 1, 2);
const ball17 = create2("MediumPurple", 2, 1);
const ball18 = create2("Magenta", 3, 1);

moveTo2(ball4, 1, 1);
moveTo2(ball5, 10, 10);
moveTo2(ball6, 20, 20);
moveTo2(ball7, 40, 40);
moveTo2(ball8, 50, 50);
moveTo2(ball9, 70, 70);
moveTo2(ball10, 90, 90);
moveTo2(ball11, 70, 70);
moveTo2(ball12, 80, 80);
moveTo2(ball13, 90, 90);
moveTo2(ball14, 100, 100);
moveTo2(ball15, 110, 110);
moveTo2(ball16, 120, 120);
moveTo2(ball17, 130, 130);
moveTo2(ball18, 140, 140);

update2(ball4, 70, 0);
update2(ball5, 20, 200);
update2(ball6, 300, 330);
update2(ball7, 40, 40);
update2(ball8, 100, 100);
update2(ball9, 120, 120);
update2(ball10, 140, 140);
update2(ball11, 500, 150);
update2(ball12, 250, 200);
update2(ball13, 350, 300);
update2(ball14, 450, 100);
update2(ball15, 100, 200);
update2(ball16, 550, 200);
update2(ball17, 300, 50);
update2(ball18, 200, 250);

if (typeof module !== "undefined") {
  module.exports = {
    update2,
    create2,
    changeDirectionIfNecessary2,
    moveTo2,
    area2,
  };
}
