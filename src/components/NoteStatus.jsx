import Message from "./Message";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const openNotes = allNotes - completedNotes;

  // condition when no notes has already been added.
  // chilren props
  if (!allNotes)
    return (
      <Message>
        <span>🤌 </span>
        <span>No Notes has already been added.</span>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{openNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
