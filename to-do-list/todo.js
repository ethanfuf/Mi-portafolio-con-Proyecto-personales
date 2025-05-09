const input = document.getElementById("nueva-tarea");
const btn = document.getElementById("agregar");
const lista = document.getElementById("lista-tareas");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function renderizarTareas() {
  lista.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    if (tarea.completado) li.classList.add("completado");

    li.addEventListener("click", () => {
      tareas[index].completado = !tarea.completado;
      guardar();
    });

    const borrarBtn = document.createElement("button");
    borrarBtn.textContent = "❌";
    borrarBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tareas.splice(index, 1);
      guardar();
    });

    li.appendChild(borrarBtn);
    lista.appendChild(li);
  });
}

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  renderizarTareas();
}

btn.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto !== "") {
    tareas.push({ texto, completado: false });
    input.value = "";
    guardar();
  }
});

renderizarTareas();
