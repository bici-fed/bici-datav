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
import { Store } from '@bici-topology/store-utils';
import { PenType } from './models/pen';
import { Node } from './models/node';
import { Line } from './models/line';
import { Rect } from './models/rect';
import { Point } from './models/point';
import { Lock } from './models/status';
import { drawLineFns } from './middles';
import { getBezierPoint } from './middles/lines/curve';
import { Layer } from './layer';
import { flatNodes, getBboxOfPoints } from './utils';
var ActiveLayer = /** @class */ (function (_super) {
    __extends(ActiveLayer, _super);
    function ActiveLayer(options, TID) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, TID) || this;
        _this.options = options;
        _this.rotateCPs = [];
        _this.sizeCPs = [];
        _this.pens = [];
        _this.rotate = 0;
        // 备份初始位置，方便移动事件处理
        _this.initialSizeCPs = [];
        _this.nodeRects = [];
        _this.childrenRects = {};
        _this.childrenRotate = {};
        // nodes移动时，停靠点的参考位置
        _this.dockWatchers = [];
        _this.rotating = false;
        _this.data = Store.get(_this.generateStoreKey('topology-data'));
        Store.set(_this.generateStoreKey('LT:ActiveLayer'), _this);
        return _this;
    }
    ActiveLayer.prototype.calcControlPoints = function () {
        if (this.pens.length === 1 && this.pens[0] instanceof Node) {
            this.rect = this.pens[0].rect;
            this.sizeCPs = this.pens[0].rect.toPoints();
            this.rotateCPs = [
                new Point(this.pens[0].rect.x + this.pens[0].rect.width / 2, this.pens[0].rect.y - 35),
                new Point(this.pens[0].rect.x + this.pens[0].rect.width / 2, this.pens[0].rect.y),
            ];
            if (this.rotate || this.pens[0].rotate) {
                for (var _i = 0, _a = this.sizeCPs; _i < _a.length; _i++) {
                    var pt = _a[_i];
                    if (this.pens[0].rotate) {
                        pt.rotate(this.pens[0].rotate, this.pens[0].rect.center);
                    }
                    if (this.rotate) {
                        pt.rotate(this.rotate, this.rect.center);
                    }
                }
                for (var _b = 0, _c = this.rotateCPs; _b < _c.length; _b++) {
                    var pt = _c[_b];
                    if (this.pens[0].rotate) {
                        pt.rotate(this.pens[0].rotate, this.pens[0].rect.center);
                    }
                    if (this.rotate) {
                        pt.rotate(this.rotate, this.rect.center);
                    }
                }
            }
            if (this.options.hideRotateCP || this.pens[0].hideRotateCP) {
                this.rotateCPs = [new Point(-1000, -1000), new Point(-1000, -1000)];
            }
            return;
        }
        var _d = getBboxOfPoints(this.getPoints()), x1 = _d.x1, y1 = _d.y1, x2 = _d.x2, y2 = _d.y2;
        this.rect = new Rect(x1, y1, x2 - x1, y2 - y1);
        this.sizeCPs = [new Point(x1, y1), new Point(x2, y1), new Point(x2, y2), new Point(x1, y2)];
        this.rotateCPs = [new Point(x1 + (x2 - x1) / 2, y1 - 35), new Point(x1 + (x2 - x1) / 2, y1)];
        if (this.options.hideRotateCP) {
            this.rotateCPs = [new Point(-1000, -1000), new Point(-1000, -1000)];
        }
    };
    ActiveLayer.prototype.locked = function () {
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.locked) {
                return false;
            }
        }
        return true;
    };
    ActiveLayer.prototype.getPoints = function () {
        var points = [];
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.type === PenType.Node) {
                var pts = item.rect.toPoints();
                if (item.rotate) {
                    for (var _b = 0, pts_1 = pts; _b < pts_1.length; _b++) {
                        var pt = pts_1[_b];
                        pt.rotate(item.rotate, item.rect.center);
                    }
                }
                points.push.apply(points, pts);
            }
            else if (item instanceof Line) {
                points.push(item.from);
                points.push(item.to);
                if (item.name === 'curve') {
                    for (var i = 0.01; i < 1; i += 0.02) {
                        points.push(getBezierPoint(i, item.from, item.controlPoints[0], item.controlPoints[1], item.to));
                    }
                }
            }
        }
        return points;
    };
    ActiveLayer.prototype.clear = function () {
        this.pens = [];
        this.sizeCPs = [];
        this.rotateCPs = [];
        Store.set(this.generateStoreKey('LT:activeNode'), null);
    };
    // 即将缩放选中的nodes，备份nodes最初大小，方便缩放比例计算
    ActiveLayer.prototype.saveNodeRects = function () {
        this.nodeRects = [];
        this.childrenRects = {};
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.type) {
                this.nodeRects.push(new Rect(item.from.x, item.from.y, item.rect.width, item.rect.height));
            }
            else {
                this.nodeRects.push(new Rect(item.rect.x, item.rect.y, item.rect.width, item.rect.height));
            }
            this.saveChildrenRects(item);
        }
        this.initialSizeCPs = [];
        for (var _b = 0, _c = this.sizeCPs; _b < _c.length; _b++) {
            var item = _c[_b];
            this.initialSizeCPs.push(item.clone());
        }
        this.getDockWatchers();
    };
    ActiveLayer.prototype.saveChildrenRects = function (node) {
        if (node.type || !node.children) {
            return;
        }
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            this.childrenRects[item.id] = new Rect(item.rect.x, item.rect.y, item.rect.width, item.rect.height);
            this.childrenRotate[item.id] = item.rotate;
            this.saveChildrenRects(item);
        }
    };
    // pt1 - the point of mouse down.
    // pt2 - the point of mouse move.
    ActiveLayer.prototype.resize = function (type, pt1, pt2) {
        var p1 = new Point(pt1.x, pt1.y);
        var p2 = new Point(pt2.x, pt2.y);
        if (this.pens.length === 1 && this.pens[0].rotate % 360) {
            p1.rotate(-this.pens[0].rotate, this.nodeRects[0].center);
            p2.rotate(-this.pens[0].rotate, this.nodeRects[0].center);
        }
        var offsetX = p2.x - p1.x;
        var offsetY = p2.y - p1.y;
        if (this.options.onlySizeX) {
            offsetY = 0;
        }
        if (this.options.onlySizeY) {
            offsetX = 0;
        }
        var lines = [];
        switch (type) {
            case 0:
                offsetX = -offsetX;
                offsetY = -offsetY;
                break;
            case 1:
                offsetY = -offsetY;
                break;
            case 3:
                offsetX = -offsetX;
                break;
        }
        var i = 0;
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.locked) {
                continue;
            }
            switch (item.type) {
                case PenType.Line:
                    break;
                default:
                    if (!item.onlySizeX) {
                        item.rect.width = this.nodeRects[i].width + offsetX;
                    }
                    if (!item.onlySizeY) {
                        item.rect.height = this.nodeRects[i].height + offsetY;
                    }
                    if (item.rect.width < 10) {
                        item.rect.width = 10;
                    }
                    if (item.rect.height < 10) {
                        item.rect.height = 10;
                    }
                    switch (type) {
                        case 0:
                            item.rect.x = item.rect.ex - item.rect.width;
                            item.rect.y = item.rect.ey - item.rect.height;
                            break;
                        case 1:
                            item.rect.ex = item.rect.x + item.rect.width;
                            item.rect.y = item.rect.ey - item.rect.height;
                            break;
                        case 2:
                            item.rect.ex = item.rect.x + item.rect.width;
                            item.rect.ey = item.rect.y + item.rect.height;
                            break;
                        case 3:
                            item.rect.x = item.rect.ex - item.rect.width;
                            item.rect.ey = item.rect.y + item.rect.height;
                            break;
                    }
                    item.rect.calcCenter();
                    item.init();
                    item.calcChildrenRect();
                    break;
            }
            ++i;
        }
        this.updateLines();
    };
    ActiveLayer.prototype.move = function (x, y) {
        if (this.nodeRects.length !== this.pens.length) {
            return;
        }
        var i = 0;
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.locked) {
                continue;
            }
            if (item instanceof Node) {
                var offsetX = this.nodeRects[i].x + x - item.rect.x;
                var offsetY = this.nodeRects[i].y + y - item.rect.y;
                item.translate(offsetX, offsetY);
                var lines = this.getLinesOfNode(item);
                for (var _b = 0, lines_1 = lines; _b < lines_1.length; _b++) {
                    var line = lines_1[_b];
                    line.translate(offsetX, offsetY);
                }
                item.calcChildrenRect();
                if (item.parentId && !item.locked) {
                    var parent_1 = void 0;
                    for (var _c = 0, _d = this.data.pens; _c < _d.length; _c++) {
                        var n = _d[_c];
                        if (n.id === item.parentId) {
                            parent_1 = n;
                            item.calcRectInParent(parent_1);
                            break;
                        }
                    }
                }
            }
            if (item instanceof Line) {
                var offsetX = this.nodeRects[i].x + x - item.from.x;
                var offsetY = this.nodeRects[i].y + y - item.from.y;
                item.translate(offsetX, offsetY);
            }
            ++i;
        }
        this.updateLines();
        this.topology.dispatch('move', this.pens);
    };
    ActiveLayer.prototype.getLinesOfNode = function (node) {
        var result = [];
        var nodesLines = flatNodes([node]);
        for (var _i = 0, _a = this.data.pens; _i < _a.length; _i++) {
            var pen = _a[_i];
            if (!(pen instanceof Line)) {
                continue;
            }
            var line = pen;
            var fromIn = false;
            var toIn = false;
            for (var _b = 0, _c = nodesLines.nodes; _b < _c.length; _b++) {
                var item = _c[_b];
                if (line.from.id === item.id) {
                    fromIn = true;
                }
                if (line.to.id === item.id) {
                    toIn = true;
                }
            }
            if (fromIn && toIn) {
                result.push(line);
            }
        }
        return result;
    };
    ActiveLayer.prototype.updateLines = function (pens) {
        if (!pens) {
            pens = this.pens;
        }
        var nodesLines = flatNodes(pens);
        var allLines = flatNodes(this.data.pens);
        var lines = [];
        var allNodes = flatNodes(this.data.pens).nodes;
        for (var _i = 0, _a = allLines.lines; _i < _a.length; _i++) {
            var line = _a[_i];
            var nodes = nodesLines.nodes;
            if (this.options.autoAnchor) {
                nodes = allNodes;
            }
            for (var _b = 0, nodes_1 = nodes; _b < nodes_1.length; _b++) {
                var item = nodes_1[_b];
                var cnt = 0;
                if (line.from.id === item.id) {
                    if (line.from.autoAnchor) {
                        var autoAnchor = item.nearestAnchor(line.to);
                        if (autoAnchor.index > -1) {
                            line.from.anchorIndex = autoAnchor.index;
                            line.from.direction = autoAnchor.direction;
                        }
                    }
                    if (line.from.anchorIndex >= 0) {
                        line.from.x = item.rotatedAnchors[line.from.anchorIndex].x;
                        line.from.y = item.rotatedAnchors[line.from.anchorIndex].y;
                        ++cnt;
                    }
                }
                if (line.to.id === item.id) {
                    if (line.to.autoAnchor) {
                        var autoAnchor = item.nearestAnchor(line.from);
                        if (autoAnchor.index > -1) {
                            line.to.anchorIndex = autoAnchor.index;
                            line.to.direction = autoAnchor.direction;
                        }
                    }
                    if (line.to.anchorIndex >= 0) {
                        line.to.x = item.rotatedAnchors[line.to.anchorIndex].x;
                        line.to.y = item.rotatedAnchors[line.to.anchorIndex].y;
                        ++cnt;
                    }
                }
                if (cnt && !this.data.manualCps) {
                    line.calcControlPoints();
                }
                line.textRect = null;
                Store.set(this.generateStoreKey('pts-') + line.id, null);
                lines.push(line);
            }
        }
        Store.set(this.generateStoreKey('LT:updateLines'), lines);
    };
    ActiveLayer.prototype.offsetRotate = function (angle) {
        this.rotating = true;
        var i = 0;
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!(item instanceof Node)) {
                continue;
            }
            var center = this.nodeRects[i].center.clone();
            // 初始的矩形的坐标
            // const startPoint = new Point(this.nodeRects[i].x,this.nodeRects[i].y)
            // const endPoint = new Point(this.nodeRects[i].ex,this.nodeRects[i].ey)
            //
            // console.log(startPoint)
            // console.log(endPoint)
            if (this.pens.length > 1) {
                center.rotate(angle, this.rect.center);
            }
            item.rect.x = center.x - item.rect.width / 2;
            item.rect.y = center.y - item.rect.height / 2;
            item.rect.ex = item.rect.x + item.rect.width;
            item.rect.ey = item.rect.y + item.rect.height;
            item.rect.calcCenter();
            item.init();
            item.offsetRotate = angle;
            item.calcRotateAnchors(item.rotate + item.offsetRotate);
            this.rotateChildren(item);
            // console.log("center",center)
            ++i;
        }
        this.rotate = angle;
        this.topology.dispatch('rotated', this.pens);
    };
    ActiveLayer.prototype.rotateChildren = function (node) {
        if (node.type !== PenType.Node || !node.children) {
            return;
        }
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.type !== PenType.Node) {
                continue;
            }
            var oldCenter = this.childrenRects[item.id].center.clone();
            var newCenter = this.childrenRects[item.id].center.clone().rotate(this.rotate, this.rect.center);
            var rect = this.childrenRects[item.id].clone();
            rect.translate(newCenter.x - oldCenter.x, newCenter.y - oldCenter.y);
            item.rect = rect;
            item.rotate = this.childrenRotate[item.id] + this.rotate;
            item.init();
            this.rotateChildren(item);
        }
    };
    ActiveLayer.prototype.updateRotate = function () {
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            item.rotate += item.offsetRotate;
            if (item.type === PenType.Node && item.rectInParent) {
                item.rectInParent.rotate += item.offsetRotate;
            }
            item.offsetRotate = 0;
        }
        this.rotate = 0;
        this.rotating = false;
    };
    ActiveLayer.prototype.add = function (pen) {
        if (this.has(pen)) {
            return;
        }
        this.pens.push(pen);
        if (pen instanceof Node) {
            Store.set(this.generateStoreKey('LT:activeNode'), pen);
        }
    };
    ActiveLayer.prototype.setPens = function (pens) {
        this.pens = pens;
        if (this.pens.length === 1 && this.pens[0] instanceof Node) {
            Store.set(this.generateStoreKey('LT:activeNode'), this.pens[0]);
        }
    };
    ActiveLayer.prototype.has = function (pen) {
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === pen.id) {
                return true;
            }
        }
    };
    ActiveLayer.prototype.hasInAll = function (pen, pens) {
        if (!pens) {
            pens = this.pens;
        }
        for (var _i = 0, pens_1 = pens; _i < pens_1.length; _i++) {
            var item = pens_1[_i];
            if (item.id === pen.id) {
                return true;
            }
            if (item.children) {
                var has = this.hasInAll(pen, item.children);
                if (has) {
                    return true;
                }
            }
        }
    };
    ActiveLayer.prototype.render = function (ctx) {
        var _this = this;
        if (this.data.locked > Lock.Readonly || this.options.activeColor === 'transparent') {
            return;
        }
        if (!this.pens.length) {
            return;
        }
        this.pens.forEach(function (pen) {
            if (!pen.getTID()) {
                pen.setTID(_this.TID);
            }
        });
        if (this.pens.length === 1 || !this.rotating) {
            this.calcControlPoints();
        }
        ctx.save();
        ctx.strokeStyle = this.options.activeColor;
        ctx.fillStyle = '#fff';
        ctx.lineWidth = 1;
        var TID = this.TID;
        for (var _i = 0, _a = this.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item instanceof Node) {
                var tmp = new Node(item, true);
                tmp.setTID(TID);
                tmp.data = null; // tmp.data = item.data;源码是这样，出现echarts不更新的问题，并且会不断加div
                tmp.fillStyle = null;
                tmp.bkType = 0;
                tmp.icon = '';
                tmp.image = '';
                tmp.text = '';
                if (tmp.strokeStyle !== 'transparent') {
                    tmp.strokeStyle = '#ffffff';
                    tmp.lineWidth += 2;
                    tmp.render(ctx);
                    tmp.strokeStyle = this.options.activeColor;
                    tmp.lineWidth -= 2;
                }
                tmp.render(ctx);
            }
            if (item instanceof Line) {
                var tmp = new Line(item);
                tmp.setTID(TID);
                if (tmp.lineWidth < 3) {
                    var bk = new Line(item);
                    bk.setTID(TID);
                    bk.strokeStyle = '#ffffff';
                    bk.render(ctx);
                }
                tmp.strokeStyle = this.options.activeColor;
                tmp.fromArrowColor = this.options.activeColor;
                tmp.toArrowColor = this.options.activeColor;
                tmp.render(ctx);
                if (!this.data.locked && !item.locked) {
                    drawLineFns[item.name].drawControlPointsFn(ctx, item);
                }
            }
        }
        if (this.pens.length === 1 && this.pens[0].type === PenType.Line) {
            return;
        }
        // This is diffence between single node and more.
        if (this.rotate && this.pens.length > 1) {
            ctx.translate(this.rect.center.x, this.rect.center.y);
            ctx.rotate((this.rotate * Math.PI) / 180);
            ctx.translate(-this.rect.center.x, -this.rect.center.y);
        }
        if (this.data.locked || this.locked()) {
            ctx.restore();
            return;
        }
        // Occupied territory.
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        ctx.moveTo(this.sizeCPs[0].x, this.sizeCPs[0].y);
        ctx.lineTo(this.sizeCPs[1].x, this.sizeCPs[1].y);
        ctx.lineTo(this.sizeCPs[2].x, this.sizeCPs[2].y);
        ctx.lineTo(this.sizeCPs[3].x, this.sizeCPs[3].y);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        // Draw rotate control point.
        ctx.beginPath();
        ctx.moveTo(this.rotateCPs[0].x, this.rotateCPs[0].y);
        ctx.lineTo(this.rotateCPs[1].x, this.rotateCPs[1].y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.rotateCPs[0].x, this.rotateCPs[0].y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Draw size control points.
        if (!this.options.hideSizeCP && (this.pens.length > 1 || !this.pens[0].hideSizeCP)) {
            ctx.lineWidth = 1;
            for (var _b = 0, _c = this.sizeCPs; _b < _c.length; _b++) {
                var item = _c[_b];
                ctx.save();
                ctx.beginPath();
                if (this.pens.length === 1 && (this.pens[0].rotate || this.rotate)) {
                    ctx.translate(item.x, item.y);
                    ctx.rotate(((this.pens[0].rotate + this.rotate) * Math.PI) / 180);
                    ctx.translate(-item.x, -item.y);
                }
                ctx.fillRect(item.x - 4.5, item.y - 4.5, 8, 8);
                ctx.strokeRect(item.x - 5.5, item.y - 5.5, 10, 10);
                ctx.restore();
            }
        }
        ctx.restore();
    };
    ActiveLayer.prototype.getDockWatchers = function () {
        if (this.pens.length === 1) {
            this.dockWatchers = this.nodeRects[0].toPoints();
            this.dockWatchers.unshift(this.nodeRects[0].center);
            return;
        }
        if (!this.rect) {
            return;
        }
        this.dockWatchers = this.rect.toPoints();
        this.dockWatchers.unshift(this.rect.center);
    };
    return ActiveLayer;
}(Layer));
export { ActiveLayer };
//# sourceMappingURL=activeLayer.js.map