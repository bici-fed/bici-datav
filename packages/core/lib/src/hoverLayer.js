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
import { Point } from './models/point';
import { Node } from './models/node';
import { PenType } from './models/pen';
import { Store } from '@bici-topology/store-utils';
import { Lock } from './models/status';
import { Layer } from './layer';
import { rgba } from './utils/math';
var HoverLayer = /** @class */ (function (_super) {
    __extends(HoverLayer, _super);
    function HoverLayer(options, TID) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, TID) || this;
        _this.options = options;
        _this.hoverAnchorIndex = -1;
        _this.dockLineX = 0;
        _this.dockLineY = 0;
        _this.data = Store.get(_this.generateStoreKey('topology-data'));
        Store.set(_this.generateStoreKey('LT:HoverLayer'), _this);
        return _this;
    }
    HoverLayer.prototype.lineTo = function (to, toArrow) {
        if (toArrow === void 0) { toArrow = 'triangleSolid'; }
        if (!this.line || this.line.locked) {
            return;
        }
        this.line.setTo(to, toArrow);
        if (this.line.from.id || this.line.to.id) {
            this.line.calcControlPoints();
        }
        Store.set(this.generateStoreKey('pts-') + this.line.id, null);
        Store.set(this.generateStoreKey('LT:updateLines'), [this.line]);
    };
    HoverLayer.prototype.lineFrom = function (from) {
        if (this.line.locked) {
            return;
        }
        this.line.setFrom(from, this.line.fromArrow);
        if (this.line.from.id || this.line.to.id) {
            this.line.calcControlPoints();
        }
        Store.set(this.generateStoreKey('pts-') + this.line.id, null);
        Store.set(this.generateStoreKey('LT:updateLines'), [this.line]);
    };
    HoverLayer.prototype.lineMove = function (pt, initPos) {
        if (this.line.locked) {
            return;
        }
        var x = pt.x - initPos.x;
        var y = pt.y - initPos.y;
        this.line.setTo(new Point(this.initLine.to.x + x, this.initLine.to.y + y), this.line.toArrow);
        this.line.setFrom(new Point(this.initLine.from.x + x, this.initLine.from.y + y), this.line.fromArrow);
        for (var i = 0; i < this.initLine.controlPoints.length; ++i) {
            this.line.controlPoints[i].x = this.initLine.controlPoints[i].x + x;
            this.line.controlPoints[i].y = this.initLine.controlPoints[i].y + y;
        }
        Store.set(this.generateStoreKey('pts-') + this.line.id, null);
        Store.set(this.generateStoreKey('LT:updateLines'), [this.line]);
    };
    HoverLayer.prototype.render = function (ctx) {
        var _this = this;
        if (this.data.locked === Lock.NoEvent || this.options.hoverColor === 'transparent') {
            return;
        }
        ctx.fillStyle = this.options.hoverColor;
        ctx.save();
        // anchors
        if (this.options.alwaysAnchor) {
            this.data.pens.forEach(function (pen) {
                if (pen.type === PenType.Line) {
                    return;
                }
                if (pen.hideAnchor) {
                    return;
                }
                for (var _i = 0, _a = pen.rotatedAnchors; _i < _a.length; _i++) {
                    var anchor = _a[_i];
                    if (anchor.hidden) {
                        continue;
                    }
                    ctx.beginPath();
                    ctx.arc(anchor.x, anchor.y, anchor.radius || _this.options.anchorRadius, 0, Math.PI * 2);
                    ctx.strokeStyle = anchor.strokeStyle || _this.options.hoverColor;
                    ctx.fillStyle = anchor.fillStyle || _this.options.anchorFillStyle;
                    ctx.fill();
                    ctx.stroke();
                }
                if (_this.options.autoAnchor) {
                    ctx.beginPath();
                    ctx.arc(pen.rect.center.x, pen.rect.center.y, pen.rect.center.radius || _this.options.anchorRadius, 0, Math.PI * 2);
                    ctx.strokeStyle = _this.options.hoverColor;
                    ctx.fillStyle = _this.options.anchorFillStyle;
                    ctx.fill();
                    ctx.stroke();
                }
            });
        }
        ctx.restore();
        if (this.node && !this.data.locked) {
            if (!this.node.getTID()) {
                this.node.setTID(this.TID);
            }
            this.root = this.getRoot(this.node) || this.node;
            if (this.root) {
                ctx.save();
                ctx.strokeStyle = this.options.dragColor;
                ctx.globalAlpha = 0.2;
                if (this.root.rotate) {
                    ctx.translate(this.root.rect.center.x, this.root.rect.center.y);
                    ctx.rotate(((this.root.rotate + this.root.offsetRotate) * Math.PI) / 180);
                    ctx.translate(-this.root.rect.center.x, -this.root.rect.center.y);
                }
                ctx.beginPath();
                ctx.strokeRect(this.root.rect.x, this.root.rect.y, this.root.rect.width, this.root.rect.height);
                ctx.restore();
            }
            if (!this.options.hideAnchor) {
                for (var i = 0; i < this.node.rotatedAnchors.length; ++i) {
                    if (this.node.locked ||
                        this.node.hideAnchor ||
                        (this.node.rotatedAnchors[i].hidden && this.hoverAnchorIndex !== i)) {
                        continue;
                    }
                    ctx.beginPath();
                    ctx.arc(this.node.rotatedAnchors[i].x, this.node.rotatedAnchors[i].y, this.node.rotatedAnchors[i].radius || this.options.anchorRadius, 0, Math.PI * 2);
                    ctx.strokeStyle = this.node.rotatedAnchors[i].strokeStyle || this.options.hoverColor;
                    ctx.fillStyle = this.node.rotatedAnchors[i].fillStyle || this.options.anchorFillStyle;
                    ctx.fill();
                    ctx.stroke();
                }
            }
            if (this.options.autoAnchor) {
                ctx.beginPath();
                ctx.arc(this.node.rect.center.x, this.node.rect.center.y, this.node.rect.center.radius || this.options.anchorRadius, 0, Math.PI * 2);
                ctx.strokeStyle = this.options.hoverColor;
                ctx.fillStyle = this.options.anchorFillStyle;
                ctx.fill();
                ctx.stroke();
            }
        }
        if (this.dockAnchor) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.dockAnchor.x, this.dockAnchor.y, this.dockAnchor.radius || this.options.anchorRadius, 0, Math.PI * 2);
            ctx.strokeStyle = this.options.dockStrokeStyle;
            ctx.fillStyle = this.options.dockFillStyle;
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
        if (this.hoverLineCP) {
            ctx.beginPath();
            ctx.arc(this.hoverLineCP.x, this.hoverLineCP.y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.strokeStyle = rgba(0.5, this.options.hoverColor);
        ctx.lineWidth = 1;
        if (this.dockLineX > 0) {
            var size = Store.get(this.generateStoreKey('LT:size'));
            ctx.beginPath();
            ctx.moveTo(this.dockLineX, 0);
            ctx.lineTo(this.dockLineX, size.height);
            ctx.stroke();
        }
        if (this.dockLineY > 0) {
            var size = Store.get(this.generateStoreKey('LT:size'));
            ctx.beginPath();
            ctx.moveTo(0, this.dockLineY);
            ctx.lineTo(size.width, this.dockLineY);
            ctx.stroke();
        }
        // Select nodes by drag.
        if (this.dragRect) {
            ctx.fillStyle = rgba(0.2, this.options.dragColor);
            ctx.strokeStyle = this.options.dragColor;
            ctx.beginPath();
            ctx.strokeRect(this.dragRect.x, this.dragRect.y, this.dragRect.width, this.dragRect.height);
            ctx.fillRect(this.dragRect.x, this.dragRect.y, this.dragRect.width, this.dragRect.height);
        }
    };
    HoverLayer.prototype.getRoot = function (node) {
        if (!node.parentId) {
            return null;
        }
        for (var _i = 0, _a = this.data.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item instanceof Node && item.id === node.parentId) {
                var n = this.getRoot(item);
                return n ? n : item;
            }
        }
        return null;
    };
    HoverLayer.prototype.clear = function () {
        this.node = null;
        this.line = null;
    };
    return HoverLayer;
}(Layer));
export { HoverLayer };
//# sourceMappingURL=hoverLayer.js.map