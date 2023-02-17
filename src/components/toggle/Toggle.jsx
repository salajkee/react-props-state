import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="helloworld">
        <h1 className="helloworld__title">Hello world!</h1>
        <p>This is a one thing.</p>
        <button className="helloworld__btn" onClick={this.handleClick}>
          Click Me
        </button>
        <p>
          I have been toggled <span>{this.state.count}</span> times
        </p>
      </div>
    );
  }
}

export default Toggle;
