import { Home } from "./components/Home"
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { Login } from "./components/Login"
import { Welcome } from "./components/Welcome"
import { AboutUs } from "./components/AboutUs"


function App() {
  

  return (
    <div>
      <h1>react Router Demo</h1>
      <button onClick={()=> toast.info("Hello world")}>Click</button>
    <hr />
    <Link className="btn btn-link" to="/home">Home</Link>
    <Link className="btn btn-link" to="/login">Login</Link>
    <Link className="btn btn-link" to="/about">About us</Link>
    <hr />
    <Routes>
      <Route index element=<Home/> />
      <Route path='/home' element=<Home/> />
      <Route path='/login' element=<Login/> />
      <Route path='/welcome' element=<Welcome/> />
      <Route path='/about' element=<AboutUs/> />
    </Routes>

     
    </div>
  )
}

export default App
