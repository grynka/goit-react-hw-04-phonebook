import React, { Component } from "react"
import { nanoid } from "nanoid";
import { Label, Input, Forms, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

 
class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
    handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleContactsCreate = event => {
      event.preventDefault();
      this.props.onSubmit({
        name: this.state.name,
        number: this.state.number,
        id: nanoid(),
      });
    this.setState({
      name: "",
      number: ""
    }
        
      );
   
    }

    
    render() {
            const { name, number } = this.state;
          return (
            <Forms onSubmit={this.handleContactsCreate}>
              <Label>
                Name
                <Input
                  value={name}
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </Label>
              <Label>
                Phone
                <Input
                  type="tel"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </Label>
              <p>
                <Button type="submit">Add contact</Button>
              </p>
            </Forms>
          );
    }
  }

export default ContactForm
    
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};