Netflix Clone — Tela de Seleção de Perfis e Catálogo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Projeto front-end desenvolvido como exercício prático de HTML, CSS e JavaScript, recriando a interface da Netflix. Inclui tela de seleção de perfis, gerenciamento de perfis, catálogo de filmes e séries com trailers em hover, suporte a tema claro/escuro e layout responsivo.

---

Preview

![Tela principal|Modo escuro](screenshots/Captura%20de%20tela%202026-04-01%20195016.png)
![Tela principal|Modo claro](screenshots/Captura%20de%20tela%202026-04-01%20195023.png)
![Segunda tela|Primeira parte](screenshots/Captura%20de%20tela%202026-04-01%20195033.png)
![Segunda tela|Segunda parte](screenshots/Captura%20de%20tela%202026-04-01%20195043.png)


---

Funcionalidades

- Seleção de perfis — Tela inicial com os perfis cadastrados, ao estilo Netflix
- Gerenciamento de perfis — Página dedicada para editar, adicionar e remover perfis
- Catálogo de conteúdo — Seções organizadas por categoria (Épicos, Séries, Para maratonar) com cards interativos
- Trailers em hover — Ao passar o mouse sobre um card, o trailer do YouTube é reproduzido automaticamente via YouTube IFrame API
- Card expandido — Exibe informações do título ao hover: porcentagem de relevância, classificação etária, duração, resolução e gêneros
- Perfil ativo no catálogo — Nome e foto do perfil selecionado são carregados dinamicamente via `localStorage`
- Tema claro/escuro — Alternância de tema com botão fixo, com persistência via `localStorage`
- Preferência do sistema — Detecta automaticamente o tema preferido do sistema operacional (`prefers-color-scheme`)
- Layout responsivo — Adaptado para dispositivos móveis e desktops

---

Estrutura do Projeto

```
netflix-clone/
│
├── index.html              # Tela de seleção de perfis
├── manage-profiles.html    # Tela de gerenciamento de perfis
├── script.js               # Lógica de tema e interações globais
├── style.css               # Estilos globais, temas e responsividade
│
├── catalogo/
│   ├── catalogo.html       # Página do catálogo de filmes e séries
│   ├── catalogo.css        # Estilos do catálogo, cards e navbar
│   └── script.js           # Lógica do catálogo: carrossel, cards e YouTube API
│
└── assets/                 # Imagens dos perfis
    ├── perfil 1.jpg.jpg
    ├── perfil 2.jpeg.jpeg
    ├── perfil 3.jpg.jpg
    └── perfil 4.jpeg.jpeg
```

---

Como executar

Não há dependências ou build necessários. Basta clonar o repositório e abrir o arquivo `index.html` no navegador.

```bash
# Clone o repositório
git clone https://github.com/JoaoPedro071/netflix-clone.git

# Acesse a pasta do projeto
cd netflix-clone

# Abra o arquivo principal no navegador
# No Linux/macOS:
open index.html

# No Windows:
start index.html
```

> Dica: Para melhor experiência com recursos de `localStorage`, caminhos relativos e carregamento da YouTube API, utilize uma extensão como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.

---

Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilização, variáveis CSS, Flexbox, Grid e responsividade |
| JavaScript (Vanilla) | Lógica de tema, carrossel, cards e integração com YouTube |
| YouTube IFrame API | Reprodução de trailers diretamente nos cards do catálogo |
| Font Awesome 6 | Ícones da navbar e botões dos cards |
| Google Fonts | Fontes Bebas Neue, Montserrat e Roboto |

---

Decisões de design

- Variáveis CSS (`:root`) — Todas as cores são definidas como variáveis, facilitando a troca de tema sem duplicação de código
- Tema persistente — A preferência de tema é salva no `localStorage` sob a chave `netflix-alura-theme`, e só é sobrescrita por mudança manual do usuário
- Detecção de sistema — Ao acessar pela primeira vez, o tema é definido automaticamente com base em `prefers-color-scheme`, e atualiza em tempo real caso o usuário mude a preferência
- Perfil dinâmico no catálogo — Nome e imagem do perfil selecionado são lidos do `localStorage` e aplicados na navbar do catálogo
- Trailers sob demanda — Os players do YouTube são criados apenas quando o usuário passa o mouse sobre o card, evitando carregamentos desnecessários
- Controle de reprodução — Ao sair do hover, o vídeo é pausado; ao entrar em outro card, todos os players anteriores são pausados antes de iniciar o novo

---

Responsividade

O layout se adapta automaticamente para telas menores que `768px`, ocultando links de navegação da navbar, reduzindo o tamanho dos cards e ajustando o grid do footer.

---

Melhorias futuras

- Implementar funcionalidade real de adicionar/editar/remover perfis
- Adicionar animação de transição ao selecionar perfil
- Tornar o catálogo dinâmico com busca e filtro por categoria
- Adicionar página de detalhes do título ao clicar no botão de expandir
- Adicionar validação e limite máximo de perfis

---

Licença

Este projeto é de uso educacional e não possui vínculo com a Netflix, Inc. Desenvolvido para fins de estudo e prática de desenvolvimento front-end.
