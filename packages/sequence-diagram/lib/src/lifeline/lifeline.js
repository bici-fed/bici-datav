export function lifeline(ctx, node) {
    var height = 50;
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
    if (height < 2 * r) {
        r = height / 2;
    }
    ctx.beginPath();
    ctx.moveTo(node.rect.x + r, node.rect.y);
    ctx.arcTo(node.rect.x + node.rect.width, node.rect.y, node.rect.x + node.rect.width, node.rect.y + height, r);
    ctx.arcTo(node.rect.x + node.rect.width, node.rect.y + height, node.rect.x, node.rect.y + height, r);
    ctx.arcTo(node.rect.x, node.rect.y + height, node.rect.x, node.rect.y, r);
    ctx.arcTo(node.rect.x, node.rect.y, node.rect.x + node.rect.width, node.rect.y, r);
    ctx.closePath();
    (node.fillStyle || node.bkType) && ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.setLineDash([7, 7]);
    var middle = node.rect.x + node.rect.width / 2;
    ctx.moveTo(middle, node.rect.y + height + 1);
    ctx.lineTo(middle, node.rect.ey);
    ctx.stroke();
    ctx.restore();
}
//# sourceMappingURL=lifeline.js.map