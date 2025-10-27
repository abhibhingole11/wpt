import { useState } from "react"
export function RegistrationForm()
{
    const[userInfo,setUserInfo] = useState({
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:'',
        address:'',
        birth:''

    })
    const handleFirstNameChange = (e) =>{
        setUserInfo({
            firstName:e.target.value,
            lastName:userInfo.lastName,
            email:userInfo.email,
            password:userInfo.password,
            confirmPassword:userInfo.confirmPassword,
            mobile:userInfo.mobile,
            address:userInfo.address,
            birth:userInfo.birth
        })
        console.log("First Name changed: " + e.target.value)

    }
    const handleLastNameChange =(e)=>{
        setUserInfo({
            firstName:userInfo.firstName,
            lastName:e.target.value,
            email:userInfo.email,
            password:userInfo.password,
            confirmPassword:userInfo.confirmPassword,
            mobile:userInfo.mobile,
            address:userInfo.address,
            birth:userInfo.birth

            
        })
        console.log("last name changed: " + e.target.value)
    }

    const handleEmailChange = (e)=>{
        const newUserInfo ={
            ...userInfo,
            email:e.target.value
        }
        setUserInfo(newUserInfo)
        console.log(e.target.id + "changed: " + e.target.value)
    }
    const handlePasswdChange = (e) =>{
        const newUserInfo={
            ...userInfo,
            password:e.target.value
        }
        setUserInfo(newUserInfo)
        console.log(e.target.id + "changed: " + e.target.value)

    }
    const handleConfirmPasswordChange = (e) =>{
        const newUserInfo={
            ...userInfo,
            confirmPassword: e.target.value
        }
        setUserInfo(newUserInfo)
        console.log(e.target.id + "changed: " + e.target.value)
    }
    const handleChange =(e)=>{
        const newUserInfo ={
            ...userInfo,
            [e.target.id]: e.target.value
        }
        setUserInfo(newUserInfo)
        console.log(e.target.id + "changed: " + e.target.value)
    }
    const handleRegistrationform =() =>{
       let message=""
        if(userInfo.firstName==''){
          message += 'first name is empty\n'
        }
        if(userInfo.lastName==''){
            message +='last name is empty'
        }
        if(userInfo.email==''){
            message +='email is empty'
        }
        if(userInfo.mobile == ''){
            message += 'mobile is empty'
        }
        if(userInfo.password==''){
            message += 'password is empty'
        }
        if(userInfo.confirmPassword==''){
            message+='confirm password is empty'
        }
        if(userInfo.address==''){
            message +='address is empty'
        }
        if(userInfo.birth==''){
            message += 'birth is empty'
        }
        if(message){
            alert(message)
        }
        else{
            alert("succeess")

        }
   

    }
        return <div>
        <h4>Registration form</h4>
        <div>
            First Name: <input type="text" id="firstName" onChange={handleFirstNameChange}/>

        </div>
       <div>
            Last Name: <input type="text" id="lastName" onChange={handleLastNameChange} />
        </div>
         <div>
            Email: <input type="text" id="email" onChange={handleEmailChange} />
        </div>
        < div>
            Password: <input type="text" id="password" onChange={handlePasswdChange} />
        </div>
        <div>
            Confirm Password: <input type="text" id="confirmPassword" onChange={handleConfirmPasswordChange}/>
        </div>
        <div>
            Mobile: <input type="text" id="mobile" onChange={handleChange} />
        </div>
        <div>
            Address: <input type="text" id="address"  onChange={handleChange}  />
        </div>
        <div>
            Birth: <input type="birth" id="birth"  onChange={handleChange} />
        </div> 
        <div>
            <button id="submitBtn" onClick={handleRegistrationform}>Sign- Up</button>
        </div>
        <div>

        </div>
    </div>
    

}