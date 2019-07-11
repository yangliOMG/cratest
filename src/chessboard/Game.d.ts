export declare type PositionObserver = ((position: [number, number]) => void) | null;
export declare function observe(o: PositionObserver): () => void;
export declare function canMoveKnight(toX: number, toY: number): boolean;
export declare function moveKnight(toX: number, toY: number): void;
