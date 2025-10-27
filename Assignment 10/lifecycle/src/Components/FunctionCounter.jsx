import { useEffect } from "react";
import { useState } from "react";
export function FunctionCounter(){
    const[count, setCount] = useState(0);
    useEffect(()=>{
        console.log("like componentDidMount")
        return ()=>{
            console.log("like componentWillunmount")

        }
    },[])

    useEffect(()=>{
        console.log("like componentDidUpdate")

    },[count])
    useEffect(()=>{
        console.log("post render().")
    })
    return  <div>
         
        <h3>funcnction counter</h3>
        <h4>Count ={count}</h4>
        <button onClick={()=> setCount(count+1)}>Incr</button>
    
    </div>
   

}