import { Component } from 'react';
import {
  FormBtn,
  FormContact,
  InputContact,
  LabelContact,
} from './contactForm.styled';

export class ContactForm extends Component {
  render() {
    return (
      <FormContact onSubmit={this.props.onSubmit}>
        <LabelContact>
          <InputContact
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.props.onChange}
            value={this.props.valueName}
            placeholder="name"
            required
          />
          <InputContact
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.props.onChange}
            value={this.props.valueNumber}
            placeholder="number"
            required
          />
        </LabelContact>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormContact>
    );
  }
}
