const $burger = document.getElementById('burger');
const $close = document.getElementById('burger-close');
const $nav = document.getElementById('nav');

export function burgerInit() {
  const toggle = () => {
    $burger?.classList.toggle('hidden');
    $close?.classList.toggle('hidden');
    $nav?.classList.toggle('opened');
  };
  console.dir($burger);
  $close?.addEventListener('click', () => {
    toggle();
    document.body.classList.toggle('stop-scroll');
  });
  $burger?.addEventListener('click', () => {
    toggle();
    document.body.classList.toggle('stop-scroll');
  });
  $nav?.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('a') && (e.target as HTMLElement).closest('ul')) return;
    toggle();
    document.body.classList.remove('stop-scroll');

  });
}
