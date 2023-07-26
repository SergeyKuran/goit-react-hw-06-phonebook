import React from 'react';
import PropTypes from 'prop-types';

//  Імпорт стилів
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/contactSlice';
// eslint-disable-next-line no-unused-vars
import { useMemo } from 'react';

// Компонеет для рендеру списку контактів
const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={css.ul}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  filter: PropTypes.string.isRequired,
};

export default ContactList;
