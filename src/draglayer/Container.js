import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';
import DraggableBox from './DraggableBox';
import doSnapToGrid from './snapToGrid';
import update from 'immutability-helper';
const styles = {
    width: 1200,
    height: 300,
    position: 'relative',
    display: 'inline-block'
};
const deltaX = 200
const style = {
    left: deltaX,
    right: 0,
    top: 0,
    bottom: 0,
    border: '1px solid black',
    position: 'absolute',
};
function renderBox(item, key) {
    return React.createElement(DraggableBox, Object.assign({ key: key, id: key }, item));
}
const Container = ({ snapToGrid }) => {
    const initX = { a:10, b:60}
    const [boxes, setBoxes] = useState({
        a: { top: initX.a, left: 10, title: 'Drag me around' },
        b: { top: initX.b, left: 10, title: 'Drag me too' },
    });
    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [boxes]);
    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            if(left<deltaX-30) {
                top = initX[item.id]
                left = 10
            }
            if (snapToGrid) {
                [left, top] = doSnapToGrid(left, top);
            }
            moveBox(item.id, left, top);
            return undefined;
        },
    });
    return (React.createElement("div", { ref: drop, style: styles }, 
                React.createElement("div", { style: style }),
                Object.keys(boxes).map(key => renderBox(boxes[key], key)),
            ));
};
export default Container;
