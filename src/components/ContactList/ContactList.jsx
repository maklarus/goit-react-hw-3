import Contact from './Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ data, contacts, setContacts }) {
  const deleteHandler = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  return (
    <ul className={css.cardList}>
      {data.map(item => (
        <li key={item.id} className={css.cardListItem}>
          <Contact
            data={item}
            contacts={contacts}
            setContacts={setContacts}
          ></Contact>
          <button
            className={css.deleteBtn}
            onClick={() => deleteHandler(item.id)}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}
