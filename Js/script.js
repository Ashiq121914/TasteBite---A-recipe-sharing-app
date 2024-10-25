// Navbar start
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
  const search_input_outside = document.getElementById("search-input-outside");
  search_input_outside.classList.add("hide");
}

function toggleSearchAdd() {
  const navbar = document.getElementById("navbar");
  const search_input_outside = document.getElementById("search-input-outside");

  search_input_outside.classList.remove("hide");

  navbar.classList.add("hide");
}

function toggleSearchRemove() {
  const navbar = document.getElementById("navbar");
  const search_input_outside = document.getElementById("search-input-outside");

  search_input_outside.classList.add("hide");

  navbar.classList.remove("hide");
}

// Navbar end
