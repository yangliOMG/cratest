import React from 'react';
import { useDrop } from 'react-dnd';
import { Square } from './Square';
import { canMoveKnight, moveKnight } from './Game';
import ItemTypes from './ItemTypes';
import Overlay from './Overlay';
export const BoardSquare = ({ x, y, children, }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });
    const black = (x + y) % 2 === 1;
    return (React.createElement("div", { ref: drop, style: {
            position: 'relative',
            width: '100%',
            height: '100%',
        } },
        React.createElement(Square, { black: black }, children),
        isOver && !canDrop && React.createElement(Overlay, { color: "red" }),
        !isOver && canDrop && React.createElement(Overlay, { color: "yellow" }),
        isOver && canDrop && React.createElement(Overlay, { color: "green" })));
};
