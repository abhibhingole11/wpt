import { useState } from "react"
export function Counter(){
    const [count,setCount] = useState(0)
    const handleIncrClick = () =>{
        setCount(count + 1)
        console.log("Incr Clicked: " + count)
    }
    const handleDecClick = () =>{
        setCount(count -1)
        console.log("decr click:" + count)
    }
    const handleSetDefault = () =>{
        let count = prompt("Enter value to set: ")
        setCount(count)
    }

    return <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleIncrClick}>Inc</button>
        <button onClick={handleDecClick}>Dec</button>
        <button onClick={handleSetDefault}>set value</button>
    </div>

}