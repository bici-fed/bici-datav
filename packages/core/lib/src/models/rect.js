import { Point } from './point';
import { pointInRect } from '../utils/canvas';
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.center = new Point(0, 0);
        if (width < 0) {
            width = 0;
        }
        if (height < 0) {
            height = 0;
        }
        this.init();
    }
    Rect.prototype.init = function () {
        this.ex = this.x + this.width;
        this.ey = this.y + this.height;
        this.calcCenter();
    };
    Rect.prototype.floor = function () {
        this.x |= 0;
        this.y |= 0;
        this.width |= 0;
        this.height |= 0;
        this.init();
    };
    Rect.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        this.init();
    };
    Rect.prototype.clone = function () {
        return new Rect(this.x, this.y, this.width, this.height);
    };
    Rect.prototype.hit = function (pt, padding) {
        if (padding === void 0) { padding = 0; }
        return pt.x > this.x - padding && pt.x < this.ex + padding && pt.y > this.y - padding && pt.y < this.ey + padding;
    };
    Rect.prototype.hitByRect = function (rect) {
        return ((rect.x > this.x && rect.x < this.ex && rect.y > this.y && rect.y < this.ey) ||
            (rect.ex > this.x && rect.ex < this.ex && rect.y > this.y && rect.y < this.ey) ||
            (rect.ex > this.x && rect.ex < this.ex && rect.ey > this.y && rect.ey < this.ey) ||
            (rect.x > this.x && rect.x < this.ex && rect.ey > this.y && rect.ey < this.ey));
    };
    Rect.prototype.hitRotate = function (point, rotate, center) {
        var pts = this.toPoints();
        for (var _i = 0, pts_1 = pts; _i < pts_1.length; _i++) {
            var pt = pts_1[_i];
            pt.rotate(rotate, center);
        }
        return pointInRect(point, pts);
    };
    Rect.prototype.calcCenter = function () {
        this.center.x = this.x + this.width / 2;
        this.center.y = this.y + this.height / 2;
    };
    Rect.prototype.toPoints = function () {
        return [
            new Point(this.x, this.y),
            new Point(this.ex, this.y),
            new Point(this.ex, this.ey),
            new Point(this.x, this.ey),
        ];
    };
    Rect.prototype.translate = function (x, y) {
        this.x += x;
        this.y += y;
        this.ex += x;
        this.ey += y;
        this.calcCenter();
    };
    Rect.prototype.scale = function (scale, center, scaleY) {
        if (!center) {
            center = this.center;
        }
        if (scaleY === undefined) {
            scaleY = scale;
        }
        this.x = center.x - (center.x - this.x) * scale;
        this.y = center.y - (center.y - this.y) * scaleY;
        this.width *= scale;
        this.height *= scaleY;
        this.init();
    };
    return Rect;
}());
export { Rect };
//# sourceMappingURL=rect.js.map