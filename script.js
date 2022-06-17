/*
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
float/clear
inline-block
flexbox
CSS Grid
*/

/*
I think I need to:
1. create a loop at iterates 16 times
2. for each iteration the loop creates a new div and appends it to the html element



*/

for (i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  newDiv.textContent = "div";
  newDiv.classList.add("gridBox");
  document.getElementById("container").appendChild(newDiv);
}

let changeBox = document.querySelector(".gridBox");
changeBox.addEventListener("mouseover", function handleMouseOver() {
  changeBox.style.color = "black";
});
