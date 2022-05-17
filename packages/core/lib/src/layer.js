var Layer = /** @class */ (function () {
    function Layer(TID) {
        this.TID = TID;
    }
    Layer.prototype.generateStoreKey = function (key) {
        return "".concat(this.TID, "-").concat(key);
    };
    return Layer;
}());
export { Layer };
//# sourceMappingURL=layer.js.map