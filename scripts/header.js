window.addEventListener("scroll", (event) => {
  const headerWrapper = document.querySelector('.header-wrapper');

  if (window.scrollY > 190) {
    headerWrapper.classList.add("nav-down");
  }
  else {
    headerWrapper.classList.remove("nav-down");
  }
})