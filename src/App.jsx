import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { FcContacts } from "react-icons/fc";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">
        Phonebook <FcContacts className="iconTitle" />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
