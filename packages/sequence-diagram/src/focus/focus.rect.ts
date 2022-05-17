import { Node, Rect } from '@bici-topology/core';

export function sequenceFocusIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function sequenceFocusTextRect(node: Node) {
  node.textRect = new Rect(0, 0, 0, 0);
  node.fullTextRect = node.textRect;
}
