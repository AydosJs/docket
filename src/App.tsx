import FooterComponent from "./components/FooterComponent"
import SearchComponent from "./components/SearchComponent"
import SideBarComponent from "./components/SideBarComponent"
import NotestContainer from "./containers/notes/NotestContainer"

function App() {
  return (
    <div className='flex flex-row h-screen divide-x-2 divide-gray-100'>
      <div className='w-[106px] h-full p-4 pt-6'>
        <SideBarComponent />
      </div>
      <div className='w-full p-4 px-12 pt-6 overflow-y-auto'>
        <SearchComponent />
        <NotestContainer />
        <FooterComponent />
      </div>
    </div>
  )
}

export default App
