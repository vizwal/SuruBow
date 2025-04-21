let cartCount = 0;

// Update cart count when an item is added
const updateCart = () => {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartCount;
};

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    updateCart();
  });
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCart);
