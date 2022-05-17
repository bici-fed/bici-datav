var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Pen, PenType } from './pen';
import { Point } from './point';
import { drawLineFns, drawArrowFns } from '../middles';
import { getBezierPoint } from '../middles/lines/curve';
import { Store } from '@bici-topology/store-utils';
import { lineLen, curveLen } from '../utils/canvas';
import { text } from '../middles/nodes/text';
import { Rect } from './rect';
import { abs } from '../utils/math';
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(json) {
        var _this = _super.call(this, json) || this;
        _this.controlPoints = [];
        _this.fromArrowSize = 5;
        _this.toArrowSize = 5;
        _this.borderWidth = 0;
        _this.borderColor = '#000000';
        _this.animateColor = '';
        _this.animateSpan = 1;
        _this.isAnimate = false;
        _this.animateFromSize = 0;
        _this.animateToSize = 0;
        _this.animatePos = 0;
        _this.animateDotSize = 3;
        _this.type = PenType.Line;
        if (json) {
            if (json.from) {
                _this.from = new Point(json.from.x, json.from.y, json.from.direction, json.from.anchorIndex, json.from.id, json.autoAnchor);
            }
            if (json.to) {
                _this.to = new Point(json.to.x, json.to.y, json.to.direction, json.to.anchorIndex, json.to.id, json.autoAnchor);
            }
            _this.fromArrow = json.fromArrow || '';
            _this.toArrow = json.toArrow || '';
            _this.fromArrowSize = json.fromArrowSize || 5;
            _this.toArrowSize = json.toArrowSize || 5;
            _this.fromArrowColor = json.fromArrowColor;
            _this.toArrowColor = json.toArrowColor;
            if (json.animateColor) {
                _this.animateColor = json.animateColor;
            }
            if (json.animateSpan) {
                _this.animateSpan = json.animateSpan;
            }
            if (json.animateLineDash) {
                _this.animateLineDash = json.animateLineDash;
            }
            if (json.animatePlay) {
                _this.animatePlay = json.animatePlay;
            }
            if (json.animateStart) {
                _this.animateStart = json.animateStart;
            }
            if (json.length) {
                _this.length = json.length;
            }
            if (json.borderWidth) {
                _this.borderColor = json.borderColor;
                _this.borderWidth = json.borderWidth;
            }
            _this.animateDotSize = json.animateDotSize || 3;
            _this.manualCps = json.manualCps;
            _this.disableEmptyLine = json.disableEmptyLine;
            if (json.lineJoin) {
                _this.lineJoin = json.lineJoin;
            }
        }
        else {
            _this.name = 'polyline';
            _this.fromArrow = 'triangleSolid';
        }
        if (!_this.font.background) {
            _this.font.background = '#fff';
        }
        // 暂时兼容老数据
        if (json.name === 'mind' && json.controlPoints && json.controlPoints.length < 3) {
            json.controlPoints = null;
            _this.calcControlPoints();
        }
        //
        if (json.controlPoints) {
            for (var _i = 0, _a = json.controlPoints; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.controlPoints.push(new Point(item.x, item.y, item.direction, item.anchorIndex, item.id));
            }
        }
        return _this;
    }
    Line.prototype.setFrom = function (from, fromArrow) {
        if (fromArrow === void 0) { fromArrow = ''; }
        this.from = from;
        this.fromArrow = fromArrow;
        this.textRect = null;
    };
    Line.prototype.setTo = function (to, toArrow) {
        if (toArrow === void 0) { toArrow = 'triangleSolid'; }
        this.to = to;
        this.toArrow = toArrow;
        this.textRect = null;
    };
    Line.prototype.calcControlPoints = function (force) {
        if (this.manualCps && !force) {
            return;
        }
        this.textRect = null;
        if (this.from && this.to && drawLineFns[this.name]) {
            drawLineFns[this.name].controlPointsFn(this);
        }
    };
    Line.prototype.draw = function (ctx) {
        if (this.animateDot) {
            ctx.fillStyle = this.strokeStyle;
            if (this.animateType === 'dot') {
                ctx.beginPath();
                ctx.arc(this.animateDot.x, this.animateDot.y, this.animateDotSize, 0, 2 * Math.PI, false);
                ctx.fill();
                return;
            }
            else if (this.animateType === 'comet') {
                var bulles = this.getBubbles();
                ctx.save();
                for (var _i = 0, bulles_1 = bulles; _i < bulles_1.length; _i++) {
                    var item = bulles_1[_i];
                    ctx.globalAlpha = item.a;
                    ctx.beginPath();
                    ctx.arc(item.pos.x, item.pos.y, item.r, 0, 2 * Math.PI, false);
                    ctx.fill();
                }
                ctx.restore();
            }
        }
        if (!this.isAnimate && this.borderWidth > 0 && this.borderColor) {
            ctx.save();
            if (this.lineJoin) {
                ctx.lineJoin = this.lineJoin;
            }
            ctx.lineWidth = this.lineWidth + this.borderWidth;
            ctx.strokeStyle = this.borderColor;
            if (drawLineFns[this.name]) {
                drawLineFns[this.name].drawFn(ctx, this);
            }
            ctx.restore();
        }
        if ((!this.isAnimate || this.animateType !== 'comet') && drawLineFns[this.name]) {
            if (this.lineJoin) {
                ctx.lineJoin = this.lineJoin;
            }
            drawLineFns[this.name].drawFn(ctx, this);
        }
        var scale = Store.get(this.generateStoreKey('LT:scale')) || 1;
        if (this.fromArrow && drawArrowFns[this.fromArrow]) {
            ctx.save();
            ctx.beginPath();
            ctx.lineDashOffset = 0;
            ctx.setLineDash([]);
            ctx.fillStyle = this.fromArrowColor || this.strokeStyle || ctx.strokeStyle;
            ctx.strokeStyle = ctx.fillStyle;
            var f = this.to;
            if (this.name === 'curve') {
                f = getBezierPoint(0.95 - this.lineWidth / 100, this.to, this.controlPoints[1], this.controlPoints[0], this.from);
            }
            else if (this.name !== 'line' && this.controlPoints.length) {
                f = this.controlPoints[0];
            }
            drawArrowFns[this.fromArrow](ctx, f, this.from, this.fromArrowSize * scale);
            ctx.restore();
        }
        if (this.toArrow && drawArrowFns[this.toArrow]) {
            ctx.save();
            ctx.beginPath();
            ctx.lineDashOffset = 0;
            ctx.setLineDash([]);
            ctx.fillStyle = this.toArrowColor || this.strokeStyle || ctx.strokeStyle;
            ctx.strokeStyle = ctx.fillStyle;
            var f = this.from;
            if (this.name === 'curve') {
                f = getBezierPoint(0.95 - this.lineWidth / 100, this.from, this.controlPoints[0], this.controlPoints[1], this.to);
            }
            else if (this.name === 'mind') {
                f = getBezierPoint(0.96 - this.lineWidth / 100, this.from, this.controlPoints[0], this.controlPoints[1], this.controlPoints[2]);
            }
            else if (this.name !== 'line' && this.controlPoints.length) {
                f = this.controlPoints[this.controlPoints.length - 1];
            }
            drawArrowFns[this.toArrow](ctx, f, this.to, this.toArrowSize * scale);
            ctx.restore();
        }
        if (this.text && !this.isAnimate) {
            if (!this.textRect) {
                this.calcTextRect();
            }
            text(ctx, this);
        }
    };
    Line.prototype.pointIn = function (pt) {
        return drawLineFns[this.name].pointIn(pt, this);
    };
    Line.prototype.getLen = function () {
        switch (this.name) {
            case 'line':
                return lineLen(this.from, this.to);
            case 'polyline':
                if (!this.controlPoints || !this.controlPoints.length) {
                    return lineLen(this.from, this.to);
                }
                var len = 0;
                var curPt = this.from;
                for (var _i = 0, _a = this.controlPoints; _i < _a.length; _i++) {
                    var pt = _a[_i];
                    len += lineLen(curPt, pt);
                    curPt = pt;
                }
                len += lineLen(curPt, this.to);
                return len | 0;
            case 'curve':
                return curveLen(this.from, this.controlPoints[0], this.controlPoints[1], this.to);
        }
        return 0;
    };
    Line.prototype.calcTextRect = function () {
        var center = this.getCenter();
        var width = Math.abs(this.from.x - this.to.x);
        if (width < 100) {
            width = 100;
        }
        var height = this.font.lineHeight *
            this.font.fontSize *
            (this.textMaxLine || (this.text && this.text.split('\n').length) || 1);
        this.textRect = new Rect(center.x - width / 2, center.y - height / 2, width, height);
    };
    Line.prototype.getTextRect = function () {
        // calc every time just in case text line is changed.
        this.calcTextRect();
        return this.textRect;
    };
    Line.prototype.getCenter = function () {
        var center = new Point(this.from.x, this.from.y);
        switch (this.name) {
            case 'line':
                center = this.getLineCenter(this.from, this.to);
                break;
            case 'polyline':
                var i = Math.round(this.controlPoints.length / 2);
                center = this.getLineCenter(this.controlPoints[i - 1] || this.from, this.controlPoints[i] || this.to);
                break;
            case 'curve':
                center = getBezierPoint(0.5, this.to, this.controlPoints[1], this.controlPoints[0], this.from);
        }
        return center;
    };
    Line.prototype.getLineCenter = function (from, to) {
        return new Point((from.x + to.x) / 2, (from.y + to.y) / 2);
    };
    Line.prototype.getPointByPos = function (pos) {
        if (pos <= 0) {
            return this.from;
        }
        switch (this.name) {
            case 'line':
                return this.getLinePtByPos(this.from, this.to, pos);
            case 'polyline':
                if (!this.controlPoints || !this.controlPoints.length) {
                    return this.getLinePtByPos(this.from, this.to, pos);
                }
                else {
                    var points = [].concat(this.controlPoints, this.to);
                    var curPt = this.from;
                    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                        var pt = points_1[_i];
                        var l = lineLen(curPt, pt);
                        if (pos > l) {
                            pos -= l;
                            curPt = pt;
                        }
                        else {
                            return this.getLinePtByPos(curPt, pt, pos);
                        }
                    }
                    return this.to;
                }
            case 'curve':
                return getBezierPoint(pos / this.getLen(), this.from, this.controlPoints[0], this.controlPoints[1], this.to);
        }
        return null;
    };
    Line.prototype.getLinePtByPos = function (from, to, pos) {
        var length = lineLen(from, to);
        if (pos <= 0) {
            return from;
        }
        if (pos >= length) {
            return to;
        }
        var x, y;
        x = from.x + (to.x - from.x) * (pos / length);
        y = from.y + (to.y - from.y) * (pos / length);
        return new Point(x, y);
    };
    Line.prototype.calcRectInParent = function (parent) {
        var parentW = parent.rect.width - parent.paddingLeftNum - parent.paddingRightNum;
        var parentH = parent.rect.height - parent.paddingTopNum - parent.paddingBottomNum;
        this.rectInParent = {
            x: ((this.from.x - parent.rect.x - parent.paddingLeftNum) * 100) / parentW + '%',
            y: ((this.from.y - parent.rect.y - parent.paddingTopNum) * 100) / parentH + '%',
            width: 0,
            height: 0,
            rotate: 0,
        };
    };
    // 根据父节点rect计算自己（子节点）的rect
    Line.prototype.calcRectByParent = function (parent) {
        if (!this.rectInParent) {
            return;
        }
        var parentW = parent.rect.width - parent.paddingLeftNum - parent.paddingRightNum;
        var parentH = parent.rect.height - parent.paddingTopNum - parent.paddingBottomNum;
        var x = parent.rect.x +
            parent.paddingLeftNum +
            abs(parentW, this.rectInParent.x) +
            abs(parentW, this.rectInParent.marginLeft);
        var y = parent.rect.y +
            parent.paddingTopNum +
            abs(parentH, this.rectInParent.y) +
            abs(parentW, this.rectInParent.marginTop);
        if (this.rectInParent.marginLeft === undefined && this.rectInParent.marginRight) {
            x -= abs(parentW, this.rectInParent.marginRight);
        }
        if (this.rectInParent.marginTop === undefined && this.rectInParent.marginBottom) {
            y -= abs(parentW, this.rectInParent.marginBottom);
        }
        this.translate(x - this.from.x, y - this.from.y);
    };
    Line.prototype.initAnimate = function () {
        this.animatePos = 0;
    };
    Line.prototype.pauseAnimate = function () {
        Store.set(this.generateStoreKey('LT:AnimatePlay'), {
            pen: this,
            stop: true,
        });
    };
    Line.prototype.stopAnimate = function () {
        this.pauseAnimate();
        this.initAnimate();
    };
    Line.prototype.animate = function (now) {
        if (this.animateFromSize) {
            this.lineDashOffset = -this.animateFromSize;
        }
        this.animatePos += this.animateSpan;
        this.animateDot = null;
        switch (this.animateType) {
            case 'beads':
                this.lineDashOffset = -this.animatePos;
                var len = this.lineWidth;
                if (len < 5) {
                    len = 5;
                }
                if (this.animateLineDash) {
                    this.lineDash = this.animateLineDash;
                }
                else {
                    this.lineDash = [len, len * 2];
                }
                break;
            case 'dot':
            case 'comet':
                this.lineDash = null;
                this.animateDot = this.getPointByPos(this.animatePos + this.animateFromSize);
                break;
            default:
                this.lineDash = [this.animatePos, this.length - this.animatePos + 1];
                break;
        }
        if (this.animatePos > this.length + this.animateSpan - this.animateFromSize - this.animateToSize) {
            if (++this.animateCycleIndex >= this.animateCycle && this.animateCycle > 0) {
                this.animateStart = 0;
                this.animatePos = 0;
                Store.set(this.generateStoreKey('animateEnd'), {
                    type: 'line',
                    data: this,
                });
                return;
            }
            this.animatePos = this.animateSpan;
        }
    };
    Line.prototype.getBubbles = function () {
        var bubbles = [];
        for (var i = 0; i < 30 && this.animatePos - i > 0; ++i) {
            bubbles.push({
                pos: this.getPointByPos(this.animatePos - i * 2 + this.animateFromSize),
                a: 1 - i * 0.03,
                r: this.lineWidth - i * 0.01,
            });
        }
        return bubbles;
    };
    Line.prototype.round = function () {
        this.from.round();
        this.to.round();
    };
    Line.prototype.translate = function (x, y) {
        this.from.x += x;
        this.from.y += y;
        this.to.x += x;
        this.to.y += y;
        if (this.text) {
            this.textRect = null;
        }
        for (var _i = 0, _a = this.controlPoints; _i < _a.length; _i++) {
            var pt = _a[_i];
            pt.x += x;
            pt.y += y;
        }
        Store.set(this.generateStoreKey('pts-') + this.id, null);
    };
    Line.prototype.scale = function (scale, center) {
        this.from.x = center.x - (center.x - this.from.x) * scale;
        this.from.y = center.y - (center.y - this.from.y) * scale;
        this.to.x = center.x - (center.x - this.to.x) * scale;
        this.to.y = center.y - (center.y - this.to.y) * scale;
        this.lineWidth *= scale;
        this.borderWidth *= scale;
        this.font.fontSize *= scale;
        if (this.text) {
            this.textRect = null;
        }
        for (var _i = 0, _a = this.controlPoints; _i < _a.length; _i++) {
            var pt = _a[_i];
            pt.x = center.x - (center.x - pt.x) * scale;
            pt.y = center.y - (center.y - pt.y) * scale;
        }
        Store.set(this.generateStoreKey('pts-') + this.id, null);
    };
    Line.prototype.hit = function (pt, padding) {
        if (padding === void 0) { padding = 0; }
        if (this.from.hit(pt, padding) || this.to.hit(pt, padding)) {
            return this;
        }
    };
    Line.prototype.clone = function () {
        return new Line(this);
    };
    return Line;
}(Pen));
export { Line };
//# sourceMappingURL=line.js.map