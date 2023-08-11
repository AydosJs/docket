import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Note {
  id: string;
  note: string;
  date: string;
}

const initialState: Array<Note> = [
  {
    id: "1",
    note: "This is Docker note",
    date: "May 21, 2023",
  },
];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
  },
});

export const { addNote } = noteSlice.actions;
export const noteSelector = (state: RootState) => state.noteReducer;
export default noteSlice.reducer;
