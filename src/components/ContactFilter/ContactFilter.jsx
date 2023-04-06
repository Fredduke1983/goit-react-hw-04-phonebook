import PropTypes from 'prop-types';
import { FilterDelBtn, FilterListItem } from './contactFilter.styled';

export function ContactFilter({
  onChangeFilter,
  filter,
  filteredContacts,
  contacts,
  deleteContact,
}) {
  function onFilterContacts(filterContacts) {
    return filterContacts.map(contact => {
      return (
        <FilterListItem id={contact.id} key={contact.id}>
          {contact.name}: {contact.number}
          <FilterDelBtn onClick={deleteContact} id={contact.id}>
            delete
          </FilterDelBtn>
        </FilterListItem>
      );
    });
  }

  return (
    <>
      <input
        placeholder="search"
        onChange={onChangeFilter}
        value={filter}
      ></input>
      <ul>
        {filter
          ? onFilterContacts(filteredContacts)
          : onFilterContacts(contacts)}
      </ul>
    </>
  );
}

ContactFilter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
  filteredContacts: PropTypes.array,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};
