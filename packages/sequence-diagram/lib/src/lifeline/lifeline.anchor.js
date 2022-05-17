import { Point, Direction } from '@bici-topology/core';
export function lifelineAnchors(node) {
    node.anchors.push(new Point(node.rect.x, node.rect.y + 25, Direction.Left));
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
    node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + 25, Direction.Right));
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + 50, Direction.Bottom));
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.ey, Direction.Bottom));
}
//# sourceMappingURL=lifeline.anchor.js.map