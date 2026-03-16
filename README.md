# Akilla Lima — Portfolio

**Head of Product · Payments Infrastructure · PIX · Card Schemes · Blockchain & Tokenization**

Portfólio profissional bilíngue (EN/PT-BR) publicado via GitHub Pages. Zero dependências, sem build step.

---

## 📁 Estrutura

```
/
├── index.html   → Estrutura completa da página
├── style.css    → Design system + layout responsivo
├── script.js    → Traduções EN/PT, animações, WhatsApp
└── README.md    → Este arquivo
```

---

## 🌐 Site publicado

**[akilla-lima.github.io](https://akilla-lima.github.io)**

---

## 📌 Seções do site

| # | Seção | Conteúdo |
|---|---|---|
| 01 | About | Resumo profissional, 7+ anos em fintech, métricas de impacto |
| 02 | Experience | CartWave · Interfocus · Bradesco Bank |
| 03 | Market Intelligence | Indicadores do mercado brasileiro de pagamentos + Agenda BCB |
| 04 | Skills | Payments, Card Schemes, Blockchain, Data Strategy, Open Finance, BaaS |
| 05 | Projects | Open Finance Platform · PIX Automático · Payment Infrastructure · Fintech Dashboard |
| 06 | Contact | WhatsApp · LinkedIn · Email |

---

## ✨ Funcionalidades

| Recurso | Detalhe |
|---|---|
| Bilíngue | EN / PT-BR com persistência via localStorage |
| WhatsApp | Botão flutuante + Hero + Contact com mensagem pré-preenchida por idioma |
| GitHub Pages | HTML/CSS/JS puro — sem build, sem dependências |
| Responsivo | Mobile, tablet e desktop |
| Animações | Scroll reveal, barras de métricas animadas, cursor glow |
| Active nav | Destaca a seção atual durante o scroll |

---

## 🚀 Como publicar no GitHub Pages

### 1. Criar o repositório

No GitHub, crie um repositório com o nome exato:
```
seu-username.github.io
```

### 2. Upload dos arquivos

Na página do repositório vazio, clique em **Add file → Upload files** e envie:
```
index.html
style.css
script.js
```

### 3. Ativar o GitHub Pages

**Settings → Pages → Source:** branch `main` + pasta `/ (root)` → **Save**

O site fica disponível em:
```
https://seu-username.github.io
```

---

## 🛠 Como personalizar

### Textos e traduções
Todas as traduções ficam no objeto `T` dentro de `script.js`:
```js
const T = {
  en: { about_p1: "seu texto em inglês..." },
  pt: { about_p1: "seu texto em português..." }
}
```
Cada chave `data-i18n="chave"` no HTML corresponde a uma entrada em `T`.

### Mensagem do WhatsApp
Também em `script.js`:
```js
const WA_MESSAGES = {
  en: "Hello Akilla...",
  pt: "Olá Akilla..."
}
```

### Cores
No topo de `style.css`:
```css
:root {
  --au:  #d4a843;  /* Dourado — cor de destaque */
  --ink: #080a0f;  /* Fundo principal */
  --wa:  #25d366;  /* Verde WhatsApp */
}
```

### Adicionar um projeto
Copie um bloco `.pj-card` no `index.html` e adicione as chaves correspondentes em `T.en` e `T.pt` no `script.js`.

---

## 📄 Licença

Uso pessoal. Livre para adaptar.
