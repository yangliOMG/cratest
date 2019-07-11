import React from 'react';
export interface TargetBoxProps {
    onDrop: (item: any) => void;
    lastDroppedColor?: string;
}
export interface StatefulTargetBoxState {
    lastDroppedColor: string | null;
}
export interface StatefulTargetBoxState {
    lastDroppedColor: string | null;
}
declare const StatefulTargetBox: React.FC;
export default StatefulTargetBox;
