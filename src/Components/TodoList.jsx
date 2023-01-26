import React from "react";
import TodoItem from "./Common/TodoItem";

const style = {
  maxHeight: "250px",
  overflowY: "scroll",
};
const styling = {
  block: {
    display: "flex",
    justifyContent: "center",
    fontSize: "30px",
    marginRight: "150px",
    listStyle: 'none',
  }
}

const TodoList = ({ todoList, handleDelete }) => {
  
  return (
    <div style={styling.block}>
      <ul style={todoList.length >= 4 ? style : {}}>
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleDelete={handleDelete}
          />
          
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
