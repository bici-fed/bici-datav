import { Rect } from '@bici-topology/core';
export function biciMeasureIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function biciMeasureTextRect(node) {
    var w = 200;
    var h = 30;
    node.textRect = new Rect(node.rect.x + node.rect.width, node.rect.y + (node.rect.height - h) / 2, w, h);
    node.fullTextRect = node.textRect;
}
//# sourceMappingURL=measure.rect.js.map