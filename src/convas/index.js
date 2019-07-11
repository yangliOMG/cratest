import React from 'react';
import Clock from './clock';
import Pump from './pump';
import Filter from './filter';
import Sediment from './sediment';

class Container extends React.Component {

  componentDidMount () {
  }
  
  render () {
    return (
      <div className="canvas">
          <Clock/> 
          <Pump/> 
          <Filter/> 
          <Sediment/> 
      </div>
    )
  }
}

export default Container
