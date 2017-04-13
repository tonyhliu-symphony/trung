import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo, deleteTodo } = this.props;
    const unfinishedItems = todos.filter((todo) => todo.completed == false),
          finishedTodoItems = todos.filter((todo) => todo.completed == true);

    const unfinishedItem = unfinishedItems.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        receiveTodo={receiveTodo}
        deleteTodo={deleteTodo} />
      )
    );

    const finishedTodoItem = finishedTodoItems.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        receiveTodo={receiveTodo}
        deleteTodo={deleteTodo} />
      )
    );

    return (
      <div>
        <h3>Incomplete Todos</h3>
        <ul>
            { unfinishedItem }
        </ul>

        <hr />

          <h3>Completed Todos</h3>
          <ul>
            { finishedTodoItem }
          </ul>

        <hr />
        
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