import { Rect } from '../../models/rect';
export function pentagramIconRect(node) {
    node.iconRect = new Rect(0, 0, 0, 0);
}
export function pentagramTextRect(node) {
    var w = (node.rect.width * 2) / 5;
    var h = (node.rect.height * 2) / 5;
    node.fullTextRect = new Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + (node.rect.height - h) / 2, w, h);
    node.textRect = node.fullTextRect;
}
//# sourceMappingURL=pentagram.rect.js.map