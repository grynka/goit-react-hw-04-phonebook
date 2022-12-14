import React from "react"
import { Button } from "./ContactList.styled";
import PropTypes from 'prop-types';

 
const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}{' '}
            <Button onClick={() => onClick(id)}>delete</Button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};