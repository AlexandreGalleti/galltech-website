# GallTech — Site oficial

Site estático (HTML/CSS/JS puro) pronto para hospedar no **GitHub Pages**.

## Estrutura

```
/
├── index.html              → Home
├── hardware.html           → Serviços de hardware (acento azul)
├── software.html           → Serviços de software (acento cyan)
├── business-systems.html   → Sistemas empresariais (acento verde)
├── managed-it.html         → Planos de TI gerenciada (com preços)
├── styles.css              → Estilos compartilhados (paleta da logo)
├── script.js                → Menu mobile, pixels animados, reveal, formulário
├── assets/
│   ├── logo.png             → Logo oficial (GallTech)
│   └── logo-old-backup.png  → Logo anterior (GalTech, uma L) — backup
└── README.md
```

## Como publicar no GitHub Pages

Conta: `AlexandreGalleti` · Repositório: `galltech-website`

1. Crie um repositório novo em https://github.com/new — nome `galltech-website`, público.
2. Em **Add file → Upload files**, arraste todo o conteúdo desta pasta (incluindo a subpasta `assets/`) e faça o commit.
3. Em **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. Em 1–2 minutos o site estará em `https://AlexandreGalleti.github.io/galltech-website/`.

> Todos os caminhos são relativos, então funciona tanto em subpasta do GitHub Pages quanto em domínio próprio depois (apontar CNAME).

### Alternativa via terminal (se preferir git em vez do upload pela web)

```bash
git init
git add .
git commit -m "GallTech site v1"
git branch -M main
git remote add origin https://github.com/AlexandreGalleti/galltech-website.git
git push -u origin main
```

## Pendências (resolver quando possível)

- [ ] Domínio + e-mail próprio: hoje o site mostra `contact@galltechsystems.com` como placeholder — Ale vai comprar o domínio e o e-mail juntos.
- [ ] Formulário de contato: ainda sem Formspree conectado. Enquanto isso, o formulário mostra "Please call us at (864) 875-7106" em vez de tentar enviar. Para ativar: criar conta em formspree.io → criar formulário → copiar o endpoint (`https://formspree.io/f/xxxxxxxx`, aba **Integration**) → colar no `action` do `<form>` em `index.html` (linha com `YOUR_FORM_ID`).
- [ ] Logo: versão atual é uma reinterpretação rápida gerada para o rebrand de hoje (GalTech → GallTech). Vale substituir por uma arte final de um designer quando possível — o backup do logo antigo está em `assets/logo-old-backup.png`.
- [ ] (Opcional) Domínio próprio: Settings → Pages → Custom domain.

## Paleta (extraída da logo oficial)

| Cor | Hex |
|---|---|
| Deep (fundo) | `#0D1226` |
| Navy (cards) | `#161D39` |
| Blue | `#016FEE` |
| Cyan | `#0FDAF0` |
| Green | `#45F08A` |
| Gradiente | `#016FEE → #0FDAF0 → #45F08A` |
