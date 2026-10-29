---
type: design-doc
status: Accepted
date: 2026-10-29
language: pt-BR
---

# Organização do projeto

A landing usa um pacote Flask, templates por seção, JavaScript por comportamento e cinco camadas CSS. A organização e a limpeza foram autorizadas pelo usuário. O [inventário](inventario-arquivos.csv) descreve os arquivos da estrutura vigente.

## Estrutura

~~~text
ativos_posicionamento_digital/
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── routes.py
│   ├── template_helpers.py
│   ├── services/contact_links.py
│   ├── templates/
│   │   ├── base.html
│   │   ├── pages/home.html
│   │   ├── partials/
│   │   ├── components/
│   │   └── sections/
│   └── static/
│       ├── css/pages/
│       ├── js/modules/
│       ├── images/
│       ├── icons/
│       ├── videos/hero/
│       └── fonts/
├── design/
│   ├── originals/
│   └── references/enterpret/
├── docs/
│   ├── brand/
│   ├── design/
│   └── references/
├── scripts/
│   ├── dev/
│   └── qa/
├── tests/
│   ├── integration/
│   └── browser/support/
├── reports/qa/
├── runtime/
├── requirements/
├── .agents/skills/
├── .taste-skill/
├── .venv/
├── .env.example
├── .gitignore
├── requirements.txt
├── skills-lock.json
├── run.py
└── README.md
~~~

## Responsabilidades

| Local | Responsabilidade |
|---|---|
| `app/__init__.py` | Cria o Flask e registra configuração, rotas e auxiliares |
| `app/config.py` | Lê `PORT` e `WHATSAPP_NUMBER` do ambiente |
| `app/routes.py` | Renderiza a página e prepara seu contexto |
| `app/services/contact_links.py` | Normaliza o telefone e monta o contato configurado |
| `app/template_helpers.py` | Gera URLs de estáticos com versão baseada no arquivo |
| `run.py` | Inicia a aplicação local |
| `app/templates/pages/home.html` | Define a ordem das sete seções |
| `app/templates/sections/` | Conteúdo de cada seção |
| `app/templates/partials/` | Cabeçalho e rodapé |
| `app/templates/components/` | Elementos reutilizados, como o botão de contato |
| `app/static/js/modules/` | Inicializadores de menu, vídeo, depoimento e animações |

Os módulos JavaScript verificam os elementos de que precisam antes de inicializar. A página usa módulos nativos, sem compilação adicional.

Os estilos carregam nesta ordem: `tokens.css`, `base.css`, `layout.css`, `components.css` e `pages/home.css`. Os arquivos concentram, respectivamente, valores compartilhados, regras gerais, estrutura, componentes e composição da landing.

## Arquivos publicados e fontes de trabalho

`app/static/` contém as mídias, fontes e arquivos entregues ao navegador. A aplicação publica somente a página e os arquivos estáticos atuais; as rotas antigas foram retiradas.

`design/originals/` conserva a logo e os materiais originais do hero. `design/references/enterpret/` conserva a captura que orienta a composição. A [documentação de terceiros](../references/third-party.md) registra as origens e as licenças das fontes publicadas.

As skills permanecem em `.agents/skills/` com seu lock. `.taste-skill/brief.md` descreve a landing vigente e `direction.json` registra sua direção visual.

## Desenvolvimento e verificação

Os comandos e a preparação do ambiente estão no [README](../../README.md).

- `scripts/dev/start.ps1` inicia ou reutiliza o servidor local.
- `scripts/dev/stop.ps1` valida e encerra o processo registrado do projeto.
- `scripts/qa/inspect.ps1` executa a inspeção da skill de design.
- `tests/integration/test_routes.py` verifica a página, as mídias, as requisições parciais de vídeo e os limites da área pública.
- `tests/browser/landing.mjs` verifica quatro larguras, menu, links internos, vídeo, depoimento, movimento reduzido e conteúdo sem JavaScript.

`reports/qa/` recebe resultados atuais e regeneráveis. `runtime/` recebe PID e logs da execução local. Ambiente virtual, caches, configuração local e saídas geradas ficam fora do versionamento.

## Dependências

`requirements/base.txt` define Flask e python-dotenv. `production.txt` acrescenta Waitress. As extensões previamente declaradas permanecem em `optional.txt` até a definição de seu uso futuro; nenhum pacote do ambiente foi desinstalado. A instalação completa continua disponível por `requirements.txt`.

## Limpeza aplicada

Foram removidos o backup e os scripts temporários da migração, os relatórios de versões anteriores, fontes e recortes sem uso, SVGs substituídos, o extrator exclusivo da referência antiga, o briefing anterior e a camada de compatibilidade de URLs. O briefing vigente e a documentação foram atualizados para a estrutura final. As evidências atuais da reorganização foram mantidas.

Layout, copy, mídias publicadas e configuração de contato foram preservados. Condições comerciais, público e diferenciais, substituição do depoimento, ativação do WhatsApp e publicação continuam sendo decisões separadas.
