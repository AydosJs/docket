import { useEffect, useState } from "react";
import CardComponent from "../../components/CardComponent";
import { Note, noteSelector } from "../../store/notes/noteSlice";
import { useAppSelector } from "../../store/hooks";

export default function NotestContainer() {
  // const dispatch = useAppDispatch();

  const [notes, setNotes] = useState<Array<Note>>([])
  const storedNotes = useAppSelector(noteSelector)

  useEffect(() => {
    setNotes(storedNotes)
    return () => {
      console.log('unmointing...')
    }
  }, [storedNotes])

  return (
    <div className="min-h-[calc(100vh-212px)]">
      <h1 className="mb-12 text-5xl font-semibold">
        Notes
      </h1>

      <div className="grid grid-cols-5 gap-6 place-items-stretch">
        {notes.map((note) => (
          <CardComponent note={note} key={note.id} />
        ))}
      </div>

    </div>
  )
}