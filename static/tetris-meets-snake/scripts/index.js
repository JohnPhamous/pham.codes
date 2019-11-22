"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

//external interface
var Tetris =
  /*#__PURE__*/
  (function() {
    function Tetris(scoreUpdateCallback, gameOverCallback) {
      _classCallCheck(this, Tetris);

      this.scoreUpdateCallback = scoreUpdateCallback;
      this.gameOverCallback = gameOverCallback;
      var cellSize = 20;
      var canvas = document.querySelector(".tetrisCanvas");
      var mapWidth = 10;
      var mapHeight = 26;
      canvas.width = mapWidth * cellSize;
      canvas.height = mapHeight * cellSize;
      var ctx = canvas.getContext("2d");
      this.game = new Game(this.onScoreUpdated.bind(this), mapWidth, mapHeight);
      this.speed = 350;
      this.renderer = new Renderer(ctx, cellSize);
      var previewCanvas = document.querySelector(".tetrisPreviewCanvas");
      var previewCtx = previewCanvas.getContext("2d");
      var previewCellSize = 10;
      previewCanvas.width = 6 * previewCellSize;
      previewCanvas.height = 6 * previewCellSize;
      this.preview = new Preview(previewCtx, previewCellSize);
    }

    _createClass(Tetris, [
      {
        key: "start",
        value: function start() {
          clearTimeout(this.timeout);
          this.game.reset();
          this.renderer.setStyle(gameStyle);
          this.preview.render(this.game.nextPiece);
          this.timeout = setTimeout(this.onTick.bind(this), this.speed);
        }
      },
      {
        key: "stop",
        value: function stop() {
          clearTimeout(this.timeout);
        }
      },
      {
        key: "moveLeft",
        value: function moveLeft() {
          this.updatePiece(move(this.game.currentPiece, -1, 0));
        }
      },
      {
        key: "moveRight",
        value: function moveRight() {
          this.updatePiece(move(this.game.currentPiece, 1, 0));
        }
      },
      {
        key: "moveDown",
        value: function moveDown() {
          this.updatePiece(move(this.game.currentPiece, 0, 1));
        }
      },
      {
        key: "rotate",
        value: function rotate() {
          this.updatePiece(_rotate(this.game.currentPiece, 1));
        }
      },
      {
        key: "hardDrop",
        value: function hardDrop() {
          var validPosition = this.game.currentPiece;
          var mapHeight = this.game.mapHeight; //upper bound for loop

          for (var i = 0; i < mapHeight; i++) {
            var nextPiece = move(validPosition, 0, 1);

            if (isPositionValid(this.game.map, nextPiece)) {
              validPosition = nextPiece;
            } else {
              break;
            }
          }

          this.game.addPiece(validPosition);
          this.game.sendNextPiece();
          this.preview.render(this.game.nextPiece);
          this.render();
        }
      },
      {
        key: "updatePiece",
        value: function updatePiece(nextPiece) {
          if (this.game.updatePiece(nextPiece)) {
            this.render();
          }
        }
      },
      {
        key: "onScoreUpdated",
        value: function onScoreUpdated() {
          this.scoreUpdateCallback(this.game.lines);
        }
      },
      {
        key: "onTick",
        value: function onTick() {
          var newPos = move(this.game.currentPiece, 0, 1);

          if (!this.game.updatePiece(newPos)) {
            if (this.game.currentPiece.y === 0) {
              this.gameOverCallback();
              this.renderer.setStyle(gameOverStyle);
              this.render();
              return;
            } else {
              this.game.addPiece(this.game.currentPiece);
              this.game.sendNextPiece();
              this.preview.render(this.game.nextPiece);
            }
          }

          this.render();
          this.timeout = setTimeout(this.onTick.bind(this), this.speed);
        }
      },
      {
        key: "render",
        value: function render() {
          this.renderer.renderMap(this.game.map);
          this.renderer.renderPiece(this.game.currentPiece);
        }
      }
    ]);

    return Tetris;
  })();
