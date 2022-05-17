export function simpleCard(ctx, node) {
    var wr = node.borderRadius;
    var hr = node.borderRadius;
    if (node.borderRadius < 1) {
        wr = node.rect.width * node.borderRadius;
        hr = node.rect.height * node.borderRadius;
    }
    var r = wr < hr ? wr : hr;
    if (node.rect.width < 2 * r) {
        r = node.rect.width / 2;
    }
    if (node.rect.height < 2 * r) {
        r = node.rect.height / 2;
    }
    ctx.beginPath();
    ctx.moveTo(node.rect.x + r, node.rect.y);
    ctx.arcTo(node.rect.x + node.rect.width, node.rect.y, node.rect.x + node.rect.width, node.rect.y + node.rect.height, r);
    ctx.arcTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height, node.rect.x, node.rect.y + node.rect.height, r);
    ctx.arcTo(node.rect.x, node.rect.y + node.rect.height, node.rect.x, node.rect.y, r);
    ctx.arcTo(node.rect.x, node.rect.y, node.rect.x + node.rect.width, node.rect.y, r);
    ctx.closePath();
    ctx.moveTo(node.rect.x, node.rect.y + 40);
    //ctx.lineTo(node.rect.ex, node.rect.y + 40);
    var height = node.rect.y + 20 + node.rect.height / 2;
    ctx.moveTo(node.rect.x, height);
    //ctx.lineTo(node.rect.ex, height);
    var linear = ctx.createLinearGradient(node.rect.x, node.rect.y, node.rect.ex + node.rect.width / 2, node.rect.ey + node.rect.height);
    // const linear = ctx.createRadialGradient(
    //     node.rect.x+node.rect.width/2,
    //     node.rect.y+node.rect.height/2,
    //     10,
    //     node.rect.x+node.rect.width/2,
    //     node.rect.y+node.rect.height/2,
    //     100);
    var fillStyle = node.fillStyle;
    if (fillStyle) {
        linear.addColorStop(0, getLightColor(fillStyle, 0.5));
        linear.addColorStop(1, fillStyle);
        ctx.fillStyle = linear;
        ctx.strokeStyle = fillStyle;
    }
    ctx.lineWidth = 0;
    (node.fillStyle || node.bkType) && ctx.fill();
    ctx.stroke();
}
//hex颜色转rgb颜色
function hexToRgb(str) {
    var r = /^\#?[0-9a-fA-F]{6}$/;
    var r2 = /^(rgb|rgba)/g;
    //test方法检查在字符串中是否存在一个模式，如果存在则返回true，否则返回false
    if (r.test(str)) {
        //replace替换查找的到的字符串
        str = str.replace("#", "");
        //match得到查询数组
        var hxs = str.match(/../g);
        for (var i = 0; i < 3; i++)
            hxs[i] = parseInt(hxs[i], 16);
        return hxs;
    }
    else if (r2.test(str)) {
        var r3 = /[0-9]{1,3}/g;
        var rgbas = str.match(r3);
        rgbas = rgbas.map(function (item) {
            return parseInt(item);
        });
        return rgbas;
    }
    return str;
}
//得到hex颜色值为color的减淡颜色值，level为加深的程度，限0-1之间
function getLightColor(color, level) {
    var rgbc = hexToRgb(color);
    for (var i = 0; i < 3; i++)
        rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i]);
    return rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}
//GRB颜色转Hex颜色
function rgbToHex(a, b, c) {
    var r = /^\d{1,3}$/;
    if (!r.test(a) || !r.test(b) || !r.test(c))
        return "white";
    var hexs = [a.toString(16), b.toString(16), c.toString(16)];
    for (var i = 0; i < 3; i++)
        if (hexs[i].length == 1)
            hexs[i] = "0" + hexs[i];
    return "#" + hexs.join("");
}
//# sourceMappingURL=card.js.map