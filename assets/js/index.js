// create a function to open each project website upon clicking the projects card

// create event listeners
let scrollFX = document.getElementsByClassName("scroll");

// create an array from li elements
// add an event listener using forEach?

function scrollFunction2() {
  let e = document.getElementById("el2");
  // This ends the block to the window
  // bottom and also aligns the view to the center
  e.scrollIntoView({
    block: "end",
    behavior: "smooth",
    inline: "center",
  });
}
