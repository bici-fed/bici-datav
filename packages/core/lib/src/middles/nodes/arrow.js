export function leftArrow(ctx, node) {
    ctx.beginPath();
    ctx.moveTo(node.rect.x, node.rect.y + node.rect.height / 2);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y + node.rect.height / 3);
    ctx.lineTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 3);
    ctx.lineTo(node.rect.x + node.rect.width, node.rect.y + (node.rect.height * 2) / 3);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y + (node.rect.height * 2) / 3);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y + (node.rect.height * 2) / 3);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y + node.rect.height);
    ctx.closePath();
    (node.fillStyle || node.bkType) && ctx.fill();
    ctx.stroke();
}
export function rightArrow(ctx, node) {
    ctx.beginPath();
    ctx.moveTo(node.rect.x, node.rect.y + node.rect.height / 3);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y + node.rect.height / 3);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y);
    ctx.lineTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y + node.rect.height);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y + (node.rect.height * 2) / 3);
    ctx.lineTo(node.rect.x, node.rect.y + (node.rect.height * 2) / 3);
    ctx.closePath();
    (node.fillStyle || node.bkType) && ctx.fill();
    ctx.stroke();
}
export function twowayArrow(ctx, node) {
    ctx.beginPath();
    ctx.moveTo(node.rect.x, node.rect.y + node.rect.height / 2);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y + node.rect.height / 3);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y + node.rect.height / 3);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y);
    ctx.lineTo(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y + node.rect.height);
    ctx.lineTo(node.rect.x + (node.rect.width - node.rect.height / 2), node.rect.y + (node.rect.height * 2) / 3);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y + (node.rect.height * 2) / 3);
    ctx.lineTo(node.rect.x + node.rect.height / 2, node.rect.y + node.rect.height);
    ctx.closePath();
    (node.fillStyle || node.bkType) && ctx.fill();
    ctx.stroke();
}
//# sourceMappingURL=arrow.js.map