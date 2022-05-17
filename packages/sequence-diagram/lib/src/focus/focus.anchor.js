import { Point, Direction } from '@bici-topology/core';
export function sequenceFocusAnchors(node) {
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.ey, Direction.Bottom));
    var dis = 5;
    for (var i = dis; node.rect.y + i < node.rect.ey; i = i + dis) {
        var pt1 = new Point(node.rect.x, node.rect.y + i, Direction.Left);
        var pt2 = new Point(node.rect.ex, node.rect.y + i, Direction.Right);
        pt1.hidden = true;
        pt2.hidden = true;
        node.anchors.push(pt1);
        node.anchors.push(pt2);
    }
}
//# sourceMappingURL=focus.anchor.js.map