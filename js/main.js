function togglemenu() {
  var x = document.getElementById("nav");
  if (x.className === "nav reset-list float-right") {
    x.className += " responsive";
    document.getElementById("title").style.display='none';
  } else {
    x.className = "nav reset-list float-right";
    document.getElementById("title").style.display='block';
  }
}
