import React from 'react';
import './Water.css';

class Water extends React.Component {
  state = {
    count: 0,
  };

  chooseColor = () => {
    const { count } = this.state;
    return count < 0
      ? 'water__title iceColor'
      : count >= 100
      ? 'water__title vaporColor'
      : 'water__title waterColor';
  };

  chooseTitle = () => {
    const { count } = this.state;
    return count < 0 ? 'Лед' : count >= 100 ? 'Пар' : 'Вода';
  };

  handlerClickPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handlerClickPlusTen = () => {
    this.setState({ count: this.state.count + 10 });
  };

  handlerClickMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handlerClickMinusTen = () => {
    this.setState({ count: this.state.count - 10 });
  };

  render() {
    return (
      <div className="water">
        <h2 className={this.chooseColor()}>
          {this.chooseTitle()} <span>{this.state.count}</span>
        </h2>
        <div className="water__btns">
          <button className="water__plus" onClick={this.handlerClickPlus}>
            +
          </button>
          <button
            className="water__plus-ten"
            onClick={this.handlerClickPlusTen}
          >
            +10
          </button>
          <button className="water__minus" onClick={this.handlerClickMinus}>
            -
          </button>
          <button
            className="water__minus-ten"
            onClick={this.handlerClickMinusTen}
          >
            -10
          </button>
        </div>
      </div>
    );
  }
}

export default Water;
