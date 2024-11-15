document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const headerMenu = document.querySelector('.header-menu');

  hamburgerIcon.addEventListener('click', function() {
      headerMenu.classList.toggle('active');
      hamburgerIcon.classList.toggle('open');
  });
});

  