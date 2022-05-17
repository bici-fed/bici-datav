import { Rect } from '@bici-topology/core';
export function forkIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function forkTextRect(node) {
    node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, node.rect.height);
    node.fullTextRect = node.textRect;
}
//# sourceMappingURL=fork.rect.js.map