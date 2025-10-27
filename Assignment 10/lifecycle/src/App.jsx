import { useState } from "react"
import { ClassCounter } from "./Components/ClassCounter"
import { FunctionCounter } from "./Components/FunctionCounter"
import { AdvancedCounter } from "./Components/AdvancedCounter"

function App() {
  const[visible,setVisible] = useState(true)
 

  return (
    
    <div>
      <button onClick={()=>setVisible(!visible)}>Toggle</button>
      <br/> <br/>
     {/* { visible ? <ClassCounter/> :  <div><h1>hahw</h1></div>} */}
     {/* {visible && <FunctionCounter/>} */}
     {visible && <AdvancedCounter/>}

    

     
     
    
    </div>
    
    
     
  )
}

export default App
