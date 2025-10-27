import { toast } from "react-toastify"
import { Route, Routes } from 'react-router'
import Login from "./components/Login"
import Register from "./components/Register"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"


function App() {

  return (
    <div className="conatiner">

        <h1>Task Manager</h1>

        <Routes>
            <Route index element= <Login></Login> ></Route>
            <Route path="/login"  element= <Login></Login> ></Route>
            <Route path="/register"  element= <Register></Register> ></Route>
            <Route path="/user/tasks" element= <TaskList></TaskList> ></Route>
            <Route path='/user/taskform' element=<TaskForm></TaskForm> ></Route>

        </Routes>

    </div>
  )
}

export default App
