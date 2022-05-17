// NEW_BOARD_INDUSTRY_CONVEYOR(121,"传送带"),
//     NEW_BOARD_INDUSTRY_STORAGE_SILO(122,"储料罐"),
//     NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY(123,"化工"),
//     NEW_BOARD_INDUSTRY_MATERIAL_HANDLING(124,"原料处理"),
//     NEW_BOARD_INDUSTRY_REACTOR(125,"反应器"),
//     NEW_BOARD_INDUSTRY_DIRECTOR(126,"控制器"),
//     NEW_BOARD_INDUSTRY_MACHINE_WORK(127,"机械加工"),
//     NEW_BOARD_INDUSTRY_PUMP(128,"泵"),
//     NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY(129,"电机"),
//     NEW_BOARD_INDUSTRY_CIRCUITRY(130,"电路图"),
//     NEW_BOARD_INDUSTRY_PIPELINE(131,"管道"),
//     NEW_BOARD_INDUSTRY_VENT_LINE(132,"通风管道"),
//     NEW_BOARD_INDUSTRY_MINE(133,"采矿"),
//     NEW_BOARD_INDUSTRY_STEEL_INDUSTRY(134,"钢铁行业"),
//     NEW_BOARD_INDUSTRY_BOILER(135,"锅炉"),
//     NEW_BOARD_INDUSTRY_KLEP(136,"阀门"),
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as _ from "lodash";
export var NEW_BOARD_INDUSTRY_CONVEYOR = [121, "传送带"];
export var NEW_BOARD_INDUSTRY_STORAGE_SILO = [122, "储料罐"];
export var NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY = [123, "化工"];
export var NEW_BOARD_INDUSTRY_MATERIAL_HANDLING = [124, "原料处理"];
export var NEW_BOARD_INDUSTRY_REACTOR = [125, "反应器"];
export var NEW_BOARD_INDUSTRY_DIRECTOR = [126, "控制器"];
export var NEW_BOARD_INDUSTRY_MACHINE_WORK = [127, "机械加工"];
export var NEW_BOARD_INDUSTRY_PUMP = [128, "泵"];
export var NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY = [129, "电机"];
export var NEW_BOARD_INDUSTRY_CIRCUITRY = [130, "电路图"];
export var NEW_BOARD_INDUSTRY_PIPELINE = [131, "管道"];
export var NEW_BOARD_INDUSTRY_VENT_LINE = [132, "通风管道"];
export var NEW_BOARD_INDUSTRY_MINE = [133, "采矿"];
export var NEW_BOARD_INDUSTRY_STEEL_INDUSTRY = [134, "钢铁行业"];
export var NEW_BOARD_INDUSTRY_BOILER = [135, "锅炉"];
export var NEW_BOARD_INDUSTRY_KLEP = [136, "阀门"];
export var industry_List = [
    NEW_BOARD_INDUSTRY_CONVEYOR,
    NEW_BOARD_INDUSTRY_STORAGE_SILO,
    NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY,
    NEW_BOARD_INDUSTRY_MATERIAL_HANDLING,
    NEW_BOARD_INDUSTRY_REACTOR,
    NEW_BOARD_INDUSTRY_DIRECTOR,
    NEW_BOARD_INDUSTRY_MACHINE_WORK,
    NEW_BOARD_INDUSTRY_PUMP,
    NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY,
    NEW_BOARD_INDUSTRY_CIRCUITRY,
    NEW_BOARD_INDUSTRY_PIPELINE,
    NEW_BOARD_INDUSTRY_VENT_LINE,
    NEW_BOARD_INDUSTRY_MINE,
    NEW_BOARD_INDUSTRY_STEEL_INDUSTRY,
    NEW_BOARD_INDUSTRY_BOILER,
    NEW_BOARD_INDUSTRY_KLEP,
];
export var onDrag = function (event, item) {
    if (!item.width) {
        event.dataTransfer.setData('Text', JSON.stringify({
            name: 'image',
            rect: {
                width: 150,
                height: 150,
            },
            image: item.url
        }));
        return;
    }
    var eventClone = _.cloneDeep(event);
    fitImageSize(item).then(function (r) {
        eventClone.dataTransfer.setData('Text', JSON.stringify({
            name: 'image',
            rect: {
                width: r.width,
                height: r.height,
            },
            image: r.url
        }));
    });
};
export var scaleWidthHeight = function (width, height, maxSize) {
    if (width > maxSize && width > height) {
        var w = maxSize;
        var h = Math.round(w * height / width);
        return {
            width: w,
            height: h,
        };
    }
    else {
        var h = maxSize;
        var w = Math.round(h * width / height);
        return {
            width: w,
            height: h,
        };
    }
};
export var rtnImg = function (nImg, resolve, maxSize, img) {
    var width = nImg.width;
    var height = nImg.height;
    var r = scaleWidthHeight(width, height, maxSize);
    resolve(__assign(__assign({}, img), { url: img.url + '?_t=' + new Date().getTime(), width: r.width, height: r.height }));
};
/**
 *
 * @param img
 * @param maxSize
 */
export var fitImageSize = function (img, maxSize) {
    if (maxSize === void 0) { maxSize = 250; }
    return new Promise(function (resolve, reject) {
        if (!img.width) { // 如果没有图片的宽度
            var nImg = new Image();
            nImg.src = img.url;
            if (img.complete) {
                rtnImg(nImg, resolve, maxSize, img);
            }
            else {
                nImg.onload = function () {
                    rtnImg(nImg, resolve, maxSize, img);
                };
            }
        }
        else if (typeof img === 'object') { // 包含图片大小的对象
            if (img.width <= maxSize && img.height <= maxSize) {
                resolve(__assign({}, img));
            }
            else if (img.width > maxSize && img.width > img.height) {
                var width = maxSize;
                var height = width * img.height / img.width;
                resolve(__assign(__assign({}, img), { width: width, height: height }));
            }
            else {
                var height = maxSize;
                var width = height * img.width / img.height;
                resolve(__assign(__assign({}, img), { width: width, height: height }));
            }
        }
    });
};
//# sourceMappingURL=config.js.map