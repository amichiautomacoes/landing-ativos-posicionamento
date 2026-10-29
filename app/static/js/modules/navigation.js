export function initNavigation() {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation-content');
  if (!menuButton || !navigation) return;
  const mobileNavigation = window.matchMedia('(max-width: 1020px)');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir navegação');
    navigation.classList.remove('is-open');
  };
  const syncMenu = () => {
    menuButton.hidden = !mobileNavigation.matches;
    if (!mobileNavigation.matches) closeMenu();
  };
  syncMenu();
  mobileNavigation.addEventListener('change', syncMenu);

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Fechar navegação' : 'Abrir navegação');
    navigation.classList.toggle('is-open', expanded);
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.navigation-content a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const hadOpenMenu = menuButton.getAttribute('aria-expanded') === 'true';
    closeMenu();
    if (hadOpenMenu) menuButton.focus();
  });


}
