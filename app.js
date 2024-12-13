// JavaScript for the Color Match Game

// Define the array of colors
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal", "brown"];

// Create an array of objects called "boxes"
const boxes = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  color: colors[Math.floor(Math.random() * colors.length)]
}));

// Log the boxes array to check the structure
console.log(boxes);

// Initialize the count variable
let count = 0;

// Select the necessary DOM elements
const countDisplay = document.getElementById("countDisplay");
const gameBoard = document.getElementById("gameBoard");

// Create and append the boxes to the game board
boxes.forEach(box => 
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  boxElement.id = `box-${box.id}`;
  boxElement.style.backgroundColor = box.color;
);

  // Add a click event listener to each box
  boxElement.addEventListener("click", () => {
    // Change the background color randomly
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    boxElement.style.backgroundColor = newColor;
  
    
  // Append the box to the game board
  gameBoard.appendChild(boxElement);
})
