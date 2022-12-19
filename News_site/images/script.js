/* Place your JavaScript in this file */
/* For the Overlay Navigation*/
function openNav() {document.getElementById("myNav").style.height = "100%";}
function closeNav() {document.getElementById("myNav").style.height = "0%";}

/* This is for Accordion */
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}