import { useEffect, useState } from "react";
import NoteComponent from "../../components/NoteComponent";
import { Note, noteSelector } from "../../store/notes/noteSlice";
import { useAppSelector } from "../../store/hooks";
import AboutMeCardComponent from "../../components/aboutMeCard/AboutMeCardComponent";

export default function NotestContainer() {
  const [notes, setNotes] = useState<Array<Note>>([])
  const storedNotes = useAppSelector(noteSelector)

  useEffect(() => {
    setNotes(storedNotes)
    return () => {
      console.log('unmointing...')
    }
  }, [storedNotes])

  console.log("array", notes)

  return (
    <div className="min-h-[calc(100vh-212px)]">
      <h1 className="mb-12 text-5xl font-semibold">
        Notes
      </h1>

      <div className="grid grid-cols-5 gap-6 place-items-stretch">
        <AboutMeCardComponent />

        {notes?.length !== 0 && notes.map((note: Note) => (
          <NoteComponent note={note} key={note?.id} />
        ))}
      </div>

    </div >
  )
}