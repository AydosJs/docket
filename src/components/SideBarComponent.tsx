import { useState } from "react";
import { Link } from "react-router-dom";
import { Color, Note, addNote } from "../store/notes/noteSlice";
import { useDispatch } from "react-redux";
const colors: Array<Color> = [
  {
    id: '1',
    paint: '#FB923C'
  },
  {
    id: '2',
    paint: '#FB7185'
  },
  {
    id: '3',
    paint: '#C084FC'
  },
  {
    id: '4',
    paint: '#38BDF8'
  },
  {
    id: '5',
    paint: '#FACC15'
  }
]

export default function SideBarComponent() {

  const dispatch = useDispatch()
  const [openClors, setOpenColors] = useState<boolean>(false)

  const handleNote = (color: Color) => {
    const newNote: Note = {
      id: Math.random().toString(36).substring(2),
      note: 'This is Docket note.',
      date: new Date().toLocaleDateString(),
      color: color
    }

    dispatch(addNote(newNote))
  }

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="mt-2 mb-12 text-base font-medium">Docket</h1>

        <div
          onClick={() => {
            setOpenColors(!openClors)
          }}
          className="!mb-4 cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </div>

        {openClors && (
          <>
            {colors.map((item: Color) => <div
              onClick={() => (
                handleNote(item),
                setOpenColors(!openClors)
              )}
              key={item.id}
              style={{ backgroundColor: item.paint }}
              className={`cursor-pointer w-[20px] h-[20px] rounded-full flex items-center justify-center`} />)}
          </>
        )}

      </div>

      <div className="mb-6 transition-all cursor-pointer ">
        <Link to="/auth">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  )
}