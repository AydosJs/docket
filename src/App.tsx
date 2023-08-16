import FooterComponent from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent"
import SearchComponent from "./components/SearchComponent"
// import SideBarComponent from "./components/SideBarComponent"
import NotestContainer from "./containers/notes/NotestContainer"

function App() {
  return (
    <div className='flex flex-col justify-center h-screen overflow-hidden overflow-y-auto sm:flex-row'>
      <div className="">
        <HeaderComponent />
      </div>
      <div className='sm:ml-[106px]  w-full p-4 px-6 pt-6  sm:px-12 max-w-[100rem]'>
        <SearchComponent />
        <NotestContainer />
        <FooterComponent />
      </div>
    </div >
  )
}

export default App
