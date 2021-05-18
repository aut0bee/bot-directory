import React, {Component} from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    console.log('header')
    return (
      <div>
        <h1 className='f1'>company bot directory</h1>
        <CounterButton />
      </div>
    );
  }
};

export default Header;