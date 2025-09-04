import { type Bounds, Canvas, LatLng, type LatLngExpression, type Map, Point, Polyline, type PolylineOptions } from "leaflet";
declare module 'leaflet' {
    namespace LineUtil {
        function _getBitCode(point: Point, bounds: Bounds): number;
        function _getEdgeIntersection(a: Point, b: Point, code: number, bounds: Bounds, round: boolean | undefined): Point;
    }
}
export declare class Point3D extends Point {
    z?: number | undefined;
    constructor(x: number, y: number, z?: number, round?: boolean);
}
export type ColorPalette = {
    [value: number]: string;
};
declare class HotlineCanvasRenderer extends Canvas {
    private _palette;
    _drawing: boolean;
    _ctx: CanvasRenderingContext2D;
    _bounds: Bounds;
    constructor(options: HotlineOptions);
    _updatePoly(layer: Hotline): void;
    /**
     * Draws the paths.
     */
    draw(parts: Point[][], options: HotlineOptions): void;
    /**
     * Draws the outline of the graphs.
     * @private
     */
    _drawOutline(parts: Point[][], options: HotlineOptions): void;
    /**
     * Draws the color encoded hotline of the graphs.
     * @private
     */
    _drawHotline(parts: Point3D[][], options: HotlineOptions): void;
}
export interface HotlineOptions extends PolylineOptions {
    renderer: HotlineCanvasRenderer;
    weight: number;
    outlineWidth: number;
    outlineColor: string;
    min: number;
    max: number;
    palette: ColorPalette;
}
export declare class Hotline extends Polyline {
    options: HotlineOptions;
    _parts: Point[][];
    _rings: Point[][];
    _renderer: HotlineCanvasRenderer;
    static defaultOptions: {
        weight: number;
        outlineWidth: number;
        outlineColor: string;
        min: number;
        max: number;
        palette: {
            0: string;
            0.5: string;
            1: string;
        };
    };
    constructor(latlngs: LatLngExpression[] | LatLngExpression[][], options?: HotlineOptions);
    beforeAdd(map: Map): this;
    setStyle(style: HotlineOptions): this;
    /**
     * Just like the Leaflet version, but with support for a z coordinate.
     */
    _projectLatlngs(latlngs: LatLng[] | LatLng[][], result: Point[][], projectedBounds: Bounds): void;
    /**
     * Just like the Leaflet version, but uses `Util.clipSegment()`.
     */
    _clipPoints(): void;
    _clickTolerance(): number;
}
export {};
//# sourceMappingURL=leaflet.hotline.d.ts.map