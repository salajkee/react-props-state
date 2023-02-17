import React from 'react';
import './Todolist.css';

class Todolist extends React.Component {
  state = {
    tasks: [],
    taskName: '',
    count: 0,
  };

  addTask = () => {
    const newTask = {
      title: this.state.taskName,
      status: false,
      id: Math.random() * 1000,
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  removeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
    this.setState({ count: this.state.count - 1 });
  };

  changeStatus = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : { ...task }
      ),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
    this.setState({ taskName: '' });
  };

  render() {
    const { tasks, taskName, count } = this.state;
    return (
      <div className="todolist">
        <h1>MY TO DO LIST</h1>
        <ul className="list">
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <div className="list__item">
                  <input
                    type="checkbox"
                    className="list__item-checkbox"
                    onClick={() => this.changeStatus(task.id)}
                  />
                  <p
                    className={
                      task.status === true
                        ? 'list__item-title done'
                        : 'list__item-title'
                    }
                  >
                    {task.title}
                  </p>
                  <button
                    className="list__item-closeBtn"
                    onClick={() => this.removeTask(task.id)}
                  >
                    x
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            className="form__input"
            type="text"
            name="taskName"
            placeholder="Add a task"
            value={taskName}
            onChange={(e) => this.setState({ taskName: e.target.value })}
          />
          <button className="form__btn" onClick={this.addTask}>
            Add #{count + 1}
          </button>
        </form>
      </div>
    );
  }
}
export default Todolist;
