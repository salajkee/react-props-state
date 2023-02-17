import React from 'react';
import './AddItem.css';

class AddItem extends React.Component {
  state = {
    value: '',
    items: [],
  };

  addItem = (e) => {
    if (e.key === 'Enter') {
      const item = {
        text: this.state.value,
        id: Math.random() * 1000,
      };
      this.setState({ items: [...this.state.items, item] });
      this.setState({ value: '' });
    }
  };

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div className="add-item">
        <ul className="items">
          {this.state.items.map((item) => {
            return (
              <li key={item.id} className="item">
                <span>{item.text}</span>
                <button onClick={() => this.removeItem(item.id)}>X</button>
              </li>
            );
          })}
          <input
            className="input"
            type="text"
            name="value"
            placeholder="add tag"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
            onKeyDown={this.addItem}
          />
        </ul>
      </div>
    );
  }
}

export default AddItem;
