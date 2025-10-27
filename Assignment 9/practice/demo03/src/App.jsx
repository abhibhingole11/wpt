



function App() {
  function handleClickMe1BtnClick(){
    alert("click me1 --- clicked!!!")
  }
  const handleClickMe2BtnClick = () =>{
    alert("Click me 2-- clikced!!")

  }
  const handleInputTextChange = (e) =>{
    const inputText = e.target
    console.log("Text: " + inputText.value)
  }
   const handleChildClick = (e)=>{
      console.log("child clicked")
   }
   const handleParentClick = (e) =>{
    console.log("parent cliked")

   }

  return (
    <div>
      <h3>Event Handling</h3>
      <button onClick={handleClickMe1BtnClick}>Click me-1</button>
      <button onClick={handleClickMe2BtnClick}>Click me -2 </button>
       <input type="text" id="input" onChange={handleInputTextChange} />
       <hr />
       <div id="parent" onClick={handleParentClick}>
        Event bubblind demo <br />
        <button id="child" onClick={handleChildClick}>child-btn</button>
       </div>
    </div>
  
  )
}

export default App
