import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Container from './Container';
import CustomDragLayer from './CustomDragLayer';
const DragAroundCustomDragLayer = () => {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false);
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement(Container, { snapToGrid: snapToGridAfterDrop }),
        React.createElement(CustomDragLayer, { snapToGrid: snapToGridWhileDragging }),
        React.createElement("p", null,
            React.createElement("label", { htmlFor: "snapToGridWhileDragging" },
                React.createElement("input", { id: "snapToGridWhileDragging", type: "checkbox", checked: snapToGridWhileDragging, onChange: handleSnapToGridWhileDraggingChange }),
                React.createElement("small", null, "Snap to grid while dragging")),
            React.createElement("br", null),
            React.createElement("label", { htmlFor: "snapToGridAfterDrop" },
                React.createElement("input", { id: "snapToGridAfterDrop", type: "checkbox", checked: snapToGridAfterDrop, onChange: handleSnapToGridAfterDropChange }),
                React.createElement("small", null, "Snap to grid after drop")))));
};
export default DragAroundCustomDragLayer;
