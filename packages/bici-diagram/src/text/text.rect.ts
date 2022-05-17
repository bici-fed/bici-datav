import { Node, Rect } from '@bici-topology/core';

export function simpleTextIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function simpleTextTextRect(node: Node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 40);
  node.fullTextRect = node.textRect;
}
