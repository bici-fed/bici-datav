import { Rect } from '../../models/rect';
export function cloudIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function cloudTextRect(node) {
    node.textRect = new Rect(node.rect.x + node.rect.width / 4, node.rect.y + node.rect.height / 4, node.rect.width / 2, (node.rect.height * 6) / 11);
    node.fullTextRect = node.textRect;
}
//# sourceMappingURL=cloud.rect.js.map