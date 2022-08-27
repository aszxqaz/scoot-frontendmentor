export class HashRouter {
  private $pages
  private pagesNames
  private $anchors

  constructor() {
    this.$pages = Array.from(document.querySelectorAll(`[data-page]`));
    this.pagesNames = this.$pages.map((page) => page.getAttribute('data-page'));
    this.$anchors = Array.from(document.querySelectorAll(`a`));
    this.initAnchors()
    this.goToInitialPage()
  }

  private goToInitialPage() {
    if (window.location.pathname) {
      this.goTo(window.location.pathname.slice(1))
    }
  }

  private initAnchors() {
    this.$anchors.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = (e.target as HTMLAnchorElement).closest('a')?.getAttribute('href')
        const isSameSite = this.goTo(href || '')
        if (isSameSite) {
          window.scrollTo({ top: 0, behavior: "auto"})
          e.preventDefault();
        }
      });
    });
  }

  goTo(href: string) {
    const index = this.pagesNames.findIndex(name => name === href)
    if (index !== -1) {
      for (const page of this.$pages) {
        if (page === this.$pages[index]) {
          page.classList.remove('none');
          continue;
        }
        page.classList.add('none');
      }
      window.history.pushState("", "", `/${this.pagesNames[index]}`);
      return true
    }
    return false
  }
}