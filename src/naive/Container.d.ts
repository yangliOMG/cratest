import React from 'react';
export interface ContainerProps {
    hideSourceOnDrag: boolean;
}
export interface ContainerState {
    boxes: {
        [key: string]: {
            top: number;
            left: number;
            title: string;
        };
    };
}
declare const Container: React.FC<ContainerProps>;
export default Container;
