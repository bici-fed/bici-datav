export function line(ctx, node) {
    ctx.beginPath();
    var y = node.rect.y + node.rect.height / 2;
    ctx.moveTo(node.rect.x, y);
    ctx.lineTo(node.rect.x + node.rect.width, y);
    ctx.stroke();
}
//# sourceMappingURL=line.js.map