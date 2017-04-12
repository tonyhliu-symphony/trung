import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem 
          key={todo.id}
          todo={todo}
        />
      )
    );


    return (
      <div>
        <ul>
          { todoItems }
        </ul>
        <div>
          <TodoForm 
            receiveTodo={receiveTodo}
          />
        </div>
      </div>
    )
  }
}

export default TodoList;