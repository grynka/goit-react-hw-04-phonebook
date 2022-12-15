import React, { Component } from "react";
import Filter from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./Contactlist/ContactList";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
const [contacts, setContacts] = useState([])
const [filter, setFilter] = useState('')
const normalizedFilter = filter.toLowerCase();
const filterContacts = contacts.filter(contact =>
contact.name.toLowerCase().includes(normalizedFilter))

useEffect(() => {
  const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      console.log(savedContacts)
      setContacts(JSON.parse(savedContacts))
      }
}, [])

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

const formSubmitHandler = data => {
    const contactsName = (contacts.map(contact => contact.name))

    if (contactsName.includes(data.name)) {
      alert(data.name + ' is allready in contact');
    } else
      setContacts( state => [...state, data] );
    }

 const changeFilter = event => {
    setFilter(event.currentTarget.value)
  };

 const deleteContact = contactId => {
    setContacts(prevState => (
     prevState.contacts.filter(contact => contact.id !== contactId)
    ))
  };


return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={filterContacts} onClick={deleteContact} />
      </>
    );
}


 class Appold extends Component {
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
