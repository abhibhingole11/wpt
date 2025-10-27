export function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('lightgreen');
  // one time execution
  useEffect(() => {
    console.log("like componentDidMount().")
  }, [])
  // when "count" state is modified
  useEffect(() => {
    console.log("like componentDidUpdate() for 'count'.")
    if(count % 2 == 0)
      setColor('lightgreen')
    else
      setColor('lightblue')
  }, [count])
  // when "color" state is modified
  useEffect(() => {
    console.log("like componentDidUpdate() for 'color'.")
  }, [color])
  return <div style={{backgroundColor: color, padding: '5px', display: 'inline-block'}}>
    <h3>Advanced Counter</h3>
      <h4>Count = {count}</h4>
      <button onClick={() => setCount(count+1)}>Incr</button>
  </div>
}