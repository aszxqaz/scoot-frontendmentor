import './less/components/accordion.scss'

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    const accordionItems = accordion.querySelectorAll('.accordion-item')
    accordionItems.forEach((item, i) => {
      item.addEventListener('click', () => {
        const collapse = item.querySelector('.accordion-collapse');
        item.classList.toggle('open');

        if (item.classList.contains('open')) {
          item.setAttribute('aria-expanded', true);
          collapse.setAttribute('aria-hidden', false);
          // collapse.style.maxHeight = collapse.scrollHeight + 'px';
        } else {
          item.setAttribute('aria-expanded', false);
          collapse.setAttribute('aria-hidden', true);
          // collapse.style.maxHeight = null;
        }
      })
    })
  });
});