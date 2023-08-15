import FooterComponent from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent"
import SearchComponent from "./components/SearchComponent"
import SideBarComponent from "./components/SideBarComponent"
import NotestContainer from "./containers/notes/NotestContainer"

function App() {
  return (
    <div className='flex flex-col h-screen divide-x divide-gray-300 sm:flex-row'>
      <div className='w-[106px] hidden sm:block  h-full p-4 pt-6' >
        <SideBarComponent />
      </div >
      <div className="w-full p-4 px-6 border-b sm:hidden z-100">
        <HeaderComponent />
      </div>
      <div className='w-full p-4 px-6 pt-6 overflow-hidden overflow-y-auto sm:px-12 '>
        <SearchComponent />
        <NotestContainer />
        <FooterComponent />
      </div>
    </div >
  )
}

export default App
