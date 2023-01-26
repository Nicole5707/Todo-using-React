import React, { Component } from "react";
import Button from "./Button";

const styles = {
  lineThrough: {
    textDecoration: "line-through",
    color: "#ececec",
    fontStyle: "italic",
  },

  Button: {
    background: "#ececec",
    border: "none",
    fontSize: "25px",
    cursor: "pointer",
    padding:"7px 10px",
    borderRadius: "35px",
  },

  list: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "700px",
    padding: "5px",
    margin:'5px',
    marginLeft: "120px",
    borderBottom:"2px solid #ececec "
    
  },
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => {
      return { isChecked: !prevState.isChecked };
    });
  };

  render() {
    const { todo, index, handleDelete } = this.props;
    return (
      <li style={styles.list}>
        <div>
          <input
            style={styles.checkbox}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheckboxChange}
          />
          <span style={this.state.isChecked ? styles.lineThrough : {}}>
            {todo.text}
          </span>
        </div>
        <Button
          style={styles.Button}
          buttonType="delete"
          onClick={() => {
            handleDelete(index);
          }}
        />
      </li>
    );
  }
}

export default TodoItem;


