import React, { useState, useEffect } from 'react';
import Board from './Board';
import { observe } from './Game';
const containerStyle = {
    width: 500,
    height: 500,
    border: '1px solid gray',
};
/**
 * The Chessboard Tutorial Application
 */
const ChessboardTutorialApp = () => {
    const [knightPos, setKnightPos] = useState([1, 7]);
    // the observe function will return an unsubscribe callback
    useEffect(() => observe((newPos) => setKnightPos(newPos)));
    return (React.createElement("div", null,
        React.createElement("div", { style: containerStyle },
            React.createElement(Board, { knightPosition: knightPos }))));
};
export default ChessboardTutorialApp;
