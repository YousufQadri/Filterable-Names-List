// Grab input element
let filter = document.getElementById("filterInput");

// Add event listener
filter.addEventListener("keyup", searchName);

function searchName() {
  // Get filter value - Convert to uppercase for comparision
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  // Get names ul
  let ul = document.getElementById("names");

  // Grab li from ul
  let li = ul.querySelectorAll("li.collection-item");

  //  Loop through li items
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    // If name matches
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
