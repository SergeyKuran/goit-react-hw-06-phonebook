// Імпорт компонентів
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

// Імпорт стилів
import css from '../components/App.module.css';
// import { useDispatch } from 'react-redux';

const App = () => {
  return (
    <>
      <div className={css.phonebook}>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <h3>Contacts</h3>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default App;
