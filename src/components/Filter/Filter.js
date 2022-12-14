import React from "react"
import { Label, Input, } from './Filter.styled';
import PropTypes from 'prop-types';
 
const Filter = ({value, onChange}) => {
    return (
      <Label>
        Find contacts by Name
        <Input
          type="text"
          name="find"
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
    );
 }
 
export default Filter
 
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}