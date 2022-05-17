import { Rect } from '@bici-topology/core';
export function swimlaneHIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function swimlaneHTextRect(node) {
    node.textRect = new Rect(node.rect.x + 10, node.rect.y, 20, node.rect.height);
    node.fullTextRect = node.textRect;
}
//# sourceMappingURL=swimlaneH.rect.js.map