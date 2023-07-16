// Function to create the grid squares
function createGrid(numSquares) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear existing grid
  
    container.style.width = `${numSquares * 31}px`; // Adjust container width
  
    for (let i = 0; i < numSquares * numSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
  
  // Function to handle square hover effect
  function handleSquareHover(e) {
    const square = e.target;
    square.style.backgroundColor = getRandomColor();
  }
  
  // Function to generate a random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Function to reset the grid based on user input
  function resetGrid() {
    const numSquares = prompt("Enter the number of squares per side (maximum 100):");
    if (numSquares && !isNaN(numSquares) && numSquares <= 100) {
      createGrid(Number(numSquares));
      addSquareEventListeners();
    } else {
      alert("Invalid input! Please enter a number up to 100.");
    }
  }
  
  // Function to add event listeners to the squares
  function addSquareEventListeners() {
    const squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("mouseover", handleSquareHover);
    }
  }
  
  // Add event listener to the reset button
  document.getElementById("reset-button").addEventListener("click", resetGrid);
  
  // Initial grid creation
  createGrid(16);
  addSquareEventListeners();
  