var pieces = [
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ], //T
  [
    [1, 1, 1, 1],
    [0, 0, 0, 0]
  ], //I
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ], //S
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ], //Z
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ], //L
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ], //J
  [
    [1, 1],
    [1, 1]
  ] //O
]; //mutable state

var Game =
  /*#__PURE__*/
  (function() {
    function Game(scoreUpdateCallback, mapWidth, mapHeight) {
      _classCallCheck(this, Game);

      this.scoreUpdateCallback = scoreUpdateCallback;
      this.mapWidth = mapWidth;
      this.mapHeight = mapHeight;
      this.map = [];
    }

    _createClass(Game, [
      {
        key: "reset",
        value: function reset() {
          for (var j = 0; j < this.mapHeight; j++) {
            this.map[j] = [];

            for (var i = 0; i < this.mapWidth; i++) {
              this.map[j][i] = 0;
            }
          }

          this.lines = 0;
          this.sendNextPiece();
          this.sendNextPiece();
        }
      },
      {
        key: "updatePiece",
        value: function updatePiece(newPiece) {
          if (isPositionValid(this.map, newPiece)) {
            this.currentPiece = newPiece;
            return true;
          }

          return false;
        }
      },
      {
        key: "sendNextPiece",
        value: function sendNextPiece() {
          this.currentPiece = this.nextPiece;
          var map = pieces[Math.floor(Math.random() * pieces.length)];
          var mapW = map[0].length;
          this.nextPiece = {
            mapW: mapW,
            mapH: map.length,
            x: Math.floor((this.mapWidth - mapW) / 2),
            y: 0,
            map: map
          };
        }
      },
      {
        key: "removeLines",
        value: function removeLines() {
          var _this = this;

          var lines = 0;

          var _loop = function _loop(_j) {
            var row = _this.map[_j];

            if (
              row.every(function(v) {
                return v;
              })
            ) {
              row.forEach(function(v, i) {
                return (row[i] = 0);
              });

              _this.map.splice(_j, 1);

              _this.map.unshift(row);

              lines++;
              _j--;
            }

            j = _j;
          };

          for (var j = 0; j < this.mapHeight; j++) {
            _loop(j);
          }

          this.updateScore(lines);
        }
      },
      {
        key: "updateScore",
        value: function updateScore(linesToAdd) {
          this.lines += linesToAdd;
          this.scoreUpdateCallback(this.lines);
        }
      },
      {
        key: "addPiece",
        value: function addPiece(piece) {
          for (var _j2 = 0; _j2 < piece.mapH; _j2++) {
            for (var i = 0; i < piece.mapW; i++) {
              var x = i + piece.x;
              var y = _j2 + piece.y;

              if (piece.map[_j2][i]) {
                this.map[y][x] = 1;
              }
            }
          }

          this.removeLines();
        }
      }
    ]);

    return Game;
  })();

var gameStyle = {
  background: "#2b213a",
  currentItem: "#34f4fd",
  map: "#2b213a"
};
var gameOverStyle = {
  background: "#2b213a",
  currentItem: "#f000be",
  map: "#2b213a"
};

var Renderer =
  /*#__PURE__*/
  (function() {
    function Renderer(ctx, cellSize) {
      _classCallCheck(this, Renderer);

      this.ctx = ctx;
      this.cellSize = cellSize;
      this.style = gameStyle;
    }

    _createClass(Renderer, [
      {
        key: "setStyle",
        value: function setStyle(style) {
          this.style = style;
        }
      },
      {
        key: "renderMap",
        value: function renderMap(map) {
          var c = this.cellSize;
          this.ctx.fillStyle = this.style.background;
          var mapWidth = map[0].length;
          var mapHeight = map.length;
          this.ctx.fillRect(0, 0, mapWidth * c, mapHeight * c);
          this.ctx.fillStyle = "#f97e72";

          for (var _j3 = 0; _j3 < mapHeight; _j3++) {
            for (var i = 0; i < mapWidth; i++) {
              if (map[_j3][i]) {
                this.ctx.fillRect(i * c, _j3 * c, c, c);
              }
            }
          }
        }
      },
      {
        key: "renderPiece",
        value: function renderPiece(piece) {
          this.ctx.fillStyle = this.style.currentItem;
          var c = this.cellSize;
          var p = piece;

          for (var _j4 = 0; _j4 < p.mapH; _j4++) {
            for (var i = 0; i < p.mapW; i++) {
              if (piece.map[_j4][i]) {
                this.ctx.fillRect((p.x + i) * c, (p.y + _j4) * c, c, c);
              }
            }
          }
        }
      }
    ]);

    return Renderer;
  })();

