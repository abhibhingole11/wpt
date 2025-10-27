function Product2(props){
    const pname = props.name || "unknown"
    const pcompany = props.company || "unknown"
    const pprice = props.price || 0.0
    

    return <div>
       
        {/* <h2>hello from Product2 component jsx</h2> */}
        <div>name:{pname}</div>
        <div>company:{pcompany}</div>
        <div>price: {pprice}</div>
         <div>{props.children}</div>
    </div>
    
}
export default Product2;