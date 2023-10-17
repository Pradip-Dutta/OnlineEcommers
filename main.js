const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartNotification = document.getElementById('cart-notification');

let cartCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartCount++;
    cartNotification.textContent = cartCount;
  });
});
