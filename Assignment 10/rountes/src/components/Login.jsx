import { useNavigate } from "react-router"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { toast } from "react-toastify";
import { Welcome } from "./Welcome";

export function Login(){
    const[formData, setFormData] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleChange = (e) =>setFormData({...formData,[e.target.id] : e.target.value})
    const handleSubmitClick = ()=>{
        if(formData.email === 'abhijeet@gmail.com' && formData.password==='1234'){
            navigate("/welcome",
                 {
        state: {
          email: formData.email
        }
      }
            )
        }
        else{
            toast.error("invalid email or password")
        }
    }
    return <div>
        <h3>login</h3>
        <div>
       <div className="form-group mb-3">
             <label htmlFor="email">Email:</label>
            <input type="text"  id="email" className='from-control' onChange={handleChange}/>
       </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
            <input type="text"  id="password" className='from-control' onChange={handleChange}/>

        </div>
        <div className="form-group mb-3">
            <button className="btn btn-primary" onClick={handleSubmitClick}>Sign-In</button>
        </div>
            </div>
    </div>
}