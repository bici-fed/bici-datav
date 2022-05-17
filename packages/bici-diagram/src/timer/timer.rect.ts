import { Node, Rect } from '@bici-topology/core';



export function biciTimerIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function biciTimerTextRect(node: Node) {
  const w = (node.rect.width * 5) / 7;
  const h = (node.rect.height * 5) / 7;
  node.textRect = new Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + (node.rect.height - h) / 2, w, h);
  node.fullTextRect = node.textRect;
}
