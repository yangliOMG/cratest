import React from 'react';
import './App.css';
// import {Dnd} from './dnd.1.js'
// var Dnd = require('./dnd.1.js');
// import Card from './card.js'
// import Chessboard from './dragsource'
// import Chessboard2 from './draglayer'
import Convas from './convas'

class App extends React.Component {

  componentDidMount () {
    // new Dnd({
    //   element: '#drag6 .drag',
    //   grid: 50
    // })
  }

  render () {
    return (
      <div className="App">
        {/* <div className="sample clearfix">
          <div id="drag6">
            <div className="drag"></div>
          </div>
        </div> */}
        {/* <Chessboard2></Chessboard2> */} 
        <Convas></Convas>
      </div>
    )
  }
}

export default App;
