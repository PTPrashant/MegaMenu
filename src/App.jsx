import HomePage from "./Components/HomePage"
import Navbar from "./Components/Navbar"
import NavbarCustom from "./Components/NavbarCustom"
import ContextProvider from "./Context/ContextProvider"


function App() {

  return (
    <ContextProvider>
    <Navbar />
    {/* 
    <NavbarCustom />
  */}
  <HomePage />
     
    </ContextProvider>
  )
}

export default App
