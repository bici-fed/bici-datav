var Point = /** @class */ (function () {
    function Point(x, y, direction, anchorIndex, id, hidden, autoAnchor) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.anchorIndex = anchorIndex;
        this.id = id;
        this.hidden = hidden;
        this.autoAnchor = autoAnchor;
    }
    Point.prototype.floor = function () {
        this.x |= 0;
        this.y |= 0;
    };
    Point.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    };
    Point.prototype.clone = function () {
        var pt = new Point(this.x, this.y, this.direction, this.anchorIndex, this.id, this.hidden, this.autoAnchor);
        if (this.data) {
            pt.data = this.data;
        }
        if (this.mode) {
            pt.mode = this.mode;
        }
        return pt;
    };
    Point.prototype.hit = function (pt, radius) {
        if (radius === void 0) { radius = 5; }
        return pt.x > this.x - radius && pt.x < this.x + radius && pt.y > this.y - radius && pt.y < this.y + radius;
    };
    Point.prototype.rotate = function (angle, center) {
        if (!angle || angle === 360) {
            return this;
        }
        angle *= Math.PI / 180;
        var x = (this.x - center.x) * Math.cos(angle) - (this.y - center.y) * Math.sin(angle) + center.x;
        var y = (this.x - center.x) * Math.sin(angle) + (this.y - center.y) * Math.cos(angle) + center.y;
        this.x = x;
        this.y = y;
        return this;
    };
    Point.prototype.isSameAs = function (pt) {
        return this.anchorIndex === pt.anchorIndex && this.direction === pt.direction && this.id === pt.id;
    };
    return Point;
}());
export { Point };
window.topologyPoint = Point;
//# sourceMappingURL=point.js.map