var Preview =
  /*#__PURE__*/
  (function() {
    function Preview(ctx, cellSize) {
      _classCallCheck(this, Preview);

      this.ctx = ctx;
      this.cellSize = cellSize;
    }

    _createClass(Preview, [
      {
        key: "render",
        value: function render(piece) {
          var w = this.ctx.canvas.width;
          var h = this.ctx.canvas.height;
          this.ctx.clearRect(0, 0, w, h);
          this.ctx.fillStyle = "#72f1b8";
          var c = this.cellSize;
          var p = piece;
          var ox = 0.5 * (w - p.mapW * this.cellSize);
          var oy = 0.5 * (h - p.mapH * this.cellSize);

          for (var _j5 = 0; _j5 < p.mapH; _j5++) {
            for (var i = 0; i < p.mapW; i++) {
              if (piece.map[_j5][i]) {
                this.ctx.fillRect(ox + i * c, oy + _j5 * c, c, c);
              }
            }
          }
        }
      }
    ]);

    return Preview;
  })();

function move(piece, dx, dy) {
  var clone = clonePiece(piece);
  clone.x += dx;
  clone.y += dy;
  return clone;
}

function _rotate(piece, dir) {
  var clone = clonePiece(piece);
  clone.mapW = piece.mapH;
  clone.mapH = piece.mapW;
  clone.map = [];

  for (var _j6 = 0; _j6 < clone.mapH; _j6++) {
    clone.map[_j6] = [];

    for (var i = 0; i < clone.mapW; i++) {
      clone.map[_j6][i] = piece.map[piece.mapH - i - 1][_j6];
    }
  }

  return clone;
}

function clonePiece(piece) {
  return {
    map: piece.map.concat(),
    mapW: piece.mapW,
    mapH: piece.mapH,
    x: piece.x,
    y: piece.y
  };
}

function isInMap(mapWidth, mapHeight, x, y) {
  var fitsWidth = x >= 0 && x < mapWidth;
  var fitsHeight = y >= 0 && y < mapHeight;
  return fitsWidth && fitsHeight;
}

function isPositionValid(map, piece) {
  var mapWidth = map[0].length;
  var mapHeight = map.length;

  for (var _j7 = 0; _j7 < piece.mapH; _j7++) {
    for (var i = 0; i < piece.mapW; i++) {
      if (piece.map[_j7][i]) {
        var x = i + piece.x;
        var y = _j7 + piece.y;

        if (!isInMap(mapWidth, mapHeight, x, y) || map[y][x]) {
          return false;
        }
      }
    }
  }

  return true;
}

