(() => {
  'use strict';
  const toggle = document.querySelector('.language-button');
  const translations = document.querySelectorAll('[data-en][data-zh]');
  function setLanguage(language) {
    const chinese = language === 'zh';
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    translations.forEach(element => { element.textContent = element.dataset[language]; });
    toggle.innerHTML = `${chinese ? 'EN' : '中文'} <span aria-hidden="true">↗</span>`;
    toggle.lang = chinese ? 'en' : 'zh-CN';
    toggle.setAttribute('aria-label', chinese ? 'Switch to English' : '切换为中文');
    document.querySelector('nav').setAttribute('aria-label', chinese ? '主导航' : 'Main navigation');
    document.querySelector('.scroll-link').setAttribute('aria-label', chinese ? '查看研究方向' : 'Scroll to research');
    document.title = chinese ? 'Weiji Hu · 气候与大气科学' : 'Weiji Hu · Climate & Atmospheric Science';
    try { localStorage.setItem('weiji-homepage-language', language); } catch { /* Storage is optional. */ }
  }
  toggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
  try { if (localStorage.getItem('weiji-homepage-language') === 'zh') setLanguage('zh'); } catch { /* Local previews may restrict storage. */ }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
