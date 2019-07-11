import React from 'react';
export interface BoardProps {
    knightPosition: [number, number];
}
/**
 * The chessboard component
 * @param props The react props
 */
declare const Board: React.FC<BoardProps>;
export default Board;