var Snake =
  /*#__PURE__*/
  (function() {
    function Snake() {
      _classCallCheck(this, Snake);

      this.elements = [{}];
      this.direction = {
        x: 1,
        y: 0
      };
      this.nextDirection = {
        x: 1,
        y: 0
      };
    }

    _createClass(Snake, [
      {
        key: "init",
        value: function init(x, y) {
          this.elements.length = 1;
          var head = this.elements[0];
          head.x = Math.floor(x);
          head.y = Math.floor(y);
          this.setDirection(1, 0);
        }
      },
      {
        key: "setDirection",
        value: function setDirection(x, y) {
          if ((x === 0) === (y === 0)) {
            return;
          }

          x = Math.sign(x);
          y = Math.sign(y);

          if (
            (x && x === -this.direction.x) ||
            (y && y === -this.direction.y)
          ) {
            return;
          }

          this.nextDirection.x = x;
          this.nextDirection.y = y;
        }
      },
      {
        key: "update",
        value: function update() {
          var head = this.elements[0];
          var tail = this.elements.length ? this.elements.pop() : head;
          this.direction.x = this.nextDirection.x;
          this.direction.y = this.nextDirection.y;
          tail.x = head.x + this.direction.x;
          tail.y = head.y + this.direction.y;
          this.elements.unshift(tail);
        }
      },
      {
        key: "collides",
        value: function collides(x, y, ignoreHead) {
          var n = this.elements.length;
          var begin = ignoreHead == undefined || !ignoreHead ? 0 : 1;

          for (var i = begin; i < n; i++) {
            var emt = this.elements[i];

            if (emt.x == x && emt.y == y) {
              return true;
            }
          }

          return false;
        }
      },
      {
        key: "grow",
        value: function grow() {
          var n = this.elements.length;
          var tail = n > 1 ? this.elements[n - 1] : this.elements[0];
          this.elements.push({
            x: tail.x,
            y: tail.y
          });
        }
      },
      {
        key: "setLength",
        value: function setLength(length) {
          var diff = length - this.elements.length;

          if (diff < 0) {
            this.elements.length = length;
          } else {
            for (var i = 0; i < diff; i++) {
              this.grow();
            }
          }
        }
      },
      {
        key: "getHead",
        value: function getHead() {
          return this.elements[0];
        }
      }
    ]);

    return Snake;
  })();

var Items =
  /*#__PURE__*/
  (function() {
    function Items(area, snake) {
      _classCallCheck(this, Items);

      this.area = area;
      this.snake = snake;
      this.currentItem = {};
      this.resetItem();
    }

    _createClass(Items, [
      {
        key: "resetItem",
        value: function resetItem() {
          var isPositionValid = true;
          var x, y;

          do {
            x = Math.floor(Math.random() * this.area.width);
            y = Math.floor(Math.random() * this.area.height);
            isPositionValid = !this.snake.collides(x, y, true);
          } while (!isPositionValid);

          this.currentItem.x = x;
          this.currentItem.y = y;
        }
      }
    ]);

    return Items;
  })();

var gameStyle$1 = {
  background: "#2b213a",
  item: "#fe4450",
  snake: "#34f4fd"
};
var gameOverStyle$1 = {
  background: "#2b213a",
  item: "#fe4450",
  snake: "white"
};

var DisplayArea =
  /*#__PURE__*/
  (function() {
    function DisplayArea(area, ctx, cellSize) {
      _classCallCheck(this, DisplayArea);

      this.area = area;
      this.ctx = ctx;
      this.cellSize = cellSize;
      this.style = gameStyle$1;
    }

    _createClass(DisplayArea, [
      {
        key: "setStyle",
        value: function setStyle(style) {
          this.style = style;
        }
      },
      {
        key: "clear",
        value: function clear() {
          this.ctx.fillStyle = this.style.background;
          this.ctx.fillRect(
            0,
            0,
            this.area.width * this.cellSize,
            this.area.height * this.cellSize
          );
        }
      },
      {
        key: "displayItem",
        value: function displayItem(item) {
          this.ctx.fillStyle = this.style.item;
          var s = this.cellSize;
          this.ctx.fillRect(item.x * s, item.y * s, s, s);
        }
      },
      {
        key: "displaySnake",
        value: function displaySnake(snake) {
          this.ctx.fillStyle = this.style.snake;
          var x = -1;
          var y = -1;
          var n = snake.elements.length;
          var s = this.cellSize;

          for (var i = 0; i < n; i++) {
            var element = snake.elements[i];

            if (x == element.x && y == element.y) {
              return;
            }

            x = element.x;
            y = element.y;
            this.ctx.fillRect(x * s, y * s, s, s);
          }
        }
      }
    ]);

    return DisplayArea;
  })();

