let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

// Getting all squares to assign RGB values to each by index  
let squares = document.querySelectorAll(".square");
let selectedColor = colors[4];
let displayColor = document.querySelector("#displayColor");

// Display the selected color value to the page header/title
displayColor.textContent = selectedColor;

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === displayColor.textContent) {
            alert("CORRECT!");
        } else {
            alert("WRONG!!!");
        }
    });

}
