# 🛸 Design System — Dark Tech & Cyberpunk

Documentação agnóstica de Design System para **Website**, **Instagram** (Feed, Stories, Reels, Carrossel) e **LinkedIn** (Posts, Artigos, Carrosséis e Banners).

---

## 1. Fundamentos Visuais (Tokens Globais)

### 1.1. Paleta de Cores

| Nome do Token | Código HEX | RGB | Função no Layout |
| :--- | :--- | :--- | :--- |
| **`color-accent-light`** | `#92C1FD` | `rgb(146, 193, 253)` | Destaques primários, palavras-chave, elementos focais |
| **`color-text-primary`** | `#FFFFFF` | `rgb(255, 255, 255)` | Títulos principais, contraste máximo, CTAs primários |
| **`color-text-secondary`**| `#8E95A5` | `rgb(142, 149, 165)` | Subtítulos, metadados, handles, textos complementares |
| **`color-bg-main`** | `#0C0E12` | `rgb(12, 14, 18)` | Fundo principal (Dark Mode absoluto) |
| **`color-bg-surface`** | `#1A1D24` | `rgb(26, 29, 36)` | Cards, caixas de código, contêineres e elevações |
| **`color-border`** | `#1E2C3F` | `rgb(30, 44, 63)` | Divisores, bordas de componentes e botões pílula |
| **`color-glow`** | `#2B5899` | `rgb(43, 88, 153)` | Pontos de luz, névoa ambiente e iluminação focal |

### 1.2. Tipografia

* **Fontes de Display / Títulos:** *Inter*, *Montserrat* ou *Bebas Neue* (Pesos: 800/900, Caixa Alta).
* **Fontes de Corpo / Código:** *Inter* (Pesos: 400/500/600) ou *JetBrains Mono* / *Fira Code* (para elementos técnicos).

---

## 2. Bloco: Website (Web App & Landing Pages)

### 2.1. Tokens CSS & Configuração Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0C0E12',
          surface: '#1A1D24',
          accent: '#92C1FD',
          muted: '#8E95A5',
          border: '#1E2C3F',
          glow: '#2B5899',
        }
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  }
}
```

### 2.2. Componentes Web

* **Botão Primário (Glassmorphism / Glow):**
  * Fundo: `transparent` ou `#1A1D24` com `backdrop-filter: blur(8px)`
  * Borda: `1px solid #1E2C3F` (Hover: `1px solid #92C1FD`)
  * Texto: `#FFFFFF` (Hover: `#92C1FD`)
  * Raio de Borda: `999px` (Pílula) ou `8px`
* **Card de Conteúdo / Código:**
  * Fundo: `#1A1D24` com opacidade `80%`
  * Borda: `1px solid #1E2C3F`
  * Efeito visual: Sombra interna e névoa suave `#2B5899` no fundo do contêiner.

---

## 3. Bloco: Instagram (Todos os Formatos)

### 3.1. Feed Quadrado (1080 x 1080 px) & Vertical (1080 x 1350 px)
* **Estrutura de Capa:**
  * **Header (Fixo):** Logo/Ícone alinhado à esquerda | Categoria em caixa alta à direita (`FONTE MONO` / `#8E95A5`).
  * **Visual Central:** Imagem conceitual com iluminação `#2B5899` focalizada e contraste alto.
  * **Tipografia de Impacto:** Título em 2 a 4 linhas intercalando cores:
    * Linha 1: `#FFFFFF` (Texto Primário)
    * Linha 2: `#92C1FD` (Destaque Ciano)
  * **Footer (Fixo):** Botão pílula `ARRASTE →` (`#FFFFFF` + borda `#1E2C3F`).

### 3.2. Carrossel (1080 x 1350 px)
* **Slide 1 (Capa):** Padrão de foco total no hook visual e título curto de alto impacto.
* **Slides Internos (Conteúdo):**
  * Fundo: `#0C0E12` contínuo.
  * Caixas de texto/código: `#1A1D24` com bordas `#1E2C3F`.
  * Numeração do slide/Progresso: Canto superior direito em `#8E95A5`.
* **Slide Final (CTA):**
  * Chamada clara para ação (Comentar, Salvar, Compartilhar) utilizando caixa em destaque `#1A1D24` com borda e texto `#92C1FD`.

### 3.3. Stories (1080 x 1920 px)
* **Zonas de Segurança:** Manter conteúdos principais a 250px do topo e do rodapé.
* **Fundo:** Textura `#0C0E12` com gradiente radial `#2B5899` centralizado.
* **Caixas de Enquete/Caixa de Pergunta:** Utilizar estilo Glassmorphism escuro (`#1A1D24` semitransparente) com texto em `#FFFFFF`.

### 3.4. Reels / Vídeo (1080 x 1920 px)
* **Legendas Dinâmicas:**
  * Fonte: *Inter Bold* / Caixa Alta
  * Cor de fundo das palavras ativas: Destaque `#92C1FD` com texto escuro `#0C0E12` ou texto `#FFFFFF` com brilho ciano.
* **Capa de Reels:** Seguir exatamente a mesma regra do Feed Vertical (1080x1350 px) com o assunto centralizado.

---

## 4. Bloco: LinkedIn

### 4.1. Carrossel em PDF (1080 x 1350 px / 1920 x 1080 px)
* **Estilo Técnico/Profissional:**
  * Uso prioritário de diagramações limpas com blocos de código (`#1A1D24`), listas e tópicos bem espaçados.
  * Rodapé técnico com indicação de página (`Pág. 01 / 05`) e barra de progresso fina em `#92C1FD` na borda inferior.

### 4.2. Imagem Única para Posts (1200 x 627 px ou 1080 x 1350 px)
* **Proporção da Imagem:** Formato retangular landscape (1200x627) para artigos/links ou 1080x1350 para imagens de destaque.
* **Composição:** Imagem de fundo dark com overlay `#0C0E12` (80%), título principal curto em `#FFFFFF` e palavra de destaque em `#92C1FD`.

### 4.3. Banner de Perfil / Company Page (1584 x 396 px)
* **Fundo:** `#0C0E12` com névoa fluida/abstrata em `#2B5899`.
* **Lado Esquerdo:** Limpo (reservado para a foto de perfil).
* **Lado Direito:** Proposição de valor curta (1 linha) em `#FFFFFF` e palavra de impacto em `#92C1FD` + ícones da stack/tecnologias em tom `#8E95A5`.

---

## 5. Diretrizes do Sistema (Do's & Don'ts)

### ✅ Fazer (Do's)
* Manter a regra de contraste: sempre intercalar textos brancos com destaques em azul ciano (`#92C1FD`).
* Utilizar bordas finas (`1px`) para separar contêineres e manter o aspecto técnico/limpo.
* Aplicar o ponto de iluminação focal (`#2B5899`) sempre atrás do objeto/elemento principal da arte.

### ❌ Não Fazer (Don'ts)
* Nunca utilizar fundos claros, brancos ou cinzas luminosos em nenhum canal.
* Não misturar cores quentes (vermelho, amarelo, laranja) como cor principal; reservar cores quentes exclusivamente para alertas de erro de código.
* Evitar sobrecarregar a tela com múltiplos pontos de iluminação intensa (manter 1 ponto de brilho por peça).