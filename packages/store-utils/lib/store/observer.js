import { observers } from './data';
var Observer = /** @class */ (function () {
    function Observer(id, key, fn) {
        this.key = '';
        this.id = id;
        this.key = key;
        this.fn = fn;
    }
    Observer.prototype.unsubscribe = function () {
        delete observers[this.id];
    };
    return Observer;
}());
export { Observer };
//# sourceMappingURL=observer.js.map