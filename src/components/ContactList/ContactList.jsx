export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(itm => (
        <li key={itm.id}>{itm.name}: {itm.number}
          <button
            type='button'
            onClick={() => handleDelete(itm.id)}
          >
            Del
          </button>
        </li>
      ))}
    </ul>
  );
};
