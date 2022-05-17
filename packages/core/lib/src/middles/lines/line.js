export function line(ctx, l) {
    ctx.beginPath();
    ctx.moveTo(l.from.x, l.from.y);
    ctx.lineTo(l.to.x, l.to.y);
    ctx.stroke();
}
export function lineControlPoints(ctx, l) { }
export function calcLineControlPoints(l) {
    l.controlPoints = [];
}
//# sourceMappingURL=line.js.map