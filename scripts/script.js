const slideImages = [
  "./images/photo1.jpg",
  "./images/photo2.jpg",
  "./images/photo3.jpg",
  "./images/photo4.jpg",
  "./images/photo5.jpg",
];

let currentSlideIndex = 0;
const slideshowImage = document.getElementById("slideshowImage");
const slideInterval = 10000; // 5 seconds per photo - change as you like

function showNextSlide() {
  // fade out
  slideshowImage.style.opacity = 0;

  setTimeout(() => {
    // increment index
    currentSlideIndex = (currentSlideIndex + 1) % slideImages.length;

    // update src
    slideshowImage.src = slideImages[currentSlideIndex];
    // fade in
    slideshowImage.style.opacity = 1;
  }, 800); // Wait 0.8s to match the CSS fade-out, then swap image
}

// Start slideshow
setInterval(showNextSlide, slideInterval);


// Custom Cursor Script
(function() {
  const cursor = document.querySelector('.custom-cursor');
  let clickTimeout;

  function moveCursor(e) {
    // position the cursor div at mouse coords
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }

  function clickCursor() {
    // Add the click animation class
    cursor.classList.add('cursor-click');
    // Remove it after animation ends
    clearTimeout(clickTimeout);
    clickTimeout = setTimeout(() => {
      cursor.classList.remove('cursor-click');
    }, 300); // match your CSS animation duration
  }

  // Listen for mouse events
  window.addEventListener('mousemove', moveCursor);
  window.addEventListener('click', clickCursor);
})();





