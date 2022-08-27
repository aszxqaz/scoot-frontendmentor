const $burger = document.getElementById('burger');
const $close = document.getElementById('burger-close');
const $nav = document.getElementById('nav')

export function burgerInit() {
  const toggle = () => {
    $burger?.classList.toggle('hidden')
    $close?.classList.toggle('hidden')
    $nav?.classList.toggle('opened')
  }
  console.dir($burger)
  $close?.addEventListener('click', toggle)
  $burger?.addEventListener('click', toggle)
  $nav?.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('a') && (e.target as HTMLElement).closest('ul')) return
    // const sectionName = (e.target as HTMLElement).getAttribute('href')?.slice(1)
    // if (sectionName) {
    //   for(const el of Array.from(document.querySelectorAll(`[data-page]`))) {
    //     if (el.getAttribute('data-page') === sectionName) {
    //       el.classList.remove('none')
    //       continue
    //     }
    //     el.classList.add('none')
    //   }
    // }
    toggle()
  })
}
