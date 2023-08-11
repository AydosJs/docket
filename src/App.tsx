import FooterComponent from "./components/FooterComponent"
import SearchComponent from "./components/SearchComponent"
import SideBarComponent from "./components/SideBarComponent"
import NotestContainer from "./containers/notes/NotestContainer"
import { useState } from "react"

function App() {
  const [count, steCount] = useState<number>(0)
  return (
    <div className='flex flex-row h-screen divide-x-2 divide-gray-100'>
      <div className='w-[106px] h-full p-4 pt-6'>
        <SideBarComponent />
      </div>
      <div className='w-full p-4 px-12 pt-6 overflow-y-auto'>
        <SearchComponent />
        <NotestContainer />
        <p>{count}</p>
        <button onClick={() => {
          steCount((item) => {
            return ++item
          })
        }}>+</button>

        <FooterComponent />
      </div>
    </div>
  )
}

export default App
