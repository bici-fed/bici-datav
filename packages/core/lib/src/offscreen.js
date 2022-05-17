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
var Offscreen = /** @class */ (function (_super) {
    __extends(Offscreen, _super);
    function Offscreen(parentElem, options, TID) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, parentElem, options, TID) || this;
        _this.parentElem = parentElem;
        _this.options = options;
        _this.activeLayer = Store.get(_this.generateStoreKey('LT:ActiveLayer'));
        _this.hoverLayer = Store.get(_this.generateStoreKey('LT:HoverLayer'));
        _this.animateLayer = Store.get(_this.generateStoreKey('LT:AnimateLayer'));
        Store.set(_this.generateStoreKey('LT:offscreen'), _this.canvas);
        return _this;
    }
    Offscreen.prototype.render = function () {
        _super.prototype.render.call(this);
        var ctx = this.canvas.getContext('2d');
        ctx.strokeStyle = this.options.color;
        for (var _i = 0, _a = this.data.pens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.getTID()) {
                item.setTID(this.TID);
            }
            item.render(ctx);
        }
        this.activeLayer.render(ctx);
        this.animateLayer.render(ctx);
        this.hoverLayer.render(ctx);
    };
    return Offscreen;
}(Canvas));
export { Offscreen };
//# sourceMappingURL=offscreen.js.map