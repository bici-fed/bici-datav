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
import { Rect } from './rect';
import { Point } from './point';
import { Line } from './line';
import { anchorsFns, iconRectFns, textRectFns, drawNodeFns } from '../middles';
import { defaultAnchors } from '../middles/default.anchor';
import { defaultIconRect, defaultTextRect } from '../middles/default.rect';
import { text, iconfont } from '../middles/nodes/text';
import { Store } from '@bici-topology/store-utils';
import { abs, distance } from '../utils/math';
import { s8 } from '../utils/uuid';
import * as _ from 'lodash';
import { pointInRect } from "../utils";
export var images = {};
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node(json, noChild) {
        if (noChild === void 0) { noChild = false; }
        var _this = _super.call(this, json) || this;
        _this.is3D = false;
        _this.zRotate = 0;
        _this.imageRatio = true;
        _this.anchors = [];
        _this.rotatedAnchors = [];
        _this.animateDuration = 0;
        _this.animateFrames = [];
        _this.animateFrame = 0;
        _this.type = PenType.Node;
        _this.is3D = json.is3D;
        _this.z = json.z;
        _this.zRotate = json.zRotate || 0;
        _this.borderRadius = +json.borderRadius || 0;
        _this.icon = json.icon;
        _this.iconFamily = json.iconFamily;
        _this.iconSize = +json.iconSize;
        _this.iconColor = json.iconColor;
        _this.property = json.property;
        _this.image = json.image;
        if (json.imgNaturalWidth) {
            _this.imgNaturalWidth = json.imgNaturalWidth;
        }
        if (json.imgNaturalHeight) {
            _this.imgNaturalHeight = json.imgNaturalHeight;
        }
        if (json.imageWidth) {
            _this.imageWidth = json.imageWidth;
        }
        if (json.imageHeight) {
            _this.imageHeight = json.imageHeight;
        }
        _this.imageRatio = json.imageRatio;
        _this.imageAlign = json.imageAlign || 'center';
        _this.bkType = json.bkType;
        _this.gradientFromColor = json.gradientFromColor;
        _this.gradientToColor = json.gradientToColor;
        _this.gradientAngle = json.gradientAngle || 0;
        _this.gradientRadius = json.gradientRadius || 0.01;
        _this.paddingTop = json.paddingTop || 0;
        _this.paddingBottom = json.paddingBottom || 0;
        _this.paddingLeft = json.paddingLeft || 0;
        _this.paddingRight = json.paddingRight || 0;
        _this.onlySizeX = json.onlySizeX;
        _this.onlySizeY = json.onlySizeY;
        // 兼容老数据
        if (json.children && json.children[0] && json.children[0].parentRect) {
            _this.paddingLeft = json.children[0].parentRect.offsetX;
            _this.paddingRight = 0;
            _this.paddingTop = json.children[0].parentRect.offsetY;
            _this.paddingBottom = 0;
        }
        if (json.parentRect) {
            _this.rectInParent = {
                x: json.parentRect.x * 100 + '%',
                y: json.parentRect.y * 100 + '%',
                width: json.parentRect.width * 100 + '%',
                height: json.parentRect.height * 100 + '%',
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                rotate: json.parentRect.rotate,
            };
            _this.paddingTop = json.parentRect.marginY;
            _this.paddingBottom = json.parentRect.marginY;
            _this.paddingLeft = json.parentRect.marginX;
            _this.paddingRight = json.parentRect.marginX;
        }
        // 兼容老数据 end
        if (json.animateFrames) {
            _this.animateFrames = json.animateFrames;
            for (var _i = 0, _a = _this.animateFrames; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!item.state.init) {
                    item.state = new Node(item.state, true);
                }
            }
        }
        if (json.animateDuration) {
            _this.animateDuration = json.animateDuration;
        }
        _this.animateFrame = json.animateFrame || 0;
        _this.animateType = json.animateType ? json.animateType : json.animateDuration ? 'custom' : '';
        _this.animateAlone = json.animateAlone;
        _this.iframe = json.iframe;
        _this.elementId = json.elementId;
        _this.audio = json.audio;
        _this.video = json.video;
        _this.play = json.play;
        _this.nextPlay = json.nextPlay;
        _this.isEditable = json.isEditable;
        // if (json.elementLoaded !== undefined) {
        //   this.elementId = null;
        //   this.elementLoaded = false;
        // }
        _this.init();
        if (!noChild) {
            _this.setChild(json.children);
        }
        else {
            _this.children = null;
        }
        return _this;
    }
    Node.cloneState = function (json) {
        var n = new Node(json);
        delete n.animateFrames;
        return n;
    };
    Node.prototype.restore = function (state) {
        if (!state) {
            state = this.animateReady;
        }
        if (!state) {
            return;
        }
        for (var key in this) {
            if (key.indexOf('animate') < 0) {
                this[key] = state[key];
            }
        }
        this.init();
    };
    Node.prototype.init = function () {
        this.calcAbsPadding();
        // Calc rect of text.
        if (textRectFns[this.name]) {
            textRectFns[this.name](this);
        }
        else {
            defaultTextRect(this);
        }
        // Calc rect of icon.
        if (iconRectFns[this.name]) {
            iconRectFns[this.name](this);
        }
        else {
            defaultIconRect(this);
        }
        this.calcAnchors();
        this.elementRendered = false;
        this.addToDiv();
    };
    Node.prototype.addToDiv = function () {
        if (this.audio || this.video || this.iframe || this.elementId || this.hasGif()) {
            Store.set(this.generateStoreKey('LT:addDiv'), this);
        }
    };
    Node.prototype.hasGif = function () {
        if (this.gif) {
            return true;
        }
        if (this.children) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.type === PenType.Node && item.hasGif()) {
                    return true;
                }
            }
        }
        return false;
    };
    Node.prototype.calcAbsPadding = function () {
        this.paddingLeftNum = abs(this.rect.width, this.paddingLeft);
        this.paddingRightNum = abs(this.rect.width, this.paddingRight);
        this.paddingTopNum = abs(this.rect.height, this.paddingTop);
        this.paddingBottomNum = abs(this.rect.height, this.paddingBottom);
    };
    Node.prototype.setChild = function (children) {
        if (!children) {
            return;
        }
        this.children = [];
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var item = children_1[_i];
            var child = void 0;
            switch (item.type) {
                case PenType.Line:
                    child = new Line(item);
                    child.calcRectByParent(this);
                    break;
                default:
                    child = new Node(item);
                    child.parentId = this.id;
                    child.calcRectByParent(this);
                    child.init();
                    child.setChild(item.children);
                    break;
            }
            this.children.push(child);
        }
    };
    Node.prototype.setTID = function (id) {
        this.TID = id;
        if (!this.children) {
            return;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var item = _a[_i];
            this.TID = id;
            switch (item.type) {
                case PenType.Node:
                    item.setTID(id);
                    break;
            }
        }
        return this;
    };
    Node.prototype.setChildrenIds = function () {
        if (!this.children) {
            return;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.id = s8();
            switch (item.type) {
                case PenType.Node:
                    item.setChildrenIds();
                    break;
            }
        }
    };
    Node.prototype.draw = function (ctx) {
        if (!drawNodeFns[this.name]) {
            return;
        }
        // DrawBk
        switch (this.bkType) {
            case 1:
                this.drawBkLinearGradient(ctx);
                break;
            case 2:
                this.drawBkRadialGradient(ctx);
                break;
        }
        // Draw shape.
        drawNodeFns[this.name](ctx, this);
        // Draw text.
        if (this.name !== 'text' && this.text) {
            text(ctx, this);
        }
        // Draw image.
        if (this.image) {
            try {
                this.drawImg(ctx);
                return;
            }
            catch (e) { }
        }
        // Draw icon
        if (this.icon) {
            ctx.save();
            ctx.shadowColor = '';
            ctx.shadowBlur = 0;
            iconfont(ctx, this);
            ctx.restore();
        }
    };
    Node.prototype.drawBkLinearGradient = function (ctx) {
        var from = new Point(this.rect.x, this.rect.center.y);
        var to = new Point(this.rect.ex, this.rect.center.y);
        if (this.gradientAngle % 90 === 0 && this.gradientAngle % 180) {
            if (this.gradientAngle % 270) {
                from.x = this.rect.center.x;
                from.y = this.rect.y;
                to.x = this.rect.center.x;
                to.y = this.rect.ey;
            }
            else {
                from.x = this.rect.center.x;
                from.y = this.rect.ey;
                to.x = this.rect.center.x;
                to.y = this.rect.y;
            }
        }
        else if (this.gradientAngle) {
            from.rotate(this.gradientAngle, this.rect.center);
            to.rotate(this.gradientAngle, this.rect.center);
        }
        // contributor: https://github.com/sunnyguohua/topology
        var grd = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        grd.addColorStop(0, this.gradientFromColor);
        grd.addColorStop(1, this.gradientToColor);
        ctx.fillStyle = grd;
    };
    Node.prototype.drawBkRadialGradient = function (ctx) {
        var r = this.rect.width;
        if (r < this.rect.height) {
            r = this.rect.height;
        }
        r *= 0.5;
        var grd = ctx.createRadialGradient(this.rect.center.x, this.rect.center.y, r * this.gradientRadius, this.rect.center.x, this.rect.center.y, r);
        grd.addColorStop(0, this.gradientFromColor);
        grd.addColorStop(1, this.gradientToColor);
        ctx.fillStyle = grd;
    };
    Node.prototype.drawImg = function (ctx) {
        var _this = this;
        if (this.lastImage !== this.image) {
            this.img = null;
            if (this.lastImage && this.lastImage.indexOf('.gif') > 0) {
                Store.set(this.generateStoreKey('LT:addDiv'), this);
            }
        }
        var gif = this.image.indexOf('.gif') > 0;
        if (!gif && this.img) {
            ctx.save();
            ctx.shadowColor = '';
            ctx.shadowBlur = 0;
            var rect = this.getIconRect();
            var x = rect.x;
            var y = rect.y;
            var w = rect.width;
            var h = rect.height;
            if (this.imageWidth) {
                w = this.imageWidth;
            }
            if (this.imageHeight) {
                h = this.imageHeight;
            }
            if (this.imageRatio) {
                if (this.imageWidth) {
                    h = (this.imgNaturalHeight / this.imgNaturalWidth) * w;
                }
                else {
                    w = (this.imgNaturalWidth / this.imgNaturalHeight) * h;
                }
            }
            if (this.name !== 'image') {
                x += (rect.width - w) / 2;
                y += (rect.height - h) / 2;
            }
            switch (this.imageAlign) {
                case 'top':
                    y = rect.y;
                    break;
                case 'bottom':
                    y = rect.ey - h;
                    break;
                case 'left':
                    x = rect.x;
                    break;
                case 'right':
                    x = rect.ex - w;
                    break;
                case 'left-top':
                    x = rect.x;
                    y = rect.y;
                    break;
                case 'right-top':
                    x = rect.ex - w;
                    y = rect.y;
                    break;
                case 'left-bottom':
                    x = rect.x;
                    y = rect.ey - h;
                    break;
                case 'right-bottom':
                    x = rect.ex - w;
                    y = rect.ey - h;
                    break;
            }
            ctx.drawImage(this.img, x, y, w, h);
            ctx.restore();
            return;
        }
        // Load image and draw it.
        if (!gif && images[this.image]) {
            this.img = images[this.image].img;
            ++images[this.image].cnt;
            this.lastImage = this.image;
            this.imgNaturalWidth = this.img.naturalWidth;
            this.imgNaturalHeight = this.img.naturalHeight;
            this.drawImg(ctx);
            return;
        }
        var img = new Image();
        // 不加这行代码还可以，加了还不出现跨域的问题
        // img.crossOrigin = 'anonymous';
        img.src = this.image;
        img.onload = function () {
            _this.lastImage = _this.image;
            _this.imgNaturalWidth = img.naturalWidth;
            _this.imgNaturalHeight = img.naturalHeight;
            _this.img = img;
            images[_this.image] = {
                img: img,
                cnt: 1,
            };
            Store.set(_this.generateStoreKey('LT:imageLoaded'), true);
            if (!_this.gif && gif) {
                _this.gif = true;
                Store.set(_this.generateStoreKey('LT:addDiv'), _this);
            }
        };
    };
    Node.prototype.calcAnchors = function () {
        this.anchors = [];
        if (anchorsFns[this.name]) {
            anchorsFns[this.name](this);
        }
        else {
            defaultAnchors(this);
        }
        this.calcRotateAnchors();
    };
    Node.prototype.calcRotateAnchors = function (angle) {
        if (angle === undefined) {
            angle = this.rotate;
        }
        this.rotatedAnchors = [];
        for (var _i = 0, _a = this.anchors; _i < _a.length; _i++) {
            var item = _a[_i];
            this.rotatedAnchors.push(item.clone().rotate(angle, this.rect.center));
        }
    };
    Node.prototype.getTextRect = function () {
        var textRect = this.textRect;
        if (!this.icon && !this.image) {
            textRect = this.fullTextRect;
        }
        return textRect;
    };
    Node.prototype.getIconRect = function () {
        var rect = this.iconRect;
        if (!this.text) {
            rect = this.fullIconRect || this.fullTextRect || this.rect;
        }
        return rect;
    };
    // 根据父节点rect计算自己（子节点）的rect
    Node.prototype.calcRectByParent = function (parent) {
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
        var w = abs(parentW, this.rectInParent.width);
        var h = abs(parentH, this.rectInParent.height);
        if (this.rectInParent.marginLeft === undefined && this.rectInParent.marginRight) {
            x -= abs(parentW, this.rectInParent.marginRight);
        }
        if (this.rectInParent.marginTop === undefined && this.rectInParent.marginBottom) {
            y -= abs(parentW, this.rectInParent.marginBottom);
        }
        this.rect = new Rect(x, y, w, h);
        if (!this.rectInParent.rotate) {
            this.rectInParent.rotate = 0;
        }
        var offsetR = parent.rotate + parent.offsetRotate;
        this.rotate = this.rectInParent.rotate + offsetR;
        if (!this.rectInParent.rect) {
            this.rectInParent.rect = this.rect.clone();
        }
    };
    Node.prototype.calcChildrenRect = function () {
        if (!this.children) {
            return;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.calcRectByParent(this);
            if (item.type === PenType.Node) {
                item.init();
                item.calcChildrenRect();
            }
        }
    };
    Node.prototype.calcRectInParent = function (parent) {
        var parentW = parent.rect.width - parent.paddingLeftNum - parent.paddingRightNum;
        var parentH = parent.rect.height - parent.paddingTopNum - parent.paddingBottomNum;
        this.rectInParent = {
            x: ((this.rect.x - parent.rect.x - parent.paddingLeftNum) * 100) / parentW + '%',
            y: ((this.rect.y - parent.rect.y - parent.paddingTopNum) * 100) / parentH + '%',
            width: (this.rect.width * 100) / parentW + '%',
            height: (this.rect.height * 100) / parentH + '%',
            rotate: this.rectInParent ? this.rectInParent.rotate || 0 : this.rotate || 0,
            rect: this.rect.clone(),
        };
    };
    Node.prototype.getDockWatchers = function () {
        this.dockWatchers = this.rect.toPoints();
        this.dockWatchers.unshift(this.rect.center);
    };
    Node.prototype.initAnimate = function () {
        var passed = 0;
        for (var i = 0; i < this.animateFrames.length; ++i) {
            this.animateFrames[i].start = passed;
            passed += this.animateFrames[i].duration;
            this.animateFrames[i].end = passed;
            this.animateFrames[i].initState = Node.cloneState(i ? this.animateFrames[i - 1].state : this);
        }
        this.animateDuration = passed;
        this.animateReady = Node.cloneState(this);
        this.animatePos = 0;
        this.animateFrame = 0;
    };
    Node.prototype.pauseAnimate = function () {
        this.animateFrame = this._animateFrame;
        this.animatePos = this._animatePos;
        Store.set(this.generateStoreKey('LT:AnimatePlay'), {
            pen: this,
            stop: true,
        });
    };
    Node.prototype.stopAnimate = function () {
        this.restore();
        this.initAnimate();
        Store.set(this.generateStoreKey('LT:AnimatePlay'), {
            pen: this,
            stop: true,
        });
        Store.set(this.generateStoreKey('LT:render'), {
            pen: this,
            stop: true,
        });
    };
    Node.prototype.animate = function (now) {
        var _this = this;
        var timeline = now - this.animateStart;
        if (this.animateFrame > 0) {
            this.animateFrames.forEach(function (item, index) {
                if (_this.animateFrame < index + 1) {
                    timeline += item.duration;
                }
            });
            timeline += this.animatePos;
        }
        // Finished on animate.
        if (timeline > this.animateDuration) {
            this.animatePos = 0;
            this.animateFrame = 0;
            if (++this.animateCycleIndex >= this.animateCycle && this.animateCycle > 0) {
                this.animateStart = 0;
                this.animateCycleIndex = 0;
                var item = this.animateFrames[this.animateFrames.length - 1];
                if (item) {
                    this.restore(item.state);
                }
                Store.set(this.generateStoreKey('animateEnd'), {
                    type: 'node',
                    data: this,
                });
                return;
            }
            this.animateStart = now;
            timeline = 0;
        }
        var rectChanged = false;
        for (var i = 0; i < this.animateFrames.length; ++i) {
            var item = this.animateFrames[i];
            if (timeline >= item.start && timeline < item.end) {
                this.dash = item.state.dash;
                this.strokeStyle = item.state.strokeStyle;
                this.fillStyle = item.state.fillStyle;
                this.text = item.state.text;
                this.font = item.state.font;
                this.iconFamily = item.state.iconFamily;
                this.icon = item.state.icon;
                this.iconSize = item.state.iconSize;
                this.iconColor = item.state.iconColor;
                this.visible = item.state.visible;
                this._animateFrame = i + 1;
                if (this._animateFrame > this.animateFrame) {
                    this.animateFrame = 0;
                    this.animatePos = 0;
                }
                this._animatePos = timeline - item.start;
                var rate = this._animatePos / item.duration;
                if (item.linear) {
                    if (item.state.rect.x !== item.initState.rect.x) {
                        this.rect.x = item.initState.rect.x + (item.state.rect.x - item.initState.rect.x) * rate;
                        rectChanged = true;
                    }
                    if (item.state.rect.y !== item.initState.rect.y) {
                        this.rect.y = item.initState.rect.y + (item.state.rect.y - item.initState.rect.y) * rate;
                        rectChanged = true;
                    }
                    if (item.state.rect.width !== item.initState.rect.width) {
                        this.rect.width = item.initState.rect.width + (item.state.rect.width - item.initState.rect.width) * rate;
                        rectChanged = true;
                    }
                    if (item.state.rect.height !== item.initState.rect.height) {
                        this.rect.height =
                            item.initState.rect.height + (item.state.rect.height - item.initState.rect.height) * rate;
                        rectChanged = true;
                    }
                    this.rect.ex = this.rect.x + this.rect.width;
                    this.rect.ey = this.rect.y + this.rect.height;
                    this.rect.calcCenter();
                    if (item.initState.z !== undefined && item.state.z !== item.initState.z) {
                        this.z = item.initState.z + (item.state.z - item.initState.z) * rate;
                        rectChanged = true;
                    }
                    if (item.state.borderRadius !== item.initState.borderRadius) {
                        this.borderRadius =
                            item.initState.borderRadius + (item.state.borderRadius - item.initState.borderRadius) * rate;
                    }
                    if (item.state.lineWidth !== item.initState.lineWidth) {
                        this.lineWidth = item.initState.lineWidth + (item.state.lineWidth - item.initState.lineWidth) * rate;
                    }
                    if (item.state.rotate !== item.initState.rotate) {
                        this.rotate = item.initState.rotate + (item.state.rotate - item.initState.rotate) * rate;
                        rectChanged = true;
                    }
                    if (item.state.globalAlpha !== item.initState.globalAlpha) {
                        this.globalAlpha =
                            item.initState.globalAlpha + (item.state.globalAlpha - item.initState.globalAlpha) * rate;
                    }
                    if (item.state.lineDashOffset) {
                        if (!this.lineDashOffset) {
                            this.lineDashOffset = item.state.lineDashOffset;
                        }
                        else {
                            this.lineDashOffset += item.state.lineDashOffset;
                        }
                    }
                    if (item.state.value !== item.initState.value) {
                        this.value = (item.initState.value || 0) + ((item.state.value || 0) - (item.initState.value || 0)) * rate;
                    }
                }
                else {
                    this.rect = item.state.rect;
                    this.lineWidth = item.state.lineWidth;
                    this.rotate = item.state.rotate;
                    this.globalAlpha = item.state.globalAlpha;
                    this.lineDashOffset = item.state.lineDashOffset;
                }
            }
        }
        if (rectChanged) {
            this.init();
            if (!this.animateAlone) {
                Store.set(this.generateStoreKey('LT:rectChanged'), this);
            }
        }
    };
    Node.prototype.scale = function (scale, center) {
        if (!center) {
            center = this.rect.center;
        }
        this.rect.x = center.x - (center.x - this.rect.x) * scale;
        this.rect.y = center.y - (center.y - this.rect.y) * scale;
        this.z *= scale;
        this.rect.width *= scale;
        this.rect.height *= scale;
        this.rect.ex = this.rect.x + this.rect.width;
        this.rect.ey = this.rect.y + this.rect.height;
        if (this.imageWidth) {
            this.imageWidth *= scale;
        }
        if (this.imageHeight) {
            this.imageHeight *= scale;
        }
        this.lastImage = null;
        this.font.fontSize *= scale;
        this.iconSize *= scale;
        if (typeof this.paddingLeft === 'number') {
            this.paddingLeft *= scale;
        }
        if (typeof this.paddingTop === 'number') {
            this.paddingTop *= scale;
        }
        if (typeof this.paddingRight === 'number') {
            this.paddingRight *= scale;
        }
        if (typeof this.paddingBottom === 'number') {
            this.paddingBottom *= scale;
        }
        if (this.rectInParent) {
            if (typeof this.rectInParent.x === 'number') {
                this.rectInParent.x *= scale;
            }
            if (typeof this.rectInParent.y === 'number') {
                this.rectInParent.y *= scale;
            }
            if (typeof this.rectInParent.width === 'number') {
                this.rectInParent.width *= scale;
            }
            if (typeof this.rectInParent.height === 'number') {
                this.rectInParent.height *= scale;
            }
            if (typeof this.rectInParent.marginLeft === 'number') {
                this.rectInParent.marginLeft *= scale;
            }
            if (typeof this.rectInParent.marginTop === 'number') {
                this.rectInParent.marginTop *= scale;
            }
            if (typeof this.rectInParent.marginRight === 'number') {
                this.rectInParent.marginRight *= scale;
            }
            if (typeof this.rectInParent.marginBottom === 'number') {
                this.rectInParent.marginBottom *= scale;
            }
        }
        this.rect.calcCenter();
        if (this.animateFrames && this.animateFrames.length) {
            for (var _i = 0, _a = this.animateFrames; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.initState) {
                    if (!item.initState.scale) {
                        item.initState = new Node(item.initState);
                    }
                    item.initState.scale(scale, center);
                }
                if (item.state) {
                    if (!item.state.scale) {
                        item.state = new Node(item.state);
                    }
                    item.state.scale(scale, center);
                }
                // fix bug
                item.state.font.fontSize = item.initState.font.fontSize;
            }
        }
        this.elementRendered = false;
        this.init();
        if (this.children) {
            for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
                var item = _c[_b];
                item.scale(scale, center);
            }
        }
        if (this.animateReady) {
            this.animateReady.scale(scale, center);
        }
    };
    Node.prototype.translate = function (x, y) {
        this.rect.x += x;
        this.rect.y += y;
        this.rect.ex = this.rect.x + this.rect.width;
        this.rect.ey = this.rect.y + this.rect.height;
        this.rect.calcCenter();
        if (this.animateFrames && this.animateFrames.length) {
            for (var _i = 0, _a = this.animateFrames; _i < _a.length; _i++) {
                var frame = _a[_i];
                var initState = frame.initState, state = frame.state;
                if (initState && initState.translate) {
                    initState.translate(x, y);
                }
                if (state && state.translate) {
                    state.translate(x, y);
                }
            }
        }
        this.init();
        if (this.children) {
            for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
                var item = _c[_b];
                item.translate(x, y);
            }
        }
        if (this.animateReady) {
            this.animateReady.translate(x, y);
        }
    };
    Node.prototype.initRect = function () {
        this.rect.init();
        if (this.children) {
            this.calcChildrenRect();
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item instanceof Node) {
                    item.initRect();
                }
            }
        }
    };
    Node.prototype.nearestAnchor = function (pt) {
        var dis = 99999;
        var index = 0;
        for (var i = 0; i < this.rotatedAnchors.length; ++i) {
            var d = distance(pt, this.rotatedAnchors[i]);
            if (dis > d) {
                dis = d;
                index = i;
            }
        }
        return {
            index: index,
            direction: this.rotatedAnchors[index].direction,
        };
    };
    Node.prototype.hitInSelf = function (point, padding) {
        if (padding === void 0) { padding = 0; }
        if (this.rotate % 360 === 0) {
            return this.rect.hit(point, padding);
        }
        var pts = this.rect.toPoints();
        for (var _i = 0, pts_1 = pts; _i < pts_1.length; _i++) {
            var pt = pts_1[_i];
            pt.rotate(this.rotate, this.rect.center);
        }
        return pointInRect(point, pts);
    };
    Node.prototype.hit = function (pt, padding) {
        if (padding === void 0) { padding = 0; }
        var node;
        if (this.hitInSelf(pt, padding)) {
            node = this;
        }
        if (this.children) {
            var len = this.children.length;
            for (var i = len - 1; i > -1; --i) {
                var pen = this.children[i];
                var p = pen.hit(pt, padding);
                if (p) {
                    node = p;
                    break;
                }
            }
        }
        return node;
    };
    Node.prototype.round = function () {
        this.rect.round();
        if (this.children) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var item = _a[_i];
                item.rect.round();
            }
        }
    };
    Node.prototype.clone = function () {
        var n = new Node(this);
        n.setTID(this.TID);
        var newNode = _.cloneDeep(n);
        newNode.setChildrenIds();
        return newNode;
    };
    return Node;
}(Pen));
export { Node };
//# sourceMappingURL=node.js.map