function onScroll() {
  chanceHeader();
}

function chanceHeader() {
  const nav = document.getElementById("nav")

  if(scrollY === 0) {
    nav.classList.remove("scroll")
  } else {
    nav.classList.add("scroll")
  }
}