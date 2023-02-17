import React from 'react';
import './PhoneBook.css';

class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
    phone: '',
    email: '',
  };

  addContact = () => {
    const { name, phone, email } = this.state;
    const contact = {
      name: name,
      phone: phone,
      email: email,
      id: Math.random() * 1000,
    };
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  removeContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: '' });
    this.setState({ phone: '' });
    this.setState({ email: '' });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { contacts, name, phone, email } = this.state;
    return (
      <div className="phonebook">
        <form className="phonebook__form" onSubmit={this.onSubmit}>
          <label className="phonebook__label">
            <span className="phonebook__label-text">Имя</span>
            <input
              className="phonebook__form-input"
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </label>
          <label className="phonebook__label">
            <span className="phonebook__label-text">Телефон</span>
            <input
              className="phonebook__form-input"
              type="number"
              name="phone"
              value={phone}
              onChange={this.onChange}
            />
          </label>
          <label className="phonebook__label">
            <span className="phonebook__label-text">Email</span>
            <input
              className="phonebook__form-input"
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </label>
          <button className="phonebook__form-btn" onClick={this.addContact}>
            Добавить
          </button>
        </form>
        <hr />
        <h2 className="phonebook__title">Список контактов</h2>
        <div className="phonebook__table-head">
          <h3>Имя</h3>
          <h3>Телефон</h3>
          <h3>Email</h3>
        </div>
        {contacts.map((contact) => {
          return (
            <div key={contact.id} className="phonebook__table-body">
              <h4>{contact.name}</h4>
              <h4>{contact.phone}</h4>
              <h4>{contact.email}</h4>
              <button
                className="phonebook__btn"
                onClick={() => this.removeContact(contact.id)}
              >
                Удалить
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PhoneBook;
