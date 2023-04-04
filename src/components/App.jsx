import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { PhoneBookStyle } from './app.styled';

let firstRunStorage = true;

export function App() {
  const [writeName, setWriteName] = useState('');
  const [number, setNumber] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts') && firstRunStorage) {
      firstRunStorage = false;

      const storage = JSON.parse(localStorage.getItem('contacts'));
      setContacts([...storage]);
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function resetForm() {
    setWriteName('');
    setNumber('');
  }

  const onSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(({ name }) => {
        return name === writeName;
      })
    ) {
      alert('Its allready in case');
      resetForm();
      return;
    }
    setContacts(() => {
      return [...contacts, { name: writeName, id: nanoid(), number }];
    });

    resetForm();
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setWriteName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
    setFilteredContacts(() => {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(e.target.value);
      });
    });
  };

  const onDeleteContact = e => {
    setContacts(() => {
      return contacts.filter(contact => {
        return !contact.id.includes(e.target.id);
      });
    });
  };

  return (
    <PhoneBookStyle>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={onSubmit}
        onChange={onChange}
        valueName={writeName}
        valueNumber={number}
      />
      <h2>Contacts</h2>
      <ContactFilter
        onChange={onChange}
        onChangeFilter={onChangeFilter}
        filter={filter}
        filteredContacts={filteredContacts}
        contacts={contacts}
        deleteContact={onDeleteContact}
      />
    </PhoneBookStyle>
  );
}
