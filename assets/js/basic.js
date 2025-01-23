const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');

    header.classList.toggle('active');
    if (header.classList.contains('active')) {
      body.style.maxHeight = body.scrollHeight + 'px';
      icon.textContent = '-';
    } else {
      body.style.maxHeight = '0';
      icon.textContent = '+';
    }
  });
});