const form = document.querySelector("#form-todo");
const input = document.querySelector("#nova-tarefa");
const lista = document.querySelector("#lista-tarefas");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();
  if (texto === "") {
    return;
  }

  const item = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const btnRemover = document.createElement("button");
  btnRemover.type = "button";
  btnRemover.textContent = "Remover";
  btnRemover.addEventListener("click", function () {
    item.remove();
  });

  item.appendChild(span);
  item.appendChild(btnRemover);
  lista.appendChild(item);

  input.value = "";
  input.focus();
});
