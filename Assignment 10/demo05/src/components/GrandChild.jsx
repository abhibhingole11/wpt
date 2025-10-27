export function GrandChild({count,setCount}){
    return <div style={{border: '2px solid blue', padding: '5px', display: 'inline-block'}}>
        <h3>GrandChild</h3>
        <button onClick={()=>setCount(count+1)}>Incr</button>
    </div>

}