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
import { Layer } from './layer';
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(parentElem, options, TID) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, TID) || this;
        _this.parentElem = parentElem;
        _this.options = options;
        _this.canvas = document.createElement('canvas');
        _this.width = 0;
        _this.height = 0;
        _this.data = Store.get(_this.generateStoreKey('topology-data'));
        _this.canvas.style.position = 'absolute';
        _this.canvas.style.left = '0';
        _this.canvas.style.top = '0';
        _this.canvas.style.outline = 'none';
        if (!Canvas.dpiRatio) {
            if (!options.extDpiRatio && options.extDpiRatio !== 0) {
                if (window.devicePixelRatio > 1) {
                    options.extDpiRatio = 0.25;
                }
                else {
                    options.extDpiRatio = 0;
                }
            }
            Canvas.dpiRatio = window.devicePixelRatio + options.extDpiRatio;
            if (Canvas.dpiRatio < 1) {
                Canvas.dpiRatio = 1;
            }
        }
        return _this;
    }
    Canvas.prototype.resize = function (size) {
        if (size) {
            this.width = size.width | 0;
            this.height = size.height | 0;
        }
        else {
            if (this.options.width && this.options.width !== 'auto') {
                this.width = +this.options.width;
            }
            else {
                this.width = this.parentElem.clientWidth;
            }
            if (this.options.height && this.options.height !== 'auto') {
                this.height = +this.options.height;
            }
            else {
                this.height = this.parentElem.clientHeight;
            }
        }
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.canvas.width = (this.width * Canvas.dpiRatio) | 0;
        this.canvas.height = (this.height * Canvas.dpiRatio) | 0;
        this.canvas.getContext('2d').scale(Canvas.dpiRatio, Canvas.dpiRatio);
        Store.set(this.generateStoreKey('LT:size'), { width: this.canvas.width, height: this.canvas.height });
    };
    Canvas.prototype.render = function () {
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Canvas.prototype.getDpiRatio = function () {
        return Canvas.dpiRatio;
    };
    Canvas.dpiRatio = 0;
    return Canvas;
}(Layer));
export { Canvas };
//# sourceMappingURL=canvas.js.map