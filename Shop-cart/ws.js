document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".total-price .total");
  const totalPriceEl = document.querySelector(".total-price .total");
  let totalItems = 0;
  let totalPrice = 0;

  function updateCart() {
    totalPriceEl.textContent = `${totalPrice.toFixed(2)} $`;
    cartIcon.textContent = `Total: ${totalPrice.toFixed(2)} $ (${totalItems} items)`;
  }

  document.querySelectorAll(".card-body").forEach((productCard) => {
    const price = parseFloat(
      productCard.querySelector(".unit-price").textContent.replace(" $", "")
    );
    const quantityEl = productCard.querySelector(".quantity");
    let quantity = parseInt(quantityEl.textContent);

    productCard.querySelector(".fa-plus-circle").addEventListener("click", () => {
      quantity++;
      quantityEl.textContent = quantity;
      totalItems++;
      totalPrice += price;
      updateCart();
    });

    productCard.querySelector(".fa-minus-circle").addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        quantityEl.textContent = quantity;
        totalItems--;
        totalPrice -= price;
        updateCart();
      }
    });

    productCard.querySelector(".fa-trash-alt").addEventListener("click", () => {
      totalItems -= quantity;
      totalPrice -= price * quantity;
      quantity = 0;
      quantityEl.textContent = quantity;
      updateCart();
    });

    // Gestion de l'icône de cœur
    productCard.querySelector(".fa-heart").addEventListener("click", (event) => {
      event.target.classList.toggle("liked");  // Ajoute ou enlève la classe liked pour changer la couleur
    });
  });

  updateCart();
});
