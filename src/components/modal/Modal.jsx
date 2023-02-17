import React from 'react';
import './Modal.css';

const quotes = [
  {
    quote: 'Никогда не ошибается тот, кто ничего не делает',
    author: 'Теодор Рузвельт',
    color: '#3BB3F7',
  },
  {
    quote: 'Чем умнее человек, тем легче он признает себя дураком',
    author: 'Альберт Эйнштейн',
    color: '#F0BE00',
  },
  {
    quote: 'Спартак - Чемпион!',
    author: 'Фанат',
    color: '#ED3956',
  },
];

class Modal extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    if (this.state.count === quotes.length - 1) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    return (
      <div
        className="modal"
        style={{ backgroundColor: quotes[this.state.count].color }}
      >
        <div className="modal__wrapper">
          <h2
            className="modal__title"
            style={{ color: quotes[this.state.count].color }}
          >
            ❝ {quotes[this.state.count].quote}
          </h2>
          <p
            className="modal__name"
            style={{ color: quotes[this.state.count].color }}
          >
            {quotes[this.state.count].author}
          </p>
          <button
            className="modal__btn"
            onClick={this.handleClick}
            style={{ backgroundColor: quotes[this.state.count].color }}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
