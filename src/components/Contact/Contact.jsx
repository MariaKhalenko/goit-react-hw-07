import css from "./Contact.module.css";
import { FaUserLarge, FaPhone, FaTrashCan } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactCart}>
      <div className={css.contactInfo}>
        <p className={css.userName}>
          <FaUserLarge />
          {contact.name}
        </p>
        <p className={css.userNumber}>
          <FaPhone />
          {contact.number}
        </p>
      </div>

      <button className={css.btnDel} onClick={handleDelete}>
        Delete <FaTrashCan className={css.iconDel} />
      </button>
    </li>
  );
};

export default Contact;
