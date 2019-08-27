import React from 'react';

class Keypad extends React.Component {

newInput = () => console.log('Entering password...')

render(){

    return(
      <div><input type="password" onKeyUp = {this.newInput}/></div>
    )
  }
}

export default Keypad;
