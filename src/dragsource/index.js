import React from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
import Colors from './Colors';
export default function Container() {
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement("div", { style: { overflow: 'hidden', clear: 'both', margin: '-.5rem' } },
            React.createElement("div", { style: { float: 'left' } },
                React.createElement(SourceBox, { color: Colors.BLUE })),
            React.createElement("div", { style: { float: 'left', marginLeft: '5rem', marginTop: '.5rem' } },
                React.createElement(TargetBox, null)))));
}
