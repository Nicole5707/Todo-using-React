import React, { Component } from 'react';

class Checkbox extends Component {
  handleCheckboxChange = () => {
    this.props.onCheckboxChange();
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.isChecked}
        onChange={this.handleCheckboxChange}
      />
    );
  }
}

export default Checkbox;
