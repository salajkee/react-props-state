import React from 'react';
import './Tasklist.css';

class Tasklist extends React.Component {
  state = {
    tasks: [],
    doneTasks: [],
    taskName: '',
  };

  addTask = (e) => {
    if (e.key === 'Enter') {
      const newTask = {
        title: this.state.taskName,
        status: false,
        id: Math.random() * 1000,
      };
      this.setState({ tasks: [...this.state.tasks, newTask] });
    }
  };

  checkDone = (id) => {
    let taskObj = null;
    this.state.tasks.forEach((task, i) => {
      if (task.id === id) {
        task.status = true;
        taskObj = task;
      }
    });
    this.setState({
      doneTasks: [...this.state.doneTasks, taskObj],
    });
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  removeCheckDone = (id) => {
    let taskObj = null;
    this.state.doneTasks.forEach((task, i) => {
      if (task.id === id) {
        task.status = true;
        taskObj = task;
      }
    });
    this.setState({
      tasks: [...this.state.tasks, taskObj],
    });
    this.setState({
      doneTasks: this.state.doneTasks.filter((task) => task.id !== id),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ taskName: '' });
  };

  render() {
    const { tasks, doneTasks, taskName } = this.state;
    return (
      <div className="tasklist">
        <form className="tasklist-form" onSubmit={this.onSubmit}>
          <input
            className="tasklist-form__input"
            type="text"
            name="taskName"
            placeholder="Add a task"
            value={taskName}
            onChange={(e) => this.setState({ taskName: e.target.value })}
            onKeyDown={this.addTask}
          />
        </form>
        <ul className="list tasks">
          {tasks.length > 0 ? <h2>Нужно сделать</h2> : <></>}
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <div className="list__item">
                  <input
                    type="checkbox"
                    className="list__item-checkbox"
                    onClick={() => this.checkDone(task.id)}
                  />
                  <p className="list__item-title">{task.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="list done-tasks">
          {doneTasks.length > 0 ? <h2>Выполнено</h2> : <></>}
          {doneTasks.map((task) => {
            return (
              <li key={task.id}>
                <div className="list__item">
                  <input
                    type="checkbox"
                    className="list__item-checkbox"
                    checked={task.status}
                    onChange={(e) => e.target.value}
                    onClick={() => this.removeCheckDone(task.id)}
                  />
                  <p className="list__item-title">{task.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Tasklist;
