import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface Color {
  id: string;
  paint: string;
}
export interface Note {
  id: string;
  note: string;
  date: string;
  color: Color;
  selected: {
    selected: boolean;
    date: string;
  };
}

const initialState: Array<Note> = [
  {
    id: "1",
    note: "This is Docker note.",
    date: "11/08/2023",
    color: {
      id: "1",
      paint: "orange",
    },
    selected: {
      selected: false,
      date: "",
    },
  },
];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const noteIndex = state.findIndex((note) => note.id == action.payload.id);
      if (noteIndex !== -1) {
        state[noteIndex].note = action.payload.note;
        state[noteIndex].date = action.payload.date;
      }
    },
    selected: (state, action: PayloadAction<Note>) => {
      const noteIndex = state.findIndex((note) => note.id == action.payload.id);
      if (noteIndex !== -1) {
        state[noteIndex].selected.selected = action.payload.selected.selected;
        state[noteIndex].selected.date = action.payload.selected.date;
      }
    },
  },
});

export const { addNote, editNote, selected } = noteSlice.actions;
export const noteSelector = (state: RootState) => state.noteReducer;
export default noteSlice.reducer;
