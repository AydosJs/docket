import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Color {
  id: string;
  paint: "orange" | "rose" | "purple" | "sky" | "yellow";
}
export interface Note {
  id: string;
  note: string;
  date: string;
  color: Color;
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
