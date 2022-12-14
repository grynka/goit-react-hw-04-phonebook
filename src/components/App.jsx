import React, { Component } from "react";
import Filter from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./Contactlist/ContactList";


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts)
      })
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  formSubmitHandler = data => {
    const contactsName = (this.state.contacts.map(contact => contact.name))
    if (contactsName.includes(data.name)) {
      alert(data.name + ' is allready in contact');
    } else
      this.setState({
        contacts: [...this.state.contacts, data],
      });
    }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };
  
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filterContacts} onClick={this.deleteContact} />
      </>
    );
  }
};
