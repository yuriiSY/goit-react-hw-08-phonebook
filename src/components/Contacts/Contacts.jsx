import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import style from './contacts.module.css';
const Contacts = () => {
  return (
    <div className={style.contact__book}>
      <div className={style.contacts__form}>
        <ContactForm />
      </div>
      <div className={style.contacts__list}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