var Game$1 =
  /*#__PURE__*/
  (function() {
    function Game(scoreUpdateCallback, gameOverCallback) {
      _classCallCheck(this, Game);

      this.scoreUpdateCallback = scoreUpdateCallback;
      this.gameOverCallback = gameOverCallback;
      this.canvas = document.querySelector(".snakeCanvas");
      var cellSize = 15;
      this.area = {
        width: 35,
        height: 35
      };
      this.canvas.width = this.area.width * cellSize;
      this.canvas.height = this.area.height * cellSize;
      this.ctx = this.canvas.getContext("2d");
      this.snake = new Snake();
      this.items = new Items(this.area, this.snake);
      this.displayArea = new DisplayArea(this.area, this.ctx, cellSize);
      this.displayArea.setStyle(gameStyle$1);
      this.speed = 100;
    }

    _createClass(Game, [
      {
        key: "setDirection",
        value: function setDirection(x, y) {
          this.snake.setDirection(x, y);
        }
      },
      {
        key: "update",
        value: function update() {
          this.snake.update();
          var head = this.snake.getHead();
          var bitesItself = this.snake.collides(head.x, head.y, true);
          var isOutside =
            head.x < 0 ||
            head.x > this.area.width - 1 ||
            head.y < 0 ||
            head.y > this.area.height - 1;

          if (bitesItself || isOutside) {
            this.displayArea.setStyle(gameOverStyle$1);
            this.display();
            this.gameOverCallback();
            return;
          } else {
            var item = this.items.currentItem;

            if (item.x == head.x && item.y == head.y) {
              this.items.resetItem();
              this.snake.grow();
              this.updateScore();
            }
          }

          this.display();
          this.timeout = setTimeout(this.update.bind(this), this.speed);
        }
      },
      {
        key: "updateScore",
        value: function updateScore() {
          this.score++;
          this.scoreUpdateCallback(this.score);
        }
      },
      {
        key: "display",
        value: function display() {
          this.displayArea.clear();
          this.displayArea.displayItem(this.items.currentItem);
          this.displayArea.displaySnake(this.snake);
        }
      },
      {
        key: "start",
        value: function start() {
          this.score = 0;
          this.snake.init(0.5 * this.area.width, 0.5 * this.area.height);
          this.snake.setLength(10);
          this.items.resetItem();
          this.displayArea.setStyle(gameStyle$1);
          clearTimeout(this.timeout);
          this.update();
        }
      },
      {
        key: "stop",
        value: function stop() {
          clearTimeout(this.timeout);
        }
      }
    ]);

    return Game;
  })();

var tetris = new Tetris(onTetrisScoreUpdate, onGameOver);
var snake = new Game$1(onSnakeScoreUpdate, onGameOver);
var url = new URL(window.location);
var isSeparate = url.searchParams.get("separate") === "true";

function onDirection(e) {
  if (isSeparate) {
    //tetris
    switch (e.keyCode) {
      case 32: {
        e.preventDefault();
        tetris.hardDrop();
        break;
      }

      case 37: {
        //Left
        e.preventDefault();
        tetris.moveLeft();
        break;
      }

      case 38: {
        //Up
        e.preventDefault();
        tetris.rotate();
        break;
      }

      case 39: {
        //Right
        e.preventDefault();
        tetris.moveRight();
        break;
      }

      case 40: {
        //Down
        e.preventDefault();
        tetris.moveDown();
        break;
      }
      //snake

      case 65:
      case 81: {
        //A Q Left
        e.preventDefault();
        snake.setDirection(-1, 0);
        break;
      }

      case 87:
      case 90: {
        //W Z Up
        e.preventDefault();
        snake.setDirection(0, -1);
        break;
      }

      case 68: {
        //D Right
        e.preventDefault();
        snake.setDirection(1, 0);
        break;
      }

      case 83: {
        //S Down
        e.preventDefault();
        snake.setDirection(0, 1);
        break;
      }
    }
  } else {
    switch (e.keyCode) {
      case 32: {
        e.preventDefault();
        tetris.hardDrop();
        break;
      }

      case 65:
      case 81:
      case 37: {
        //A Q Left
        e.preventDefault();
        tetris.moveLeft();
        snake.setDirection(-1, 0);
        break;
      }

      case 87:
      case 90:
      case 38: {
        //W Z Up
        e.preventDefault();
        tetris.rotate();
        snake.setDirection(0, -1);
        break;
      }

      case 68:
      case 39: {
        //D Right
        e.preventDefault();
        tetris.moveRight();
        snake.setDirection(1, 0);
        break;
      }

      case 83:
      case 40: {
        //S Down
        e.preventDefault();
        tetris.moveDown();
        snake.setDirection(0, 1);
        break;
      }
    }
  }
}

