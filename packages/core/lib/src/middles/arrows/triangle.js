export function triangleSolid(ctx, from, to, size, fillStyle) {
    size += ctx.lineWidth * 3;
    var arrowWidth = ctx.lineWidth / 10;
    if (ctx.lineWidth < 2) {
        ctx.lineWidth = 2;
        arrowWidth = 0;
    }
    ctx.translate(to.x, to.y);
    ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
    ctx.translate(-to.x - ctx.lineWidth + arrowWidth * 5, -to.y);
    ctx.moveTo(to.x, to.y + arrowWidth);
    ctx.lineTo(to.x, to.y - arrowWidth);
    ctx.lineTo(to.x - size, to.y - size / 3);
    ctx.lineTo(to.x - size, to.y + size / 3);
    ctx.closePath();
    ctx.stroke();
    if (fillStyle) {
        ctx.fillStyle = fillStyle;
    }
    ctx.fill();
}
export function triangle(ctx, from, to, size) {
    triangleSolid(ctx, from, to, size, '#fff');
}
//# sourceMappingURL=triangle.js.map