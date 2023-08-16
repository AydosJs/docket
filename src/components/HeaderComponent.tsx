import { useState } from "react";
import SideBarComponent from "./SideBarComponent";

export default function HeaderComponent() {

  const [open, setOpen] = useState<boolean>(false)

  const sideBarComp = <SideBarComponent handleClose={() => setOpen(false)} />

  return (
    <div className="h-full ">

      <div className='w-[106px] border-r border-gray-300 hidden sm:block sm:fixed  h-full p-4 pt-6 sm:top-0 sm:left-0' >
        {sideBarComp}
      </div >


      <div className="p-4 px-6 transition-all border-b sm:hidden z-100 ">
        <div className="flex flex-row items-center justify-between flex-nowrap">
          <div>
            <h1 className="text-3xl font-semibold">
              Notes
            </h1>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg cursor-pointer hover:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>

        {/* slide bar */}
        <div>
          <div
            onClick={() => setOpen(!open)}
            className={`${open ? 'absolute' : 'hidden'} transition-all top-0 left-0 z-40 w-screen h-screen bg-black opacity-20`} />
          <div className={`absolute top-0 ${open ? 'left-0' : 'left-[-106px]'} transition-all z-50 bg-white w-[106px] h-full p-4 pt-6`}>
            {sideBarComp}
          </div>
        </div>
      </div>

    </div >
  )
}