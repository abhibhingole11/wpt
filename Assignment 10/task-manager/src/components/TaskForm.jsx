import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { taskSave } from './../services/tasks';

function TaskForm(){

    const [task,setTask] = useState({
        title:'',
        desc:''
    })

    const navigate = useNavigate()


    function handlerSave(){
        taskSave(task)
        navigate('/user/tasks')
        toast.success("task added")
    }

    function handleChange(e){
        setTask({
            ...task,
            [e.target.id] : e.target.value
        })
    }

    return(
        <div className='col-6 m-3 p-3 box border border-2'>
        <h3>Add Task</h3>
        <div className='form-group mb-3'>
            <label >Title: </label>
            <input type='text' id='title' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group mb-3'>
            <label >desc: </label>
            <input type='text' id='desc' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group mb-3'>
            
            <button onClick={handlerSave}>Save</button>
        </div>
        
    </div>
    )
}

export default TaskForm