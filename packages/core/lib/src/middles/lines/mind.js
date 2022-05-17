import { Store } from '@bici-topology/store-utils';
import { Point } from '../../models/point';
import { Direction } from '../../models/direction';
import { pointInLine } from '../../utils/canvas';
import { getBezierPoint, generateStoreKey } from './curve';
var distance = 8;
export function mind(ctx, l) {
    ctx.beginPath();
    ctx.moveTo(l.from.x, l.from.y);
    ctx.lineTo(l.controlPoints[0].x, l.controlPoints[0].y);
    ctx.bezierCurveTo(l.controlPoints[1].x, l.controlPoints[1].y, l.controlPoints[2].x, l.controlPoints[2].y, l.to.x, l.to.y);
    ctx.stroke();
}
export function mindControlPoints(ctx, l) {
    ctx.save();
    ctx.fillStyle = ctx.strokeStyle + '80';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(l.controlPoints[0].x, l.controlPoints[0].y);
    ctx.lineTo(l.controlPoints[1].x, l.controlPoints[1].y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(l.to.x, l.to.y);
    ctx.lineTo(l.controlPoints[2].x, l.controlPoints[2].y);
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
export function calcMindControlPoints(l) {
    if (!l.from.direction) {
        l.from.direction = Direction.Bottom;
    }
    if (!l.to.direction) {
        l.to.direction = (l.from.direction + 2) % 4;
        if (!l.to.direction) {
            l.to.direction = Direction.Left;
        }
    }
    var from = new Point(l.from.x, l.from.y, l.from.direction);
    switch (l.from.direction) {
        case Direction.Up:
            from.y -= distance;
            break;
        case Direction.Right:
            from.x += distance;
            break;
        case Direction.Bottom:
            from.y += distance;
            break;
        case Direction.Left:
            from.x -= distance;
            break;
    }
    var w = l.to.x - from.x;
    var h = l.to.y - from.y;
    if (l.from.direction === Direction.Left || l.from.direction === Direction.Right) {
        l.controlPoints = [from, new Point(from.x, from.y + h / 3), new Point(from.x, l.to.y)];
    }
    else {
        l.controlPoints = [from, new Point(from.x + w / 3, from.y), new Point(l.to.x, from.y)];
    }
    Store.set(generateStoreKey(l, 'pts-') + l.id, null);
}
export function pointInMind(point, l) {
    var points = Store.get(generateStoreKey(l, 'pts-') + l.id);
    if (!points) {
        points = [l.from];
        for (var i = 0.01; i < 1; i += 0.01) {
            points.push(getBezierPoint(i, l.controlPoints[0], l.controlPoints[1], l.controlPoints[2], l.to));
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
//# sourceMappingURL=mind.js.map