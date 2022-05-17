import { Node, Rect } from '@bici-topology/core';

export function simpleCardIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function simpleCardTextRect(node: Node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}
