import { useEffect, useState } from "react";
import NoteComponent from "../../components/NoteComponent";
import { Note, noteSelector } from "../../store/notes/noteSlice";
// import AboutMeCardComponent from "../../components/aboutMeCard/AboutMeCardComponent";
import { useAppSelector } from "../../store/hooks";

export default function NotestContainer() {
  const [notes, setNotes] = useState<Array<Note>>([])
  const storedNotes = useAppSelector(noteSelector)

  useEffect(() => {
    setNotes(storedNotes)
  }, [storedNotes])

  console.log("notes", notes)

  return (
    <div className="min-h-[calc(100vh-212px)] ">
      <h1 className="hidden mb-12 text-5xl font-semibold sm:block">
        Notes
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-stretch">
        {/* <AboutMeCardComponent /> */}

        {notes?.length !== 0 && notes.map((note: Note) => (
          <NoteComponent note={note} key={note?.id} />
        ))}
      </div>

    </div >
  )
}