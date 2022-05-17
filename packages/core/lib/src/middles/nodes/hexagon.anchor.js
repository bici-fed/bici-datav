import { Point } from '../../models/point';
import { Direction } from '../../models/direction';
export function hexagonAnchors(node) {
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
    node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, Direction.Right));
    node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, Direction.Bottom));
    node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height / 2, Direction.Left));
    var ptLT = new Point(node.rect.x + node.rect.width / 10, node.rect.y + node.rect.height / 4, Direction.Left);
    ptLT.hidden = true;
    node.anchors.push(ptLT);
    var ptRT = new Point(node.rect.x + node.rect.width / 10, node.rect.y + (node.rect.height * 3) / 4, Direction.Left);
    ptRT.hidden = true;
    node.anchors.push(ptRT);
    var ptLB = new Point(node.rect.x + (node.rect.width * 9) / 10, node.rect.y + node.rect.height / 4, Direction.Right);
    ptLB.hidden = true;
    node.anchors.push(ptLB);
    var ptRB = new Point(node.rect.x + (node.rect.width * 9) / 10, node.rect.y + (node.rect.height * 3) / 4, Direction.Right);
    ptRB.hidden = true;
    node.anchors.push(ptRB);
}
//# sourceMappingURL=hexagon.anchor.js.map