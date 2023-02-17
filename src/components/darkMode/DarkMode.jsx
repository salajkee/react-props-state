import React from 'react';
import './DarkMode.css';

class DarkMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  handleClick = () => {
    let darkmodeModal = document.querySelector('.darkmode__modal');
    if (this.state.isDark === false) {
      this.setState({ isDark: true });
      darkmodeModal.classList.add('dark-style');
    } else {
      this.setState({ isDark: false });
      darkmodeModal.classList.remove('dark-style');
    }
  };

  render() {
    return (
      <div className="darkmode">
        <div className="darkmode__modal">
          <h3 className="darkmode__modal-title">Render Props!</h3>
          <p className="darkmode__modal-text">
            I was build with a two class components. A wrapper that handles
            state and state changing functions, and a child that uses that
            functionality.
          </p>
          <div className="darkmode__modal-inner">
            <input
              onClick={this.handleClick}
              className="darkmode__modal-checkbox"
              type="checkbox"
            />
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DarkMode;
