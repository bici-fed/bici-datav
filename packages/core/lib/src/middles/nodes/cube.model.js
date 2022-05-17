import { Point } from '../../models/point';
import { pSBC } from '../../utils/math';
var Surface = /** @class */ (function () {
    function Surface(pt1, pt2, pt3, pt4, fillStyle, strokeStyle) {
        if (fillStyle === void 0) { fillStyle = ''; }
        if (strokeStyle === void 0) { strokeStyle = ''; }
        this.points = [];
        this.fillStyle = '';
        this.strokeStyle = '';
        this.points.push(pt1);
        this.points.push(pt2);
        this.points.push(pt3);
        this.points.push(pt4);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle || fillStyle;
    }
    Surface.prototype.render = function (ctx) {
        ctx.save();
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath();
        for (var i = 0; i < this.points.length; ++i) {
            if (i) {
                ctx.lineTo(this.points[i].x, this.points[i].y);
            }
            else {
                ctx.moveTo(this.points[i].x, this.points[i].y);
            }
        }
        ctx.closePath();
        this.fillStyle && ctx.fill();
        ctx.stroke();
        ctx.restore();
    };
    return Surface;
}());
export { Surface };
var Cube = /** @class */ (function () {
    function Cube(rect, z, zRotate, fillStyle, strokeStyle) {
        if (fillStyle === void 0) { fillStyle = '#ddd'; }
        if (strokeStyle === void 0) { strokeStyle = '#ccc'; }
        this.surfaces = [];
        var offset = z * Math.sin((45 * Math.PI) / 180);
        var p1 = new Point(rect.x, rect.y + offset);
        var p2 = new Point(rect.ex - offset, rect.y + offset);
        var p3 = new Point(rect.ex - offset, rect.ey);
        var p4 = new Point(rect.x, rect.ey);
        // front
        this.surfaces.push(new Surface(p1, p2, p3, p4, fillStyle, strokeStyle));
        // up
        this.surfaces.push(new Surface(p1, new Point(rect.x + offset, rect.y), new Point(rect.ex, rect.y), p2, pSBC(0.5, fillStyle), strokeStyle));
        // right
        this.surfaces.push(new Surface(p2, new Point(rect.ex, rect.y), new Point(rect.ex, rect.ey - offset), p3, pSBC(0.6, fillStyle), strokeStyle));
    }
    Cube.prototype.render = function (ctx) {
        for (var _i = 0, _a = this.surfaces; _i < _a.length; _i++) {
            var item = _a[_i];
            item.render(ctx);
        }
    };
    return Cube;
}());
export { Cube };
//# sourceMappingURL=cube.model.js.map