window.addEventListener("scroll", (event) => {
  const headerWrapper = document.querySelector('.header-wrapper');

  if (window.scrollY > 190) {
    headerWrapper.classList.add("nav-down");
  }
  else {
    headerWrapper.classList.remove("nav-down");
  }
});

contactInfo = document.getElementById('contact-info-js');
contactInfo.addEventListener("mouseover", () => {
  contactInfo.innerHTML = "Testing";
});

contactInfo.addEventListener("mouseout", () => {
  contactInfo.innerHTML = `<a><img class="contact-info-icon" src="/images/contact-info.png"></a>`;
});