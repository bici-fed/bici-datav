import { Rect } from '../../models/rect';
export function triangleIconRect(node) {
    var w = (node.rect.width * 2) / 7;
    var h = (node.rect.height * 2) / 7;
    if (w > h) {
        w = h;
    }
    else {
        h = w;
    }
    var top = w;
    if (top < 10) {
        top = 10;
    }
    node.iconRect = new Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + top, w, h);
}
export function triangleTextRect(node) {
    node.textRect = new Rect(node.rect.x + node.rect.width / 4, node.rect.y + (node.rect.height * 2) / 3, node.rect.width / 2, node.rect.height / 3 - 5);
    var w = node.rect.width / 2;
    var h = (node.rect.height * 3) / 7;
    node.fullTextRect = new Rect(node.rect.x + (node.rect.width - w) / 2, node.rect.y + node.rect.height / 2 - 5, w, h);
}
//# sourceMappingURL=triangle.rect.js.map