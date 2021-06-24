import {BoardCollapse} from "lib/BoardCollapse";

document.querySelectorAll(".project-column")
  .forEach((board) => new BoardCollapse(board as HTMLElement));
