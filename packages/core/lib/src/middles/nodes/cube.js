import { Cube } from './cube.model';
export function cube(ctx, node) {
    new Cube(node.rect, node.z, node.zRotate, node.fillStyle, node.strokeStyle).render(ctx);
}
//# sourceMappingURL=cube.js.map