export function hashrouterInit() {
  // const sectionName = window.location.hash.slice(1);
  // console.log(window.location);
  // const section = document.querySelector(`[data-page="${sectionName}"]`);
  // if (section) {
  //   for (const el of Array.from(document.querySelectorAll(`[data-page]`))) {
  //     if (el === section) {
  //       el.classList.remove('none');
  //       continue;
  //     }
  //     el.classList.add('none');
  //   }
  // }
}

export function initLinks() {
  const sections = Array.from(document.querySelectorAll(`[data-page]`));
  const pages = sections.map((section) => section.getAttribute('data-page'));

  const anchors = Array.from(document.querySelectorAll(`a`));
  console.log(sections)
  console.log(pages)
  console.log(anchors)

  anchors.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (e.target as HTMLAnchorElement).closest('a')?.getAttribute('href')
      console.log(e.target)
      const index = pages.findIndex(page => page === href)
      if (index !== -1) {
        e.preventDefault();
        for (const el of sections) {
          if (el === sections[index]) {
            el.classList.remove('none');
            continue;
          }
          el.classList.add('none');
        }
        window.history.pushState("", "", `/${pages[index]}`);
      }
    });
  });
}
