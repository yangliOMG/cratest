import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import Colors from './Colors';
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
const TargetBox = ({ onDrop, lastDroppedColor }) => {
    const [{ isOver, draggingColor, canDrop }, drop] = useDrop({
        accept: [Colors.YELLOW, Colors.BLUE],
        drop(item) {
            onDrop(item.type);
            return undefined;
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    });
    const opacity = isOver ? 1 : 0.7;
    let backgroundColor = '#fff';
    switch (draggingColor) {
        case Colors.BLUE:
            backgroundColor = 'lightblue';
            break;
        case Colors.YELLOW:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        default:
            break;
    }
    return (React.createElement("div", { ref: drop, style: { ...style, backgroundColor, opacity } },
        React.createElement("p", null, "Drop here."),
        !canDrop && lastDroppedColor && React.createElement("p", null,
            "Last dropped: ",
            lastDroppedColor)));
};
const StatefulTargetBox = props => {
    const [lastDroppedColor, setLastDroppedColor] = useState(null);
    const handleDrop = useCallback((color) => setLastDroppedColor(color), []);
    return (React.createElement(TargetBox, Object.assign({}, props, { lastDroppedColor: lastDroppedColor, onDrop: handleDrop })));
};
export default StatefulTargetBox;
