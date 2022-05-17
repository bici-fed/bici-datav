import { Node, Rect } from '@bici-topology/core';

export function biciPilotIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function biciPilotTextRect(node: Node) {
  const w = 200;
  const h = 30;
  node.textRect = new Rect(
    node.rect.x + node.rect.width,
    node.rect.y + (node.rect.height - h) / 2,
    w,
    h
  );
  node.fullTextRect = node.textRect;
}
