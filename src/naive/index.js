import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Container from './Container';
export default function DragAroundNaive() {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
        hideSourceOnDrag,
    ]);
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement(Container, { hideSourceOnDrag: hideSourceOnDrag }),
        React.createElement("p", null,
            React.createElement("label", { htmlFor: "hideSourceOnDrag" },
                React.createElement("input", { id: "hideSourceOnDrag", type: "checkbox", checked: hideSourceOnDrag, onChange: toggle }),
                React.createElement("small", null, "Hide the source item while dragging")))));
}
