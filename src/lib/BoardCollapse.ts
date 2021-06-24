const LOCALSTORAGE_KEY = "collapsedBoards";

export class BoardCollapse {
  private board: HTMLElement;
  private menu: HTMLElement;
  private readonly id: string;
  private collapsed: boolean;

  constructor(board: HTMLElement) {
    this.board = board;

    const id = this.board.dataset.id;
    if (!id) throw new Error("Can`t find board ID");
    this.id = id;

    const menu = this.board.querySelector("details-menu");
    if (!menu) throw new Error("Menu was not found");
    this.menu = menu as HTMLElement;

    this.collapsed = this.storedData[this.id] || false;

    this.adjustHeader();
    this.toggleElements();
    this.addMenuItem();
  }

  private get storedData() {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "{}");
  }

  private addMenuItem(): void {
    const item = document.createElement("span");
    item.addEventListener("click", () => this.toggle());
    item.className = "dropdown-item btn-link btn-block text-left";
    item.innerText = "Toggle";
    this.menu.insertBefore(item, this.menu.firstChild);
  }

  private toggle(): void {
    this.collapsed = !this.collapsed;
    const value = JSON.stringify({...(this.storedData), [this.id]: this.collapsed});
    localStorage.setItem(LOCALSTORAGE_KEY, value);
    this.toggleElements();
  }

  private toggleElements(): void {
    this.board.classList.toggle("collapsed", this.collapsed);
    this.menu.classList.toggle("dropdown-menu-e", this.collapsed);
    this.menu.classList.toggle("dropdown-menu-sw", !this.collapsed);
  }

  private adjustHeader(): void {
    const counter = this.board.querySelector(".Counter");
    const header = this.board.querySelector("h3");
    if (!counter || !header) return;

    header.prepend(counter);
    header.style.width = `${header.offsetWidth}px`;
  }
}
