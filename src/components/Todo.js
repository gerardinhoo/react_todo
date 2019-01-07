import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Proptypes from 'prop-types';


class Todo extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete} 
        delTodo={this.props.delTodo}
      />
    ))
  }
}

//Proptypes
Todo.propTypes = {
  todos: Proptypes.array.isRequired,
  markComplete: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired
}

export default Todo



