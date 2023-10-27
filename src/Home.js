import { Link, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

// eslint-disable-next-line react/prop-types
const Home = ({ contacts }) => {
  const destructuredContacts = contacts;
  const contactsTableHeadings = [
    { head: 'Picture', prop: 'imgURL' },
    { head: 'Name', prop: 'name' },
    { head: 'Email', prop: 'email' },
    { head: 'Phone', prop: 'phone' },
  ];

  const contactsTable = (columns, data, key) => (
    <>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.head}>{col.head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item[key]}>
            {columns.map((col) => (
              <td key={`${item[key]}-${col.prop}`}>
                <Link to={`/contacts/${item.index}`}>{item[col.prop]}</Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );

  return (
    <div>
      <Routes>
        <Route
          path="/contacts/:index"
          element={<Contact contacts={contacts} />}
        />
      </Routes>
      <h1>Contacts</h1>
      <Link to="/contacts/newcontact">
        <button type="button" className="btn-default">
          Add New Contact
        </button>
      </Link>
      <div>
        <table id="contact-table" className="table table-hover">
          {contactsTable(contactsTableHeadings, destructuredContacts)};
        </table>
      </div>
    </div>
  );
};

export default Home;
