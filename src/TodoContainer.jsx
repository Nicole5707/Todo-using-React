import React, { Component } from 'react';
import Navbar from './Components/Common/Navbar';
import Header from './Components/Header'; 
import InputTodo from './Components/InputTodo';
import TodoList from './Components/TodoList';

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
      this.setState({
        todoList: [...this.state.todoList, { text: this.state.inputValue }],
        inputValue: '',
      });
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
