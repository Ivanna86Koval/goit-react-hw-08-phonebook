import React from 'react';
import { List, Item, ListItemBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <ListItemBtn
              type="button"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </ListItemBtn>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
