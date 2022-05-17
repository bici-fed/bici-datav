import { Node } from '@bici-topology/core';

export function biciVarer(ctx: CanvasRenderingContext2D, node: Node) {
  ctx.beginPath();
  ctx.moveTo(node.rect.x, node.rect.y);
  ctx.lineTo(node.rect.ex, node.rect.y);
  ctx.lineTo(node.rect.ex, node.rect.ey);
  ctx.lineTo(node.rect.x, node.rect.ey);
  ctx.lineTo(node.rect.x, node.rect.y);
  ctx.closePath();
  (node.fillStyle || node.bkType) && ctx.fill();
  ctx.stroke();
}

