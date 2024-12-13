// JavaScript for the Color Match Game

// Define the array of colors
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal", "brown"];

// Create an array of objects 
const objects = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  color: colors[Math.floor(Math.random() * colors.length)]
}));

// Log the boxes array to check the structure
console.log(objects);

// Initialize the count variable
let count = 0;

// Select the necessary DOM elements
const countDisplay = document.getElementById("countDisplay");
const gameBoard = document.getElementById("gameBoard");

// Create and append the boxes to the game board
object.forEach(object => 
  constboxElement = document.createElement("div");
  objectElement.classList.add("object");
  objectElement.id = `object-${object.id}`;
  objectElement.style.backgroundColor = object.color;
)

  // Add a click event listener to each box
  boxElement.addEventListener("click", () => {
    // Change the background color randomly
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    objectElement.style.backgroundColor = newColor;
  
    
  // Append the box to the game board
  gameBoard.appendChild(objectElement);
})
