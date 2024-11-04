document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".cart-icon");
  const totalPriceEl = document.getElementById("total-price");
  let totalItems = 0;
  let totalPrice = 0;

  // Fonction pour mettre à jour le prix total et l'icône du panier
  function updateCart() {
      totalPriceEl.textContent = totalPrice.toFixed(2);
      cartIcon.textContent = `🛒 (${totalItems})`;
  }

  // Gérer l'augmentation et la diminution de la quantité
  document.querySelectorAll(".product-card").forEach((productCard) => {
      const price = parseFloat(productCard.dataset.price);
      const quantityEl = productCard.querySelector(".quantity");
      let quantity = parseInt(quantityEl.textContent);

      // Bouton d'augmentation
      productCard.querySelector(".increase").addEventListener("click", () => {
          quantity++;
          quantityEl.textContent = quantity;
          totalItems++;
          totalPrice += price;
          updateCart();
      });

      // Bouton de diminution
      productCard.querySelector(".decrease").addEventListener("click", () => {
          if (quantity > 0) {
              quantity--;
              quantityEl.textContent = quantity;
              totalItems--;
              totalPrice -= price;
              updateCart();
          }
      });

      // Bouton de remise à zéro de la quantité
      productCard.querySelector(".remove-button").addEventListener("click", () => {
          totalItems -= quantity;
          totalPrice -= price * quantity;
          quantity = 0;
          quantityEl.textContent = quantity;
          updateCart();
      });

      // Bouton de "like" 
      productCard.querySelector(".like-button").addEventListener("click", (event) => {
          event.target.classList.toggle("liked");
          if (event.target.classList.contains("liked")) {
              event.target.textContent = "❤️"; 
          } else {
              event.target.textContent = "♡"; 
          }
      });
  });

  updateCart();
});
