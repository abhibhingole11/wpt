import { useState } from "react"
import { Child } from "./child"
// import { GrandChild } from "./GrandChild"
export function Parent(){
    const [count,setCount] = useState(0)
    return <div style={{border: '2px solid blue', padding: '5px', display: 'inline-block'}}>
        <h3>Parent: {count}</h3>
        <Child count={count} setCount={setCount}/>
 
    </div>
}