import { Child2 } from "./Child2"
import { GrandChild2 } from "./GrandChild2"
import { useState } from "react"

export function Parent2(){
    const[count,setCount] = useState(0)
    return <div>
        <h3>Parent2: {count}</h3>
        <Child2>
            <GrandChild2 count={count} setCount={setCount}/>
        </Child2>
   
    </div>
}