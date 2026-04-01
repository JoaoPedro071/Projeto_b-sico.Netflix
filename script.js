const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const root = document.documentElement;

const THEME_KEY = 'netflix-alura-theme';

function setToggleText(theme) {
  if (!themeToggle) return;

  if (theme === 'light') {
    themeToggle.innerHTML = '🌙 <span>Modo Escuro</span>';
    themeToggle.setAttribute('aria-label', 'Mudar para modo escuro');
  } else {
    themeToggle.innerHTML = '☀️ <span>Modo Claro</span>';
    themeToggle.setAttribute('aria-label', 'Mudar para modo claro');
  }
}

function applyTheme(theme) {
  if (theme === 'light') {
    root.classList.add('light-mode');
    root.classList.remove('dark-mode');
  } else {
    root.classList.add('dark-mode');
    root.classList.remove('light-mode');
  }
  setToggleText(theme);
}

function toggleTheme() {
  const current = root.classList.contains('light-mode') ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Atualiza automaticamente se o usuário muda a preferência do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return; // não sobrescreve preferência manual

    applyTheme(e.matches ? 'dark' : 'light');
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  });
}

initTheme();