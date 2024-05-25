
function NoteHeader({ notes, sortBy , onSort}) {
  const allNotes = notes.length;

  return (
    <div className="note-header">
      <h1>My Notes ({allNotes})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
