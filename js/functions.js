function redirect() {
    var x = document.getElementById("homeMenuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }