import { Node } from '@bici-topology/core';
export function alignNodes(pens, rect, align) {
    for (var _i = 0, pens_1 = pens; _i < pens_1.length; _i++) {
        var item = pens_1[_i];
        if (!(item instanceof Node)) {
            continue;
        }
        switch (align) {
            case 'left':
                item.rect.x = rect.x;
                break;
            case 'right':
                item.rect.x = rect.ex - item.rect.width;
                break;
            case 'top':
                item.rect.y = rect.y;
                break;
            case 'bottom':
                item.rect.y = rect.ey - item.rect.height;
                break;
            case 'center':
                item.rect.x = rect.center.x - item.rect.width / 2;
                break;
            case 'middle':
                item.rect.y = rect.center.y - item.rect.height / 2;
                break;
        }
        item.rect.floor();
        item.rect.calcCenter();
        item.init();
        item.calcChildrenRect();
    }
}
export function spaceBetween(pens, width) {
    pens = pens.sort(function (a, b) {
        return a.rect.x - b.rect.x;
    });
    var space = 0;
    var cnt = 0;
    for (var _i = 0, pens_2 = pens; _i < pens_2.length; _i++) {
        var item = pens_2[_i];
        if (!(item instanceof Node)) {
            continue;
        }
        space += item.rect.width;
        ++cnt;
    }
    space = (width - space) / (cnt - 1);
    var left = 0;
    for (var _a = 0, pens_3 = pens; _a < pens_3.length; _a++) {
        var item = pens_3[_a];
        if (!(item instanceof Node)) {
            continue;
        }
        if (!left) {
            left = item.rect.x;
        }
        item.rect.x = left;
        left += item.rect.width + space;
        item.rect.floor();
        item.rect.calcCenter();
        item.init();
        item.calcChildrenRect();
    }
}
export function spaceBetweenColumn(pens, height) {
    pens = pens.sort(function (a, b) {
        return a.rect.y - b.rect.y;
    });
    var space = 0;
    var cnt = 0;
    for (var _i = 0, pens_4 = pens; _i < pens_4.length; _i++) {
        var item = pens_4[_i];
        if (!(item instanceof Node)) {
            continue;
        }
        space += item.rect.height;
        ++cnt;
    }
    space = (height - space) / (cnt - 1);
    var top = 0;
    for (var _a = 0, pens_5 = pens; _a < pens_5.length; _a++) {
        var item = pens_5[_a];
        if (!(item instanceof Node)) {
            continue;
        }
        if (!top) {
            top = item.rect.y;
        }
        item.rect.y = top;
        top += item.rect.height + space;
        item.rect.floor();
        item.rect.calcCenter();
        item.init();
        item.calcChildrenRect();
    }
}
//# sourceMappingURL=align.js.map