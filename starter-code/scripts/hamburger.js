document.getElementById('icon-hamburger').addEventListener("click", openHamburger);
document.getElementById("close-hamburger").addEventListener("click", closeHamburger);


function openHamburger()
{
  document.getElementById("dropdown-list").style.display = "block";
  console.log("hi");
}

function closeHamburger()
{
  document.getElementById("dropdown-list").style.display = "none";
  console.log("hi2");
}
