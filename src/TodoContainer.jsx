import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header'; 
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:"",
      todoList: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleAddTodo = () => {
    if (this.state.inputValue) {
      this.setState({
        todoList: [...this.state.todoList, { text: this.state.inputValue }],
      });
      this.setState({ inputValue:"" });
    }
    console.log(this.state)
  }

  handleDelete = (index) => {
    const newTodoList = [...this.state.todoList];
    newTodoList.splice(index, 1);
    this.setState({ todoList: newTodoList });
  }

  render() {
    return (
      <div>
        <Navbar link={["Home", "About"]} />
        <Header />
        <InputTodo handleInputChange={this.handleInputChange} handleAddTodo={this.handleAddTodo} inputValue={this.state.inputValue}/>
        <TodoList todoList={this.state.todoList} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Container;
