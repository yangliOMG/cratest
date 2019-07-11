import React from 'react';
export interface DraggableBoxProps {
    id: string;
    title: string;
    left: number;
    top: number;
}
declare const DraggableBox: React.FC<DraggableBoxProps>;
export default DraggableBox;
