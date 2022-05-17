import { Node } from '../models/node';
import { Line } from '../models/line';
import { getBezierPoint } from '../middles/lines/curve';
import { Rect } from '../models/rect';
export function getRect(pens) {
    var points = [];
    for (var _i = 0, pens_1 = pens; _i < pens_1.length; _i++) {
        var item = pens_1[_i];
        if (item instanceof Node) {
            var pts = item.rect.toPoints();
            if (item.rotate) {
                for (var _a = 0, pts_1 = pts; _a < pts_1.length; _a++) {
                    var pt = pts_1[_a];
                    pt.rotate(item.rotate, item.rect.center);
                }
            }
            points.push.apply(points, pts);
        }
        else if (item instanceof Line) {
            // points.push(item.from);
            // points.push(item.to);
            if (item.name === 'curve') {
                for (var i = 0.01; i < 1; i += 0.02) {
                    points.push(getBezierPoint(i, item.from, item.controlPoints[0], item.controlPoints[1], item.to));
                }
            }
        }
    }
    var _b = getBboxOfPoints(points), x1 = _b.x1, y1 = _b.y1, x2 = _b.x2, y2 = _b.y2;
    return new Rect(x1, y1, x2 - x1, y2 - y1);
}
export function getBboxOfPoints(points) {
    var x1 = Infinity;
    var y1 = Infinity;
    var x2 = -Infinity;
    var y2 = -Infinity;
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var item = points_1[_i];
        var x = item.x, y = item.y;
        x1 = Math.min(x1, x);
        y1 = Math.min(y1, y);
        x2 = Math.max(x2, x);
        y2 = Math.max(y2, y);
    }
    return { x1: x1, y1: y1, x2: x2, y2: y2 };
}
//# sourceMappingURL=rect.js.map