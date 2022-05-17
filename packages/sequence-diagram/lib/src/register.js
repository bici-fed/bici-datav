import { registerNode } from '@bici-topology/core';
import { lifeline, lifelineAnchors, lifelineIconRect, lifelineTextRect } from './lifeline';
import { sequenceFocus, sequenceFocusAnchors, sequenceFocusIconRect, sequenceFocusTextRect } from './focus';
export function register() {
    registerNode('lifeline', lifeline, lifelineAnchors, lifelineIconRect, lifelineTextRect);
    registerNode('sequenceFocus', sequenceFocus, sequenceFocusAnchors, sequenceFocusIconRect, sequenceFocusTextRect);
}
//# sourceMappingURL=register.js.map