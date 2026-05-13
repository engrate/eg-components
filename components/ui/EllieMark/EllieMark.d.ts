import * as React from 'react';
export interface EllieMarkProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'children' | 'values' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
    /** Diameter in pixels.
     * @default 32 */
    size?: number;
}
/**
 * Brand mark for Ellie — Engrate's chat assistant. WALL-E-style binocular
 * visor: two sunflower goggle barrels bridged at the top, each with a
 * metallic rim, dark glass, and an upper-left reflection. The visor briefly
 * narrows on a random interval for a robotic "blink" matching the cadence
 * of `ellie-alive.mp4`. Respects `prefers-reduced-motion`.
 */
export declare const EllieMark: React.ForwardRefExoticComponent<EllieMarkProps & React.RefAttributes<SVGSVGElement>>;
