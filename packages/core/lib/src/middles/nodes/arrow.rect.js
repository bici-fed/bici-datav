import { Rect } from '../../models/rect';
export function leftArrowIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function leftArrowTextRect(node) {
    node.textRect = new Rect(node.rect.x + node.rect.height / 2, node.rect.y + node.rect.height / 3, node.rect.width - node.rect.height / 2, node.rect.height / 3);
    node.fullTextRect = node.textRect;
}
export function rightArrowIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function rightArrowTextRect(node) {
    node.textRect = new Rect(node.rect.x, node.rect.y + node.rect.height / 3, node.rect.width - node.rect.height / 2, node.rect.height / 3);
    node.fullTextRect = node.textRect;
}
export function twowayArrowIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function twowayArrowTextRect(node) {
    node.textRect = new Rect(node.rect.x + node.rect.height / 2, node.rect.y + node.rect.height / 3, node.rect.width - node.rect.height, node.rect.height / 3);
    node.fullTextRect = node.textRect;
}
//# sourceMappingURL=arrow.rect.js.map