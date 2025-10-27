import { GrandChild } from "./GrandChild";

export function Child({count,setCount}){
    return <div style={{border: '2px solid blue', padding: '5px', display: 'inline-block'}}>
        <h3>child</h3>
        <GrandChild count={count} setCount={setCount}/>
       

    </div>
}