import { Component } from 'react';
import { nanoid } from 'nanoid';
import contacts from '../data/data.json';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts,
    name: '',
  };



  handleDelete = (id) => {
    // console.log('1');
    this.setState((prev) => ({
      contacts: prev.contacts.filter(el => el.id !== id)
    }));
  };

  render() {
    console.log(this.state.contacts);
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <ContactForm
            contacts={this.state.contacts}
            name={this.state.name}
          />

          <h2>Contacts</h2>
          <Filter />
          <ContactList
            contacts={this.state.contacts}
            handleDelet={this.handleDelete}
          />
        </div>
      </>
    );
  }
}
