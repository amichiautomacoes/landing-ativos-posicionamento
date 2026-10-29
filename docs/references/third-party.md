# Referências e arquivos de terceiros

## Referência visual e depoimento

A composição foi baseada na versão de outubro de 2023 da Enterpret, selecionada pelo usuário em [Landingfolio — Full page / Landing Page](https://www.landingfolio.com/inspiration/post/enterpret).

A captura de referência fica em `design/references/enterpret/landing-page-desktop.png`. Sua origem é [a imagem publicada no Landingfolio](https://landingfoliocom.imgix.net/inspiration/1697770701943Enterpretdesktopca90e2cd8616425cb5912b871953db2dpng). A foto ainda utilizada no depoimento, `app/static/images/testimonials/larisa.png`, foi recortada dessa captura. Marcas, foto e conteúdo pertencem aos respectivos titulares.

## Fontes em uso

Inter e JetBrains Mono são fontes variáveis copiadas do projeto local `site_ativos`, conforme o design system fornecido pelo usuário. As licenças SIL Open Font License 1.1 ficam junto aos arquivos:

- `app/static/fonts/inter/OFL.txt`.
- `app/static/fonts/jetbrains-mono/OFL.txt`.

## Marca e ilustrações

A logo original fornecida pelo usuário fica em `design/originals/brand/logo.png`. A versão publicada, `app/static/images/brand/ativos-logo.png`, foi preparada com ImageGen a pedido do usuário para remover o fundo e refinar as bordas.

As ilustrações de Google, marketing digital e automação comercial foram fornecidas pelo usuário e ficam em `app/static/images/services/`, com suas cores e proporções originais. O vídeo original do hero e sua imagem de apoio ficam em `design/originals/hero/`; as versões publicadas ficam em `app/static/videos/hero/`.

O símbolo usado no favicon e nas decorações, `app/static/images/brand/reference-mark.svg`, foi reconstruído como SVG a partir da reprodução visual e recebeu o destaque Ativos. Os ícones em `app/static/icons/ui.svg` foram desenhados em código neste projeto.

## Ferramentas

A origem das skills instaladas em `.agents/skills/` está registrada em `skills-lock.json`. O adaptador de QA em `tests/browser/support/browser-env.mjs` usa a biblioteca de navegador da skill `design-taste-frontend`.
