import { PenType, getRect } from '@bici-topology/core';
import { alignNodes, spaceBetween } from './align';
export function layout(pens, params) {
    var spaceWidth = params.spaceWidth || 30;
    var spaceHeight = params.spaceHeight || 30;
    var rect = getRect(pens);
    var left = rect.x;
    var top = rect.y;
    var rows = [];
    var row = [];
    var maxHeight = 0;
    for (var _i = 0, pens_1 = pens; _i < pens_1.length; _i++) {
        var item = pens_1[_i];
        if (item.type === PenType.Line) {
            continue;
        }
        if (params.nodeWidth > 0) {
            item.rect.width = params.nodeWidth;
        }
        if (params.nodeHeight > 0) {
            item.rect.height = params.nodeHeight;
        }
        if (item.rect.height > maxHeight) {
            maxHeight = item.rect.height;
        }
        item.rect.x = left;
        item.rect.y = top;
        item.rect.init();
        row.push(item);
        left += item.rect.width + spaceWidth;
        if (left > params.maxWidth || (params.maxCount > 0 && row.length >= params.maxCount)) {
            rows.push(row);
            row = [];
            left = rect.x;
            top += maxHeight + spaceHeight;
            maxHeight = 0;
        }
    }
    rows.push(row);
    for (var _a = 0, rows_1 = rows; _a < rows_1.length; _a++) {
        var item = rows_1[_a];
        var r = getRect(item);
        r.width = params.maxWidth;
        alignNodes(item, r, 'middle');
        if (params.maxCount > 0) {
            spaceBetween(item, params.maxWidth);
        }
    }
}
//# sourceMappingURL=layout.js.map