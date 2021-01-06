const easy = [
  "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
  "685329174971485326234761859362574981549618732718293465823946517197852643456137298",
];
const medium = [
  "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
  "619472583243985617587316924158247369926531478734698152891754236365829741472163895",
];
const hard = [
  "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
  "712583694639714258845269173521436987367928415498175326184697532253841769976352841",
];

var selectedNum;
var selectedTile;
var disableSelect;

function startGame(diff) {
  let board = diff[0];
  generateBoard(board);
  //add click to numbers
  for (let i = 0; i < id("number-container").children.length; i++) {
    id("number-container").children[i].addEventListener("click", function () {
      if (!disableSelect) {
        if (this.classList.contains("selected")) {
          this.classList.remove("selected");
          selectedNum = null;
        } else {
          for (let i = 0; i < 9; i++) {
            id("number-container").children[i].classList.remove("selected");
          }
          this.classList.add("selected");
          selectedNum = this;
          updateMove();
        }
      }
    });
  }
}

//create board
function generateBoard(board) {
  //clear previous boards
  clearPrevious();
  //increment tile ids
  let idCount = 0;
  //create tiles
  for (let i = 0; i < 81; i++) {
    let tile = document.createElement("p");
    if (board.charAt(i) != "-") {
      tile.textContent = board.charAt(i);
      tile.style.fontWeight = "900";
      tile.style.background = "lightgrey";
    } else {
      tile.addEventListener("click", function () {
        if (!disableSelect) {
          if (tile.classList.contains("selected")) {
            tile.classList.remove("selected");
            selectedTile = null;
          } else {
            for (let i = 0; i < 81; i++) {
              qsa(".tile")[i].classList.remove("selected");
            }
            tile.classList.add("selected");
            selectedTile = tile;
            updateMove();
          }
        }
      });
    }
    //assign tile id
    tile.id = idCount;
    idCount++;
    tile.classList.add("tile");
    if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54)) {
      tile.classList.add("bottomBorder");
    }
    if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
      tile.classList.add("rightBorder");
    }
    //add tiles to board
    id("board").appendChild(tile);
  }
}

function updateMove() {
  if (selectedTile && selectedNum) {
    selectedTile.textContent = selectedNum.textContent;
    for (let i = 0; i < 81; i++) {
      qsa(".tile")[i].classList.remove("selected");
      selectedTile = null;
    }
    for (let i = 0; i < 9; i++) {
      id("number-container").children[i].classList.remove("selected");
      selectedNum = null;
    }
  }
}

function clearPrevious() {
  //access all tiles
  let tiles = qsa(".tile");
  //remove tiles
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].remove();
  }
  //remove numbers
  for (let i = 0; i < id("number-container").children.length; i++) {
    id("number-container").children[i].classList.remove("selected");
  }
  //remove selected variables
  selectedTile = null;
  selectedNum = null;
}

function id(id) {
  return document.getElementById(id);
}

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return document.querySelectorAll(selector);
}
