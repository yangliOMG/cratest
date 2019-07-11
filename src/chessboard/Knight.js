import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import ItemTypes from './ItemTypes';
import knightImage from './knightImage';
const knightStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
};
export const Knight = () => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(DragPreviewImage, { connect: preview, src: knightImage }),
        React.createElement("div", { ref: drag, style: {
                ...knightStyle,
                opacity: isDragging ? 0.5 : 1,
            } }, "\u2658")));
};
