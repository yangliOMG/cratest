import React from 'react';
export interface SourceBoxProps {
    color?: string;
    onToggleForbidDrag?: () => void;
}
declare const SourceBox: React.FC<SourceBoxProps>;
export default SourceBox;
