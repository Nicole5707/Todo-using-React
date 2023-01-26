import React, { Component } from 'react';
// import TodoItem from './TodoItem';
import { FcPlus } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
class Button extends Component {
  handleClick = () => {
    this.props.onClick();
  }

  render() {
    let buttonText;
    if(this.props.buttonType === "delete"){
      buttonText = <FcEmptyTrash/>
    }
    else if(this.props.buttonType === "add"){
      buttonText = <FcPlus/>
    }
    else if(this.props.buttonType === "close"){
      buttonText = "X"
    }
    return (
      <button onClick={this.handleClick} style={this.props.style} >{buttonText}</button>
    );
  }
}

export default Button;
