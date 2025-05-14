let cart = [];

function toggleCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.classList.toggle("active");
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
  const itemsContainer = document.getElementById("cart-items");
  itemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    itemsContainer.innerHTML += `
      <div class="item">
        <span>${item.name} - $${item.price.toFixed(2)}</span>
        <button onclick="removeItem(${index})">X</button>
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

  alert("Gracias por tu pedido. Esta es una demo sin sistema de pago.");
  cart = [];
  renderCart();
  toggleCart();
}
// Mostrar imagen ampliada
function showImage(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let dotsContainer = document.getElementById('dots-container');

// Crear los puntitos
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.onclick = () => showSlide(i);
  dotsContainer.appendChild(dot);
});
let dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// Auto-play
setInterval(() => {
  nextSlide();
}, 3000); // cada 3 segundos

// Activar el primero al cargar
showSlide(0);
