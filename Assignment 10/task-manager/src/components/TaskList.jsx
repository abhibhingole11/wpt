import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";

import { deleteTaskById, findAllTasks, findTaskById } from './../services/tasks';


function TaskList (){
    const [tasks,setTasks] = useState([]);


    useEffect(()=>{
     setTasks( findAllTasks()) 
      
   },[])


    const navigate = useNavigate()



    function handlerTask(){
        navigate('/user/taskform')
    }

    function handlerLogout(){
    toast.success("Thank You")
        navigate('/login')
    }
    
   

   function handlerDelete(taskid){
        const data= deleteTaskById(taskid)
        setTasks(data)
       
   }

    

    return(
        <div>                
               {
                tasks.map((t)=> <div className="container "  >

                            <table>
                                <thead>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>desc</th>
                                    <th>action</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t.id}</td>
                                        <td>{t.title}</td>
                                        <td>{t.desc}</td>
                                        <td><button onClick={() => handlerDelete(t.id)}>delete</button></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            {/* <div>
                                <div>Id : {t.id}</div>
                            </div>
                            <div>
                                <div>Title : {t.title}</div>
                            </div>
                            <div>
                                <div>desc : {t.desc}</div>
                            </div>
                            <div>
                                    <button onClick={() => handlerDelete(t.id)}>delete</button>
                            </div>             */}
                        </div>                   
                )
               }
            <div>
                <button onClick={handlerTask}>Add Task</button>
            </div>
            <div>
                <button onClick={handlerLogout}>Logout</button>
            </div>
        </div>
    )
}

export default TaskList;
