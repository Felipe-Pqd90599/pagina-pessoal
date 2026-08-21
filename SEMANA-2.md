# Semana 2 — JavaScript no navegador

Meta da semana: um **to-do list** que funciona de verdade — adicionar e remover tarefas — com JavaScript puro (sem React). No fim, publicado no mesmo GitHub Pages.

Arquivo principal: **`todo.html`** (+ `todo.js` a partir do dia 3).

Regra: se travar 25 minutos, anota a dúvida e segue o próximo passo pequeno.

Material de apoio (só consulta, não maratona de vídeo):

- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)
- [javascript.info — Introdução](https://javascript.info/introduction)

---

## Dia 1 — Hoje: primeiro JavaScript + botão que muda texto

Tempo: 60–90 min.

### O que é JavaScript aqui

HTML = estrutura. CSS = visual. **JavaScript = comportamento** — a página reage a clique, digitação, etc.

O JS roda **no navegador** quando a página abre.

### Passo 1 — Abrir o `todo.html`

Abra `todo.html` no navegador (duplo clique ou F5). Hoje ainda não faz nada — vamos dar vida.

### Passo 2 — Abrir o Console

Chrome/Edge: **F12** → aba **Console**.

Digite e aperte Enter:

```javascript
console.log("Felipe aprendendo JS");
```

Se aparecer a frase embaixo, o JavaScript está funcionando.

### Passo 3 — Ligar o botão ao texto

No final do `todo.html`, **dentro** de `<script>...</script>`, escreva:

```javascript
const botao = document.querySelector("#btn-mudar");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Funcionou! Eu escrevi JavaScript hoje.";
});
```

Salve, F5, clique no botão.

**Leia linha por linha:**

| Linha | O que faz |
|-------|-----------|
| `const` | cria uma variável que não muda de referência |
| `document.querySelector("#btn-mudar")` | pega o elemento com `id="btn-mudar"` |
| `addEventListener("click", ...)` | quando clicar, roda a função |
| `textContent` | troca o texto dentro do `<p>` |

### Passo 4 — Personalize

Mude a frase para algo seu. Troque o texto do botão no HTML se quiser.

### Pronto do dia 1

- [ ] `console.log` funcionou no F12
- [ ] Clique no botão muda o texto do `<p>`
- [ ] Você explica: variável, `querySelector`, evento `click`

Commit (opcional hoje, obrigatório até dia 7):

```powershell
git add .
git commit -m "Semana 2 dia 1: primeiro JavaScript"
git push
```

---

## Dia 2 — Variáveis, funções e contador

Tempo: 75–90 min.

Objetivo: botão que **conta quantas vezes** você clicou.

No `todo.html`, substitua o script do dia 1 por:

```javascript
let cliques = 0;

const botao = document.querySelector("#btn-mudar");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
  cliques = cliques + 1;
  mensagem.textContent = "Você clicou " + cliques + " vez(es).";
});
```

Conceitos novos:

- `let` — variável que pode mudar (diferente de `const`)
- `function` — bloco reutilizável
- `"texto " + variavel` — juntar string com número

**Exercício extra:** se `cliques >= 5`, mude a frase para `"Calma, já foram 5 cliques!"`.

### Pronto do dia 2

- [ ] Contador sobe a cada clique
- [ ] Você sabe a diferença entre `let` e `const`

---

## Dia 3 — DOM: adicionar tarefa na lista

Tempo: 90 min.

Objetivo: campo + botão **Adicionar** → nova `<li>` na lista.

1. Crie o arquivo **`todo.js`** (código separado do HTML — profissional).
2. No `todo.html`, remova o `<script>` inline e coloque antes de `</body>`:

```html
<script src="todo.js"></script>
```

3. Estrutura HTML do to-do (substitua a área do botão de teste):

```html
<section id="todo">
  <h2>Minhas tarefas</h2>
  <form id="form-todo">
    <label for="nova-tarefa">Nova tarefa</label>
    <input id="nova-tarefa" type="text" placeholder="Ex.: revisar HTML" />
    <button type="submit">Adicionar</button>
  </form>
  <ul id="lista-tarefas"></ul>
</section>
```

4. Em `todo.js`:

```javascript
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
  item.textContent = texto;
  lista.appendChild(item);

  input.value = "";
  input.focus();
});
```

Conceitos: `preventDefault`, `createElement`, `appendChild`, `trim`, `value`.

### Pronto do dia 3

- [ ] Digitar e clicar Adicionar cria `<li>` nova
- [ ] Campo vazio não adiciona nada
- [ ] Campo limpa depois de adicionar

---

## Dia 4 — Remover tarefa

Tempo: 90 min.

Objetivo: cada tarefa tem botão **Remover**.

Ao criar o `<li>`, adicione um botão:

```javascript
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
```

Estilize em `styles.css` (ou crie regras `#lista-tarefas li` com flex).

### Pronto do dia 4

- [ ] Adicionar e remover funcionam
- [ ] To-do mínimo completo

---

## Dia 5 — Lógica (10 exercícios)

Tempo: 90 min. **Só Console ou arquivo `exercicios.js`** — não mexe no to-do hoje.

Abra o Console (F12) e resolva. Anote a resposta antes de rodar.

1. Some `7 + 13`.
2. `const nome = "Felipe"` — imprima `"Olá, Felipe"`.
3. Se `idade >= 18`, imprima `"maior"`; senão `"menor"`. Teste com 17 e 20.
4. Array `[3, 7, 2]` — imprima o maior (use `Math.max(...arr)` se quiser).
5. Array `["html", "css", "js"]` — imprima cada item com `for...of`.
6. Função `dobro(n)` que retorna `n * 2`. Teste com 4.
7. Função `par(n)` retorna `true` se par.
8. Array `[1,2,3,4,5]` — só os pares (dica: `filter`).
9. String `"prainha"` — imprima invertida (dica: `split`, `reverse`, `join`).
10. Conte quantas vogais tem em `"Felipe"` (loop + `includes`).

Consulta: [javascript.info — if, loops, arrays](https://javascript.info/).

### Pronto do dia 5

- [ ] Fez os 10 (pode errar; corrige e tenta de novo)
- [ ] Entende `if`, `for`, função, array

---

## Dia 6 — Polir o to-do + CSS

Tempo: 90 min.

- Estilizar `#todo`, lista e botões (reuse `styles.css`)
- Link no `index.html`: `<a href="todo.html">Minhas tarefas</a>` no menu
- Atualizar seção "O que estou aprendendo" com JavaScript
- Testar no celular (F12 → modo mobile)
- **Opcional:** `localStorage` para tarefas não sumirem ao F5 — só se sobrar tempo ([MDN localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage))

### Pronto do dia 6

- [ ] To-do legível no celular
- [ ] `index.html` linka para `todo.html`

---

## Dia 7 — Git + GitHub Pages (de novo)

Tempo: 60 min.

```powershell
git add .
git commit -m "Semana 2: to-do list em JavaScript"
git push
```

Espere 1–2 min. Teste:

- `https://Felipe-Pqd90599.github.io/pagina-pessoal/todo.html`

Mostre para alguém: adicionar e remover tarefa no celular.

### Pronto do dia 7 (semana 2 fechada)

- [ ] To-do no ar no GitHub Pages
- [ ] README atualizado com link do to-do
- [ ] Você explica: DOM, evento, `createElement`, `addEventListener`

---

## O que NÃO fazer nesta semana

- Não instale React, Vue ou jQuery
- Não copie to-do pronto do GitHub — digite o seu
- Não pule o dia 5 (lógica separada do DOM)

Semana 3 (preview): TypeScript leve + começo de React.
