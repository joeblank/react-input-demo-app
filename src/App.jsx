import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input.jsx';
import Button from './Button.jsx';

const HelloWorld = React.createClass({
  getInitialState: function() {
    return ({
      name: 'Joe Blank',
      message: ''
    })
  },

  handleChange: function(e) {
    this.setState({
      message: e.target.value
    })
  },
  handleClick: function() {
    this.setState({
      message: ''
    })
  },

  render: function() {
    return (<div className='hello'>
              <div>Hello, {this.state.name}</div>
              <Input
              message={this.state.message}
              onChange={this.handleChange} />
              <Button
              onClick={this.handleClick} />
              <div>{this.state.message}!!!</div>
            </div>);
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
