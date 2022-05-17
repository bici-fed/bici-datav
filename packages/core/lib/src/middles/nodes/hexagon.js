export function hexagon(ctx, node) {
    ctx.beginPath();
    var pos = node.rect.width / 5;
    ctx.moveTo(node.rect.x + pos, node.rect.y);
    ctx.lineTo(node.rect.x + node.rect.width - pos, node.rect.y);
    ctx.lineTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2);
    ctx.lineTo(node.rect.x + node.rect.width - pos, node.rect.y + node.rect.height);
    ctx.lineTo(node.rect.x + pos, node.rect.y + node.rect.height);
    ctx.lineTo(node.rect.x, node.rect.y + node.rect.height / 2);
    ctx.closePath();
    (node.fillStyle || node.bkType) && ctx.fill();
    ctx.stroke();
}
//# sourceMappingURL=hexagon.js.map