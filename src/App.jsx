import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Help from "./pages/Help"
import Notifications from "./pages/Notifications"
import Navbar from "./Sections/Navbar"
import Footer from "./Sections/Footer"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/help" element={<Help/>} />
    <Route path="/notifications" element={<Notifications/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App