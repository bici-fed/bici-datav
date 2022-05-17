import { Rect } from '../../models/rect';
export function peopleIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function peopleTextRect(node) {
    node.textRect = new Rect(0, 0, 0, 0);
    node.fullTextRect = node.textRect;
}
//# sourceMappingURL=people.rect.js.map