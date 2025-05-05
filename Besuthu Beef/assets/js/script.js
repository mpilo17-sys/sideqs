// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the navbar toggler button
    const navbarToggler = document.querySelector('.navbar-toggler');
  
    // Get the navbar nav content
    const navbarNavAltMarkup = document.getElementById('navbarNavAltMarkup');
  
    // Add a click event listener to the navbar toggler button
    if (navbarToggler && navbarNavAltMarkup) {
      navbarToggler.addEventListener('click', () => {
        // Toggle the 'show' class on the navbar nav content
        navbarNavAltMarkup.classList.toggle('show');
  
        // Toggle the 'aria-expanded' attribute on the navbar toggler button
        navbarToggler.setAttribute('aria-expanded', navbarNavAltMarkup.classList.contains('show'));
      });
    }
  });
document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.querySelector('#carouselExample');
  var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2500,
      ride: 'carousel'
  });

  var showMoreBtn = document.querySelector('.show-more-btn');
  var galleryContainer = document.querySelector('.gallery-container');

  showMoreBtn.addEventListener('click', function () {
      galleryContainer.classList.toggle('hidden');
  });

  var popups = document.querySelectorAll('.popup');
  var closeButtons = document.querySelectorAll('.popup-close');
  var galleryImages = document.querySelectorAll('.gallery-item img');

  galleryImages.forEach(function(image) {
      image.addEventListener('click', function() {
          var popupId = image.getAttribute('data-bs-target');
          document.querySelector(popupId).classList.add('active');
      });
  });

  closeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          button.parentElement.classList.remove('active');
      });
  });

  document.addEventListener('click', function(event) {
      if (event.target.classList.contains('popup')) {
          event.target.classList.remove('active');
      }
  });
});