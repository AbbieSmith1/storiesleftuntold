// Collapsible
document.querySelectorAll(".piece").forEach(piece => {
  piece.querySelector(".collapsible").onclick = () => {
    piece.classList.toggle("active");
  };
});

// Dark mode toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Locked piece
function unlockPiece() {
  const pass = prompt("enter password:");
  if (pass === "untold") {
    document.getElementById("secret").style.display = "block";
  } else {
    alert("still hidden.");
  }
}

// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable copy keys
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && ['c','u','s'].includes(e.key)) {
    e.preventDefault();
  }
});