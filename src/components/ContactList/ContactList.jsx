import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const getVisibleContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContacts = getVisibleContacts(contacts, filter);
  return (
    <div>
      {filterContacts && filterContacts.length > 0 ? (
        <ul className={css.contactList}>
          {filterContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts yet</p>
      )}
    </div>
  );
};

export default ContactList;
