import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  handleDone(e) {
    e.preventDefault();
    const todo = merge({}, 
      this.props.todo, 
      { completed: !this.props.todo.completed }
    );

    this.props.receiveTodo(todo);
  }
  
  render() {
    const { todo } = this.props;
    const { title, body } = todo;

    return(
      <li>
        <h3>{title}</h3>
        <p>{body}</p>
        <button onClick={this.handleRemove}>X</button>
        <button onClick={this.handleDone}>{this.props.todo.completed ? 'Not done' : 'Done'}</button>
      </li>
    )
  }
}

export default TodoListItem;