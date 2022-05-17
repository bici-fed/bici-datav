import { Point } from '../../models/point';
import { Direction } from '../../models/direction';
export function circleAnchors(node) {
    node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height / 2, Direction.Left));
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
    node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, Direction.Right));
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, Direction.Bottom));
    for (var i = 5; i < 360; i += 5) {
        if (i % 90 === 0) {
            continue;
        }
        var direction = Math.round(i / 90);
        var pt = new Point(node.rect.center.x + (Math.sin((i / 180) * Math.PI) * node.rect.width) / 2, node.rect.center.y + (Math.cos((i / 180) * Math.PI) * node.rect.height) / 2, direction);
        pt.hidden = true;
        node.anchors.push(pt);
    }
}
//# sourceMappingURL=circle.anchor.js.map