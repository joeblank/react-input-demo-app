import React from 'react';

const Button = React.createClass({
  render: function() {
    return (
      <button
      onClick={this.props.onClick}
      >Reset state.message</button>
    )
  }
});


module.exports = Button;
