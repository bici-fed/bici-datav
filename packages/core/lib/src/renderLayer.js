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
import { Store } from "@bici-topology/store-utils";
import { Canvas } from './canvas';
import { rgba } from './utils/math';
var RenderLayer = /** @class */ (function (_super) {
    __extends(RenderLayer, _super);
    function RenderLayer(parentElem, options, TID) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, parentElem, options, TID) || this;
        _this.parentElem = parentElem;
        _this.options = options;
        _this.render = function () {
            if (_this.data && _this.data.bkImage && !_this.bkImgRect) {
                _this.loadBkImg(_this.render);
                return;
            }
            if (!_this.width || !_this.height || !_this.offscreen) {
                return;
            }
            var ctx = _this.canvas.getContext('2d');
            ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
            if (_this.data.bkColor || _this.options.bkColor) {
                ctx.fillStyle = _this.data.bkColor || _this.options.bkColor;
                ctx.fillRect(0, 0, _this.width, _this.height);
            }
            if (_this.bkImg && _this.bkImgRect) {
                ctx.drawImage(_this.bkImg, 0, 0, _this.width, _this.height);
            }
            if (_this.data.grid || _this.options.grid) {
                _this.grid();
            }
            if (_this.data.rule || _this.options.rule) {
                _this.rule();
            }
            ctx.drawImage(_this.offscreen, 0, 0, _this.width, _this.height);
        };
        _this.offscreen = Store.get(_this.generateStoreKey('LT:offscreen'));
        _this.parentElem.appendChild(_this.canvas);
        _this.data = Store.get(_this.generateStoreKey('topology-data'));
        return _this;
    }
    RenderLayer.prototype.loadBkImg = function (cb) {
        var _this = this;
        if (!this.data.bkImage) {
            return;
        }
        this.bkImg = new Image();
        // this.bkImg.crossOrigin = 'anonymous';
        this.bkImg.src = this.data.bkImage;
        this.bkImg.onload = function () {
            _this.bkImgRect = _this.coverRect(_this.canvas.width, _this.canvas.height, _this.bkImg.width, _this.bkImg.height);
            if (cb) {
                cb();
            }
        };
    };
    RenderLayer.prototype.clearBkImg = function () {
        this.bkImgRect = null;
    };
    RenderLayer.prototype.rule = function () {
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = rgba(0.7, this.data.ruleColor || this.options.ruleColor || '#888');
        ctx.beginPath();
        for (var i = 10; i < this.width; i += 10) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 5);
        }
        for (var i = 10; i < this.height; i += 10) {
            ctx.moveTo(0, i);
            ctx.lineTo(5, i);
        }
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = this.data.ruleColor || this.options.ruleColor || '#888';
        ctx.fillStyle = ctx.strokeStyle;
        for (var i = 100; i < this.width; i += 100) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 10);
            ctx.fillText(i.toString(), i + 4, 16);
        }
        for (var i = 100; i < this.height; i += 100) {
            ctx.moveTo(0, i);
            ctx.lineTo(10, i);
        }
        ctx.stroke();
        for (var i = 100; i < this.height; i += 100) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(16, i - 4);
            ctx.rotate((270 * Math.PI) / 180);
            ctx.fillText(i.toString(), 0, 0);
            ctx.restore();
        }
        ctx.restore();
    };
    RenderLayer.prototype.grid = function () {
        var ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.data.gridColor || this.options.gridColor || '#f3f3f3';
        ctx.beginPath();
        var size = this.data.gridSize || this.options.gridSize;
        for (var i = size; i < this.width; i += size) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.height);
        }
        for (var i = size; i < this.height; i += size) {
            ctx.moveTo(0, i);
            ctx.lineTo(this.width, i);
        }
        ctx.stroke();
        ctx.restore();
    };
    RenderLayer.prototype.coverRect = function (canvasWidth, canvasHeight, imgWidth, imgHeight) {
        var x = 0;
        var y = 0;
        var width = imgWidth;
        var height = imgHeight;
        if (imgWidth > imgHeight || (imgWidth === imgHeight && canvasWidth < canvasHeight)) {
            width = (canvasWidth * height) / canvasHeight;
            x = (imgWidth - width) / 2;
        }
        else if (imgWidth < imgHeight || (imgWidth === imgHeight && canvasWidth > canvasHeight)) {
            height = (canvasHeight * width) / canvasWidth;
            y = (imgHeight - height) / 2;
        }
        return {
            x: x,
            y: y,
            width: width,
            height: height,
        };
    };
    return RenderLayer;
}(Canvas));
export { RenderLayer };
//# sourceMappingURL=renderLayer.js.map