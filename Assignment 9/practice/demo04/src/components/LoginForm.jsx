 import { useState } from "react"
 function LoginForm(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleEmailChange =(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmitClick=()=>{
        const msg = `Email: ${email}, password:${password}`
        alert(msg)
    }

    return <div>
        <h4>Login form</h4>
        <div>
            Email: <input type="text"  onChange={handleEmailChange}/>
        </div>
        <div>
            Password: <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button id="submitBtn" onClick={handleSubmitClick}>Sign in</button>
        </div>
    </div>

}
export default LoginForm