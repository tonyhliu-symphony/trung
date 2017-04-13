import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      completed: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // Used to generate random id 
    const todo = Object.assign({}, this.state, { id: Math.random(10) * 10})
    this.props.receiveTodo(todo);

    // reset state 
    this.state = {
      title: "",
      body: "",
      completed: false
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input value={this.state.title}
            required
            placeholder="Do laundry..."
            onChange={this.update('title')}
            />
        </label>
        <label>
          <textarea value={this.state.body}
            rows='5'
            cols='15'
            required
            placeholder="Wash and dry, whites only..."
            onChange={this.update('body')}
            />
        </label>
        <button>Create Todo!</button>
      </form>
    )
  }
}

export default TodoForm;