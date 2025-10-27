export function GrandChild2({count,setCount}){
    return <div>
        <h3>GrandChild</h3>
      <button onClick={()=>setCount(count+1)}>Click</button>


    </div>


}