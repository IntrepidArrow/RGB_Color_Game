
let number_of_squares = 6;
let colors = generateColorsArray(number_of_squares);
let game_mode = "hard";

let squares = document.querySelectorAll(".square");
let selectedColor = chooseGameColor(colors);
let displayColor = document.querySelector("#displayColor");
let message = document.querySelector("#message");
let rgb_header = document.querySelector("#rgb_header");
let reset_btn = document.querySelector("#reset");
let easy_btn = document.querySelector("#mode_easy");
let hard_btn = document.querySelector("#mode_hard");

init();

function init() {
    setupButtonListeners();
    setupSquareListeners();
    reset_board();
}

function setupButtonListeners() {
    reset_btn.addEventListener("click", function () {
        reset_board(game_mode);
    });

    easy_btn.addEventListener("click", function () {
        hard_btn.classList.remove("selected");
        easy_btn.classList.add("selected");
        reset_board("easy");
    });

    hard_btn.addEventListener("click", function () {
        easy_btn.classList.remove("selected");
        hard_btn.classList.add("selected");
        reset_board("hard");
    });
}

function setupSquareListeners() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor === displayColor.textContent) {
                message.textContent = "Correct!";
                changeAllToSpecificColor(selectedColor);
                rgb_header.style.backgroundColor = selectedColor;
                reset_btn.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Wrong! Try Again!";
            }
        });
    }
}

function changeAllToSpecificColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function chooseGameColor(colorsArray) {
    let index = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[index];
}

function generateColorsArray(number) {
    let colorsArray = [];
    for (let i = 0; i < number; i++) {
        colorsArray.push(generateRandomColor());
    }
    return colorsArray;
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset_board(mode) {
    rgb_header.style.backgroundColor = "steelblue";
    message.textContent = "";
    reset_btn.textContent = "New Colors!"

    if (mode === "easy") {
        game_mode = "easy";
        number_of_squares = 3;
        for (let i = 3; i <= 5; i++) {
            squares[i].classList.add("hide_block");
        }
    } else {
        game_mode = "hard";
        number_of_squares = 6;
        for (let i = 3; i <= 5; i++) {
            squares[i].classList.remove("hide_block");
        }
    }

    colors = generateColorsArray(number_of_squares);
    selectedColor = chooseGameColor(colors);
    displayColor.textContent = selectedColor;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}