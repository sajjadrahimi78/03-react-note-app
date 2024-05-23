import { useState } from "react";

function AddNewNote() {
  // states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // functions
  const handleSubmit = (e) => {
    e.preventDefault();

    // note object
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    // reset inputs
    setTitle("");
    setDescription("");

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form action="" className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-field"
          placeholder="note description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
