import React from 'react';
export interface BoxProps {
    id: any;
    left: number;
    top: number;
    hideSourceOnDrag?: boolean;
}
declare const Box: React.FC<BoxProps>;
export default Box;
