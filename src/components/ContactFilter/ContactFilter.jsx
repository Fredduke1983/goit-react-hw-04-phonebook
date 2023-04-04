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
