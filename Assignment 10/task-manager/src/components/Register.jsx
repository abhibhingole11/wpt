import { useState } from "react"
import { Navigate, useNavigate } from "react-router"
import { userSave } from './../services/users';
import { toast } from "react-toastify";


function Register(){

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        passwd:''
    })

    const navigate = useNavigate()

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }

    function handleSubmitClick(){
            
         userSave(formData)
        toast.success("user registered !")
        navigate('/login')

    }



        return( <div className='col-6 m-3 p-3 box border border-2'>
        <h3>Register</h3>
        <div className='form-group mb-3'>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group mb-3'>
            <label htmlFor='email'>Email: </label>
            <input type='text' id='email' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group mb-3'>
            <label htmlFor='passwd'>Password: </label>
            <input type='password' id='passwd' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group mb-3'>
            <button className='btn btn-primary' onClick={handleSubmitClick}>Register</button>
        </div>
    </div>
    )
}

export default Register;
