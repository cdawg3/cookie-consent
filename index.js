//selectors
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");

//event listeners
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

//functions
setTimeout(function () {
  modal.style.display = "inline";
}, 1500);
