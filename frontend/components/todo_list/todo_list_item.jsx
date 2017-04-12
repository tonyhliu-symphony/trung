import React from 'react';

class TodoListItem extends React.Component {
  
  render() {
    const { title, body } = this.props.todo;

    return(
      <li>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    )
  }
}

export default TodoListItem;