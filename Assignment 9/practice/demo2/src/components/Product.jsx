 function Product(props){
    const pname = props.name || "Dummy product"
    const pcompany = props.company || "Unknown"
    const pprice = props.price || 0.0

    return <div>
        <h3>Name:{pname}</h3>
        <div>company: {pcompany}</div>
        <div>price:{pprice}</div>
    </div>


}
export default Product
