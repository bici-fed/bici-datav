import { Node } from '@bici-topology/core';

export function biciPilot(ctx: CanvasRenderingContext2D, node: Node) {
  ctx.beginPath();
  ctx.fillStyle = ctx.strokeStyle;
  ctx.ellipse(
    node.rect.x + node.rect.width / 2,
    node.rect.y + node.rect.height / 2,
    node.rect.width / 4,
    node.rect.height / 4,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.stroke();
}