var tetrisHighScores = [];
var tetrisScore = 0;
var tetrisScoreElt = document.querySelector(".js-tetrisScore");
var tetrisHighScoresElt = document.querySelector(".js-tetrisHighScores");
var snakeScore = 0;
var snakeScoreElt = document.querySelector(".js-snakeScore");

function start() {
  snakeScore = 0;
  tetrisScore = 0;
  tetris.start();
  snake.start();
  tetrisScoreField.innerHTML = 0;
  snakeScoreField.innerHTML = 0;
  window.addEventListener("keydown", onDirection);
}

function getWeightedScore(game) {
  const TETRIS_WEIGHT = 5;

  const leftTetris = game.value * TETRIS_WEIGHT;
  const leftSnake = game.other.value;
  return leftTetris + leftSnake;
}

function compareScore(a, b) {
  return getWeightedScore(b) - getWeightedScore(a);
}

function onGameOver() {
  tetris.stop();
  snake.stop();
  window.removeEventListener("keydown", onDirection);

  var currentGameScore = {
    value: tetrisScore,
    other: {
      name: "snake",
      value: snakeScore
    }
  };

  const weightedScore = getWeightedScore(currentGameScore);
  currentGameScore["weightedScore"] = weightedScore;

  const SCORE_THRESHOLD_TO_UPLOAD =
    tetrisHighScores[tetrisHighScores.length - 1]["weightedScore"];

  if (weightedScore > SCORE_THRESHOLD_TO_UPLOAD) {
    const initials =
      prompt("You made the Top 5 scores! What are your initials?") || "N/A";
    currentGameScore["initials"] = initials;
    tetrisHighScores.push(currentGameScore);
    tetrisHighScores = tetrisHighScores.sort(compareScore).slice(0, 5);
    uploadScore(currentGameScore);
  } else {
    alert("Game over!");
  }
  getHighScores();

  setTimeout(start, 500);
}

function retrieveScores() {
  if (localStorage.highscores) {
    const highScores = JSON.parse(localStorage.highscores);
    tetrisHighScores = highScores.tetrisHighScores.sort(compareScore);
  }
}

const tetrisScoreField = document.querySelector(".tetrisScore");

function onTetrisScoreUpdate(score) {
  tetrisScore = score;
  tetrisScoreField.innerHTML = tetrisScore;
}

const snakeScoreField = document.querySelector(".snakeScore");

function onSnakeScoreUpdate(score) {
  snakeScore = score;
  snakeScoreField.innerHTML = snakeScore;
}

function displayHighScores(elt, highScores) {
  const scores = highScores
    .map((score, index) => {
      return `
      <tr>
        <td class="highscore-rank">${index + 1}${getScoreSuffix(index + 1)}</td>
        <td>${score.initials}</td>
        <td align="right">${score.value}</td>
        <td align="right">${score.other.value}</td>
      </tr>
    `;
    })
    .join("");

  const tableContent = `
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Tetris Score</th>
      <th>Snake Score</th>
    </tr>
    ${scores}
  `;

  elt.innerHTML = tableContent;
}

function getScoreSuffix(rankNumber) {
  switch (rankNumber) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    case 4:
    case 5:
      return "th";
  }
}

getHighScores();

function uploadScore(data) {
  return firebase
    .firestore()
    .collection("scores")
    .add(data);
}

function getHighScores() {
  return firebase
    .firestore()
    .collection("scores")
    .get()
    .then(snapshots => {
      const allScores = [];
      snapshots.forEach(snapshot => {
        allScores.push(snapshot.data());
      });

      const sortedAllScores = allScores.sort(compareScore).slice(0, 5);

      localStorage.highscores = JSON.stringify({
        tetrisHighScores: sortedAllScores
      });
      retrieveScores();
      displayHighScores(tetrisHighScoresElt, tetrisHighScores);
    });
}
