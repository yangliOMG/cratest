import React from 'react';
const styles = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
};
const Box = ({ title, yellow }) => {
    const backgroundColor = yellow ? 'yellow' : 'white';
    return React.createElement("div", { style: { ...styles, backgroundColor } }, title);
};
export default Box;
