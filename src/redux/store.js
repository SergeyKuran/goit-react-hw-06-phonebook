import { createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contactList/contactId':
      return {
        ...state.contacts.filter(el => el.id !== action.payload),
      };

    case 'app/contactsArray':
      return { ...state };

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

export const contactId = value => {
  return {
    type: 'contactList/contactId',
    payload: value,
  };
};

export const contactsArray = array => {
  return {
    type: 'app/contactsArray',
    payload: array,
  };
};
