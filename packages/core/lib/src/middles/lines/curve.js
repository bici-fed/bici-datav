import { Store } from '@bici-topology/store-utils';
import { Point } from '../../models/point';
import { Direction } from '../../models/direction';
import { pointInLine } from '../../utils/canvas';
var distance = 80;
export function curve(ctx, l) {
    ctx.beginPath();
    ctx.moveTo(l.from.x, l.from.y);
    ctx.bezierCurveTo(l.controlPoints[0].x, l.controlPoints[0].y, l.controlPoints[1].x, l.controlPoints[1].y, l.to.x, l.to.y);
    ctx.stroke();
}
export function curveControlPoints(ctx, l) {
    ctx.save();
    ctx.fillStyle = ctx.strokeStyle + '80';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(l.from.x, l.from.y);
    ctx.lineTo(l.controlPoints[0].x, l.controlPoints[0].y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(l.to.x, l.to.y);
    ctx.lineTo(l.controlPoints[1].x, l.controlPoints[1].y);
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.lineWidth = 2;
    for (var _i = 0, _a = l.controlPoints; _i < _a.length; _i++) {
        var item = _a[_i];
        ctx.beginPath();
        ctx.arc(item.x, item.y, 4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
    ctx.restore();
}
export function calcCurveControlPoints(l) {
    if (!l.from.direction) {
        l.from.direction = Direction.Bottom;
    }
    if (!l.to.direction) {
        l.to.direction = (l.from.direction + 2) % 4;
        if (!l.to.direction) {
            l.to.direction = Direction.Left;
        }
    }
    l.controlPoints = [getControlPt(l.from, l.to), getControlPt(l.to, l.from)];
    Store.set(generateStoreKey(l, 'pts-') + l.id, null);
}
export function pointInCurve(point, l) {
    var points = Store.get(generateStoreKey(l, 'pts-') + l.id);
    if (!points) {
        points = [l.from];
        for (var i = 0.01; i < 1; i += 0.01) {
            points.push(getBezierPoint(i, l.from, l.controlPoints[0], l.controlPoints[1], l.to));
        }
        points.push(l.to);
        Store.set(generateStoreKey(l, 'pts-') + l.id, points);
    }
    var cnt = points.length - 1;
    for (var i = 0; i < cnt; ++i) {
        if (pointInLine(point, points[i], points[i + 1])) {
            return true;
        }
    }
    return false;
}
// Get a point in bezier.
// pos - The position of point in bezier. It is expressed as a percentage(0 - 1).
export function getBezierPoint(pos, from, cp1, cp2, to) {
    var x1 = from.x, y1 = from.y;
    var x2 = to.x, y2 = to.y;
    var cx1 = cp1.x, cy1 = cp1.y;
    var cx2 = cp2.x, cy2 = cp2.y;
    var x = x1 * (1 - pos) * (1 - pos) * (1 - pos) +
        3 * cx1 * pos * (1 - pos) * (1 - pos) +
        3 * cx2 * pos * pos * (1 - pos) +
        x2 * pos * pos * pos;
    var y = y1 * (1 - pos) * (1 - pos) * (1 - pos) +
        3 * cy1 * pos * (1 - pos) * (1 - pos) +
        3 * cy2 * pos * pos * (1 - pos) +
        y2 * pos * pos * pos;
    return new Point(x, y);
}
export function getControlPt(pt, to) {
    var point = new Point(pt.x, pt.y, pt.direction, pt.anchorIndex, pt.id);
    var dis = window.topologyControlPtDistance || distance;
    if ((pt.direction === Direction.Up || pt.direction === Direction.Bottom) && Math.abs(pt.x - to.x) < 3) {
        if (to.y > pt.y) {
            dis = Math.round((to.y - pt.y) / 3);
            point.y += dis;
        }
        else {
            dis = Math.round((pt.y - to.y) / 3);
            point.y -= dis;
        }
        return point;
    }
    if ((pt.direction === Direction.Left || pt.direction === Direction.Right) && Math.abs(pt.y - to.y) < 3) {
        if (to.x > pt.x) {
            dis = Math.round((to.x - pt.x) / 3);
            point.x += dis;
        }
        else {
            dis = Math.round((pt.x - to.x) / 3);
            point.x -= dis;
        }
        return point;
    }
    switch (pt.direction) {
        case Direction.Up:
            point.y -= dis;
            break;
        case Direction.Right:
            point.x += dis;
            break;
        case Direction.Bottom:
            point.y += dis;
            break;
        case Direction.Left:
            point.x -= dis;
            break;
    }
    return point;
}
export function generateStoreKey(pen, key) {
    return "".concat(pen.getTID(), "-").concat(key);
}
//# sourceMappingURL=curve.js.map