export function createInteractionController(){
  let didBindHover = false;
  let didBindInputMode = false;
  let teardownNav = () => {};
  let teardownHeaderScroll = () => {};
  let teardownHeaderMetrics = () => {};

  function bindNav(root) {
    const header = root.querySelector('.site-header');
    const toggle = root.querySelector('.nav-toggle');
    const nav = root.querySelector('#primary-nav');
    if (!header || !toggle || !nav) return () => {};

    const linkSelector = '.nav-link';
    let lastFocused = null;

    const setOpen = (nextOpen, { returnFocus = false } = {}) => {
      const isOpen = Boolean(nextOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      nav.hidden = !isOpen;
      header.dataset.menuOpen = String(isOpen);
      window.dispatchEvent(new Event('header:layoutchange'));
      if (isOpen) {
        lastFocused = document.activeElement;
      } else if (returnFocus) {
        toggle.focus();
      }
    };

    const onToggleClick = () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
      if (!isOpen) nav.querySelector(linkSelector)?.focus();
    };

    const onKeydown = (e) => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setOpen(false, { returnFocus: true });
        return;
      }
      if (e.key === 'Tab' && isOpen) {
        const links = [...nav.querySelectorAll(linkSelector)];
        const focusables = [toggle, ...links];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onNavClick = (e) => {
      if (!e.target.closest(linkSelector)) return;
      const shouldClose = window.matchMedia('(max-width: 859px)').matches;
      if (shouldClose) setOpen(false, { returnFocus: false });
    };

    const onFocusIn = (e) => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (!isOpen || header.contains(e.target)) return;
      if (lastFocused instanceof HTMLElement) lastFocused.focus();
      else toggle.focus();
    };

    toggle.addEventListener('click', onToggleClick);
    document.addEventListener('keydown', onKeydown);
    nav.addEventListener('click', onNavClick);
    document.addEventListener('focusin', onFocusIn);
    setOpen(false);

    return () => {
      toggle.removeEventListener('click', onToggleClick);
      document.removeEventListener('keydown', onKeydown);
      nav.removeEventListener('click', onNavClick);
      document.removeEventListener('focusin', onFocusIn);
    };
  }

  function bindHeaderScroll(root) {
    const header = root.querySelector('.site-header');
    if (!header) return () => {};

    const syncScrolledState = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };

    syncScrolledState();
    window.addEventListener('scroll', syncScrolledState, { passive: true });

    return () => {
      window.removeEventListener('scroll', syncScrolledState);
    };
  }

  function bindHeaderMetrics(root) {
    const header = root.querySelector('.site-header');
    if (!header) return () => {};

    const syncHeaderOffset = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--header-offset', `${height}px`);
    };

    syncHeaderOffset();
    const resizeObserver = new ResizeObserver(syncHeaderOffset);
    resizeObserver.observe(header);
    window.addEventListener('resize', syncHeaderOffset);
    window.addEventListener('header:layoutchange', syncHeaderOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncHeaderOffset);
      window.removeEventListener('header:layoutchange', syncHeaderOffset);
    };
  }

  return { init(root){
    teardownNav();
    teardownHeaderScroll();
    teardownHeaderMetrics();
    teardownNav = bindNav(root);
    teardownHeaderScroll = bindHeaderScroll(root);
    teardownHeaderMetrics = bindHeaderMetrics(root);
    if (!didBindInputMode) {
      const setInputMode = (mode) => {
        document.documentElement.dataset.inputMode = mode;
      };
      setInputMode('pointer');
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') setInputMode('keyboard');
      });
      document.addEventListener('pointerdown', () => setInputMode('pointer'));
      didBindInputMode = true;
    }
    if (!didBindHover) {
      root.addEventListener('mouseover', (e)=>{ if(e.target.closest('.btn,.card,.nav-link')) e.target.closest('.btn,.card,.nav-link')?.classList.add('is-hover'); });
      root.addEventListener('mouseout', (e)=>{ e.target.closest('.is-hover')?.classList.remove('is-hover'); });
      didBindHover = true;
    }
  }};
}
