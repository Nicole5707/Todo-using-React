import React from "react";
import Button from "./Button";

const InputTodo = ({ handleInputChange, handleAddTodo, inputValue }) => {
  const style = {
    block: {
      display: "flex",
      justifyContent: "center",
      fontSize: "60px",
      color: "rgb(208, 203, 203)",
      marginRight: "150px",
      // backgroundColor: 'red',
    },
    Button: {
      position: "absolute",
      marginTop: "13px",
      marginLeft: "800px",
      background: "none",
      border: "none",
      fontSize: "25px",
      color: "white",
      cursor: "pointer",
      zIndex: "5",
      backgroundColor: 'none',
    },
    input: {
      marginRight: "-150px",
      background: "none",
      fontSize: "25px",
      padding: "10px",
      borderRadius: "25px",
      width:'700px',
      border:'0.5px solid grey',
    },
  };

  return (
    <div style={style.block}>
      <input
        style={style.input}
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Add todo..."
      />
      <Button style={style.Button} buttonType="add" onClick={handleAddTodo} />
    </div>
  );
};

export default InputTodo;
