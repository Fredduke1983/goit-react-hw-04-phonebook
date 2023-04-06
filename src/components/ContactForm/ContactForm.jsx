import PropTypes from 'prop-types';
import {
  FormBtn,
  FormContact,
  InputContact,
  LabelContact,
} from './contactForm.styled';

export function ContactForm({ onSubmit, onChange, valueName, valueNumber }) {
  return (
    <FormContact onSubmit={onSubmit}>
      <LabelContact>
        <InputContact
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          value={valueName}
          placeholder="name"
          required
        />
        <InputContact
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          value={valueNumber}
          placeholder="number"
          required
        />
      </LabelContact>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormContact>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  valueName: PropTypes.string,
  valueNumber: PropTypes.string,
};
