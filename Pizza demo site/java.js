
    let cart = [];

    function toggleCart() {
      document.getElementById("cart").classList.toggle("active");
      renderCart();
    }

    function addToCart(name, price) {
      cart.push({ name, price });
      renderCart();
    }

    function removeItem(index) {
      cart.splice(index, 1);
      renderCart();
    }

    function renderCart() {
      const itemsDiv = document.getElementById("cart-items");
      itemsDiv.innerHTML = "";
      let total = 0;

      cart.forEach((item, i) => {
        itemsDiv.innerHTML += `
          <div class="cart-item">
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeItem(${i})">X</button>
          </div>
        `;
        total += item.price;
      });

      document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
    }

    function checkout() {
      if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      alert("Gracias por tu pedido! Esta es una demo sin sistema de pago.");
      cart = [];
      renderCart();
      toggleCart();
    }
function togglePizzaBuilder() {
  const builder = document.getElementById("pizza-builder");
  builder.style.display = builder.style.display === "none" ? "block" : "none";
}
/* Pizza Mitad y mitad*/
function toggleHalfPizza() {
  const builder = document.getElementById("half-builder");
  builder.style.display = builder.style.display === "none" ? "block" : "none";
}

function addHalfPizza() {
  const mitad1 = document.getElementById("half1").value;
  const mitad2 = document.getElementById("half2").value;

  if (mitad1 === "" || mitad2 === "") {
    alert("Selecciona ambas mitades.");
    return;
  }

  const pizzaName = `Pizza Mitad ${mitad1} / Mitad ${mitad2}`;
  const price = 18.99;

  addToCart(pizzaName, price);
  alert(`¡Pizza Mitad & Mitad añadida al carrito!\nTotal: $${price.toFixed(2)}`);
  toggleHalfPizza();
}

/* Java de personalizar tu pizza*/
function addCustomPizza() {
  const basePrice = 20.00;
  const ingredientPrice = 5.00;

  const checkboxes = document.querySelectorAll("#pizza-builder input[type='checkbox']:checked");
  const ingredientes = Array.from(checkboxes).map(cb => cb.value);

  if (ingredientes.length === 0) {
    alert("Selecciona al menos un ingrediente.");
    return;
  }

  const totalPrice = basePrice + (ingredientes.length * ingredientPrice);
  const pizzaName = `Pizza Personalizada (${ingredientes.join(", ")})`;

  addToCart(pizzaName, totalPrice);
  alert(`¡Pizza añadida al carrito!\nTotal: $${totalPrice.toFixed(2)}`);
  togglePizzaBuilder();
}


