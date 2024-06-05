import { useContext, useReducer } from "react";
import { createContext } from "react";

const NoteContext = createContext(null);
const NoteDispatchContext = createContext(null);

function notesReducer(state, { type, payload }) {
    switch (type) {
      case "add":
        return [...state, payload];
        break;
      case "delete":
        return state.filter((s) => s.id !== payload);
        break;
      case "complete":
        return state.map((note) =>
          note.id === payload ? { ...note, completed: !note.completed } : note
        );
        break;
      default:
        throw new Error("Unknown Error" + type);
        break;
    }
  }

export function NoteProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NoteContext.Provider value={notes}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}

export function useNotesDispatch() {
  return useContext(NoteDispatchContext);
}
