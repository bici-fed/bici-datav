export function circle(ctx, node) {
    ctx.beginPath();
    var radiusY = node.rect.height / 2 > 0 ? node.rect.height / 2 : 0;
    var radiusX = node.rect.width / 2 > 0 ? node.rect.width / 2 : 0;
    ctx.ellipse(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height / 2, 
    // node.rect.width / 2,
    // node.rect.height / 2,
    radiusX, radiusY, 0, 0, Math.PI * 2);
    (node.fillStyle || node.bkType) && ctx.fill();
    ctx.stroke();
}
//# sourceMappingURL=circle.js.map