document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;

  const cartCountElement = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Update cart display
  const updateCart = () => {
    cartCountElement.textContent = cartCount;
  };

  // Add to cart buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      updateCart();
    });
  });

  // Hamburger menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  updateCart(); // Initialize
});
