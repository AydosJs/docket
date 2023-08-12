import { useRef } from "react";
import { Note, deleteNote, editNote, selected } from "../store/notes/noteSlice";
import { useDispatch } from "react-redux";

type Props = {
  note: Note
}

export default function NoteComponent({ note }: Props) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const dispatch = useDispatch()
  const handleEdit = (): void => {
    if (paragraphRef.current) {
      const content: string = paragraphRef.current.innerText;
      dispatch(editNote({
        ...note,
        note: content
      }))
    }
  };

  const handleSelected = () => {
    dispatch(selected({
      ...note,
      selected: {
        selected: !note.selected.selected,
        date: new Date().toLocaleDateString(),
      }
    }))
  }

  const handleDelete = () => {
    dispatch(deleteNote(note.id))
  }

  return (
    <div
      style={{ backgroundColor: note.color.paint }}
      className={`relative flex flex-col justify-between p-5 space-y-8 overflow-hidden border cursor-pointer group rounded-xl`}>

      <div className="min-h-[144px]">
        <p suppressContentEditableWarning ref={paragraphRef} onBlur={handleEdit} className="font-medium outline-none cursor-text text-md line-clamp-6" contentEditable>
          {note.note}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between opacity-60 group-hover:opacity-100 flex-nowrap">
        <div>
          <p className="text-sm font-semibold">
            {note.date}
          </p>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-black">
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
          </svg>
        </div>

      </div>

      <div
        onClick={() => handleSelected()}
        className={`group-hover:opacity-100 transition-all duration-300 absolute flex items-center justify-center w-[30px] h-[30px] ${!note.selected.selected ? 'group-hover:right-4 right-[-40px] top-[-10px]' : 'right-4 top-[-10px]'} bg-black rounded-full transform`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-400">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
      </div>

      <div
        onClick={() => handleDelete()}
        className={`group-hover:opacity-100 transition-all duration-300 absolute flex items-center justify-center w-[30px] h-[30px] group-hover:right-4 right-[-40px] top-8 bg-black rounded-full transform`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
          <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
        </svg>
      </div>

    </div>
  )
}