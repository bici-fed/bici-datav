export function deepClone(o) {
    if (Array.isArray(o)) {
        var arr_1 = [];
        o.forEach(function (item) {
            arr_1.push(deepClone(item));
        });
        return arr_1;
    }
    else if (typeof o === 'object') {
        if (o === null) {
            return null;
        }
        else if (o.constructor === RegExp) {
            return o;
        }
        var _o = {};
        for (var key in o) {
            _o[key] = deepClone(o[key]);
        }
        return _o;
    }
    return o;
}
//# sourceMappingURL=clone.js.map