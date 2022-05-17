export function line(ctx, from, to, size) {
    size += ctx.lineWidth * 3;
    ctx.translate(to.x, to.y);
    ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
    ctx.translate(-to.x - ctx.lineWidth / 5, -to.y - ctx.lineWidth / 5);
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - size, to.y - size / 3);
    ctx.moveTo(to.x, to.y);
    ctx.lineTo(to.x - size, to.y + size / 3);
    ctx.stroke();
}
export function lineUp(ctx, from, to, size) {
    size += ctx.lineWidth * 3;
    ctx.translate(to.x, to.y);
    ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
    ctx.translate(-to.x - ctx.lineWidth / 5, -to.y - ctx.lineWidth / 5);
    if (to.x > from.x) {
        ctx.moveTo(to.x, to.y);
        ctx.lineTo(to.x - size, to.y - size / 3);
    }
    else {
        ctx.moveTo(to.x, to.y);
        ctx.lineTo(to.x - size, to.y + size / 3);
    }
    ctx.stroke();
}
export function lineDown(ctx, from, to, size) {
    size += ctx.lineWidth * 3;
    ctx.translate(to.x, to.y);
    ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
    ctx.translate(-to.x - ctx.lineWidth / 5, -to.y - ctx.lineWidth / 5);
    if (to.x < from.x) {
        ctx.moveTo(to.x, to.y);
        ctx.lineTo(to.x - size, to.y - size / 3);
    }
    else {
        ctx.moveTo(to.x, to.y);
        ctx.lineTo(to.x - size, to.y + size / 3);
    }
    ctx.stroke();
}
//# sourceMappingURL=line.js.map