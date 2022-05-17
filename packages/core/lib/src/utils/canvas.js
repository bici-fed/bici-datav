import { Point } from '../models/point';
export function flatNodes(nodes) {
    var result = {
        nodes: [],
        lines: [],
    };
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var item = nodes_1[_i];
        if (item.type) {
            result.lines.push(item);
            continue;
        }
        result.nodes.push(item);
        if (item.children) {
            result.nodes.push.apply(result.nodes, flatNodes(item.children).nodes);
            result.lines.push.apply(result.lines, flatNodes(item.children).lines);
        }
    }
    return result;
}
export function find(idOrTag, pens) {
    var result = [];
    pens.forEach(function (item) {
        if (item.id === idOrTag || item.tags.indexOf(idOrTag) > -1) {
            result.push(item);
        }
        if (item.children) {
            var children = find(idOrTag, item.children);
            if (children && children.length > 1) {
                result.push.apply(result, children);
            }
            else if (children) {
                result.push(children);
            }
        }
    });
    if (result.length === 0) {
        return;
    }
    else if (result.length === 1) {
        return result[0];
    }
    return result;
}
export function del(idOrTag, pens) {
    var deleted = [];
    for (var i = 0; i < pens.length; i++) {
        if (pens[i].id === idOrTag || pens[i].tags.indexOf(idOrTag) > -1) {
            deleted.push(pens[i]);
            pens.splice(i, 1);
            --i;
        }
        else if (pens[i].children) {
            deleted.push.apply(deleted, del(idOrTag, pens[i].children));
        }
    }
    return deleted;
}
export function getParent(pens, child) {
    var parent;
    for (var _i = 0, pens_1 = pens; _i < pens_1.length; _i++) {
        var item = pens_1[_i];
        if (item.type) {
            continue;
        }
        if (!item.children) {
            continue;
        }
        for (var _a = 0, _b = item.children; _a < _b.length; _a++) {
            var subItem = _b[_a];
            if (subItem.id === child.id) {
                return item;
            }
            if (subItem.type) {
                continue;
            }
            if (subItem.children) {
                parent = getParent(subItem.children, child);
                if (parent) {
                    return parent;
                }
            }
        }
    }
    return parent;
}
export function pointInRect(point, vertices) {
    if (vertices.length < 3) {
        return false;
    }
    var isIn = false;
    var last = vertices[vertices.length - 1];
    for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
        var item = vertices_1[_i];
        if ((item.y < point.y && last.y >= point.y) || (item.y >= point.y && last.y < point.y)) {
            if (item.x + ((point.y - item.y) * (last.x - item.x)) / (last.y - item.y) > point.x) {
                isIn = !isIn;
            }
        }
        last = item;
    }
    return isIn;
}
export function pointInLine(point, from, to) {
    var points = [
        new Point(from.x - 8, from.y - 8),
        new Point(to.x - 8, to.y - 8),
        new Point(to.x + 8, to.y + 8),
        new Point(from.x + 8, from.y + 8),
    ];
    return pointInRect(point, points);
}
export function lineLen(from, to) {
    var len = Math.sqrt(Math.pow(Math.abs(from.x - to.x), 2) + Math.pow(Math.abs(from.y - to.y), 2));
    return len | 0;
}
export function curveLen(from, cp1, cp2, to) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', "M".concat(from.x, " ").concat(from.y, " C").concat(cp1.x, " ").concat(cp1.y, " ").concat(cp2.x, " ").concat(cp2.y, " ").concat(to.x, " ").concat(to.y));
    return path.getTotalLength() | 0;
}
//# sourceMappingURL=canvas.js.map