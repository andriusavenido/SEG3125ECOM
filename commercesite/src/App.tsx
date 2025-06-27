import { BrowserRouter, Routes, Route } from "react-router";
import Ribbon from "./components/Ribbon";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Consoles from "./pages/Consoles";

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="fixed-top"> 
       <Ribbon></Ribbon>
    <Navbar/>
    </div>
    <div className="pages bg-light p-4 min-vh-100 mt-5 text-dark">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games/:category?" element={<Games/>}></Route>
        <Route path="/consoles/:category?" element={<Consoles/>}></Route>
        <Route path="*" element={<>404. Page not found!</>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
