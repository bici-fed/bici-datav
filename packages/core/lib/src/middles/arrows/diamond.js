export function diamondSolid(ctx, from, to, size, fillStyle) {
    size += ctx.lineWidth * 3;
    var r = size / 2;
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
    ctx.lineTo(to.x - r, to.y - r / 2);
    ctx.lineTo(to.x - size, to.y - arrowWidth);
    ctx.lineTo(to.x - size, to.y + arrowWidth);
    ctx.lineTo(to.x - r, to.y + r / 2);
    ctx.closePath();
    ctx.stroke();
    if (fillStyle) {
        ctx.fillStyle = fillStyle;
    }
    ctx.fill();
}
export function diamond(ctx, from, to, size) {
    diamondSolid(ctx, from, to, size, '#fff');
}
//# sourceMappingURL=diamond.js.map