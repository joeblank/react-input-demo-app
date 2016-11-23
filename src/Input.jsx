const React = require('react');

const Input = React.createClass({
  render: function () {
    return (
      <div>
        <div>Input that updates parent state immediately!</div>
        <input
        onChange={this.props.onChange}
        value={this.props.message}
        placeholder='type'
        type='text' />
      </div>
    )
  }
})

module.exports = Input;
