function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("site").style.marginLeft = "250px";
  document.getElementById("site").style.opacity = "0.4";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("site").style.marginLeft = "0";
  document.getElementById("site").style.opacity = "1";
}