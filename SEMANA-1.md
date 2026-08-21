# Semana 1 — Página pessoal (HTML)

Meta da semana: uma página sobre você, aberta no navegador, com conteúdo verdadeiro. CSS de verdade só nos dias 5 e 6. GitHub no dia 1 (conta) e no dia 7 (código no ar).

Regra: se travar 25 minutos, anota a dúvida e segue o próximo passo pequeno.

---

## Dia 1 — Hoje: ambiente + “Olá, mundo”

Tempo: 60–90 min.

### 1. Conta no GitHub (obrigatório hoje)

1. Abra [https://github.com/signup](https://github.com/signup)
2. Use um e-mail que você acessa. Senha forte.
3. Username curto e profissional (`felipe-silva`, não `xXgamerXx`).
4. Confirme o e-mail.
5. Anote o username. Você vai usar o resto da carreira.

Não precisa criar repositório ainda. Só a conta.

### 2. Instalar o Git (Windows)

1. Baixe em [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Instale com as opções padrão. Deixe marcado “Git from the command line”.
3. Feche e abra o Cursor de novo.
4. No terminal: `git --version` — tem que aparecer um número. Se não aparecer, o Cursor ainda está com o terminal antigo: feche tudo e abra de novo.



### 3. Mexer neste arquivo

Abra `index.html`. Troque:

- o texto do `<h1>` para o seu nome (ex.: `Olá, eu sou o Felipe`)
- o `<p>` para uma frase verdadeira: de onde você é, por que está aprendendo

Salve (`Ctrl+S`).

### 4. Ver no navegador

No Explorer do Windows, clique duas vezes em `index.html`. O Chrome/Edge abre a página.

Cada vez que salvar, volte no navegador e aperte `F5`.

### Pronto do dia 1

- [x] Conta GitHub criada e e-mail confirmado
- [x] `git --version` funciona
- [x] `index.html` tem o seu nome, não “Olá, mundo” genérico
- [x] Você abriu a página no navegador e deu F5 depois de salvar

---



## Dia 2 — Anatomia do HTML

Tempo: 75–90 min. Sem CSS.

Leia só o essencial: [MDN — Introdução ao HTML](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started).

No `index.html`, use estas tags (todas elas, pelo menos uma vez):


| Tag                        | Para quê                               |
| -------------------------- | -------------------------------------- |
| `header`, `main`, `footer` | estrutura da página                    |
| `h1` (só um) e `h2`        | títulos                                |
| `p`                        | parágrafos                             |
| `ul` + `li`                | lista (ex.: o que você quer aprender)  |
| `a href="..."`             | link (GitHub, LinkedIn, ou “em breve”) |
| `strong` e `em`            | ênfase                                 |
| `<!-- comentário -->`      | uma nota para você                     |


Não copie um template da internet. Escreva sobre você.

### Pronto do dia 2

- [x] Um `h1` só
- [x] `header` / `main` / `footer`
- [x] Uma lista com 3 itens
- [x] Um link que realmente abre (teste no navegador)
- [x] Você explica em voz alta: “tag”, “atributo”, “head vs body”

---



## Dia 3 — Conteúdo da página pessoal

Tempo: 75–90 min. Ainda quase sem CSS.

Três seções no `main`:

1. **Sobre mim** — 4–6 linhas reais. Cidade, o que faz hoje, por que programação.
2. **O que estou aprendendo** — lista da semana 1 (HTML, Git, GitHub).
3. **Contato** — e-mail como link `mailto:` e o link do GitHub (`https://github.com/SEU_USER`).

Opcional: uma foto sua na pasta do projeto (`foto.jpg`) e `<img src="foto.jpg" alt="Foto de Felipe">`. Sem foto, pule — não precisa.

### Pronto do dia 3

- [x] As 3 seções existem e não são Lorem Ipsum
- [ ] `mailto:` abre o e-mail ao clicar
- [x] Link do GitHub aponta para o seu perfil (mesmo vazio)

---



## Dia 4 — Formulário e acessibilidade

Tempo: 75–90 min.

No final do `main`, um formulário de “me manda uma mensagem” (não precisa enviar de verdade):

- `form`
- `label` ligado ao campo (`for` + `id`)
- `input` nome
- `input type="email"`
- `textarea` mensagem
- `button type="submit"` — ao clicar pode só recarregar a página; está ok

Acessibilidade mínima:

- todo `img` com `alt` útil (ou `alt=""` se for só enfeite)
- contraste: texto escuro em fundo claro, por enquanto
- dá para navegar com Tab entre os campos

Leia: [MDN — Formulários](https://developer.mozilla.org/pt-BR/docs/Learn/Forms) (só a intro + os controles acima).

### Pronto do dia 4

- [x] Cada campo tem `label`
- [x] Tab passa pelos campos em ordem
- [x] Você sabe dizer por que `label` existe (leitor de tela + clique no texto foca o campo)

---



## Dia 5 — CSS de verdade (parte 1)

Tempo: 90 min.

Crie `styles.css` na mesma pasta e no `head`:

```html
<link rel="stylesheet" href="styles.css" />
```

No CSS, só isso (sem framework):

- cor de fundo e cor do texto
- fonte (`font-family`)
- espaço interno (`padding`) e entre seções (`margin`)
- largura máxima do conteúdo (`max-width` + `margin: 0 auto`) para não esticar em tela larga
- estilo de links e do botão

Leia: [MDN — Começando com CSS](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/CSS_basics).

### Pronto do dia 5

- [x] Sem CSS “colado” dentro do HTML (`style="..."` só se for teste rápido; apague depois)
- [x] Página não está mais com visual de documento Word cru
- [x] Você mudou uma cor, deu F5, viu a mudança

---



## Dia 6 — Celular (responsivo)

Tempo: 90 min.

- `flex` no header (nome à esquerda, links à direita)
- no celular, os links descem ou ficam em coluna (`flex-wrap` ou `@media`)
- `@media (max-width: 600px)` com fonte e padding menores
- teste: no Chrome, F12 → ícone de celular. Ou diminua a janela.

Não precisa ficar bonito como um site de agência. Precisa ser legível no telefone.

### Pronto do dia 6

- [x] Você abriu no modo celular do Chrome
- [x] Texto não sai da tela (sem scroll horizontal)
- [x] Botão e links dá para tocar com o dedo (área grande o suficiente)

---



## Dia 7 — Git + GitHub + mostrar para alguém

Tempo: 90 min.

No terminal, **dentro da pasta** `pagina-pessoal`:

```powershell
git init
git add .
git commit -m "Primeira versão da página pessoal"
```

Se o Git pedir nome e e-mail (só uma vez na vida nesta máquina):

```powershell
git config --global user.name "Seu Nome"
git config --global user.email "o-mesmo-email-do-github@exemplo.com"
```

No GitHub no navegador:

1. **New repository**
2. Nome: `pagina-pessoal`
3. Público
4. **Não** marque README (a pasta já tem arquivos)
5. Siga as instruções “push an existing repository”

```powershell
git branch -M main
git remote add origin https://github.com/SEU_USER/pagina-pessoal.git
git push -u origin main
```

Vai abrir login do GitHub. Entre com a conta do dia 1.

**GitHub Pages:** no repositório → Settings → Pages → Branch `main` → Save. Em 1–2 minutos o site fica em `https://SEU_USER.github.io/pagina-pessoal/`.

Escreva o `README.md`: quem é você, o que é o projeto, o link das Pages.

Mostre o link para uma pessoa. Peça: “abre no celular e me diz se lê fácil”.

### Pronto do dia 7 (semana 1 fechada)

- [ ] Código no GitHub
- [ ] Link das Pages abre no celular de outra pessoa
- [ ] README com 5–10 linhas em português
- [ ] Você sabe: `add` prepara, `commit` fotografa, `push` envia

---



## O que NÃO fazer nesta semana

- Não instale React, Bootstrap nem “template HTML grátis”
- Não assista um curso de 8 horas no lugar de editar o arquivo
- Não pule o GitHub “para depois” — a conta é no dia 1, o push no dia 7

