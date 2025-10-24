const Book = 
    {
      id:1,
      name:'chava',
      price:100,
      author:"shivaji sawant",
      edition:"first"
    }
    const bookUrl = "https://nilesh-g.github.io/learn-web/JS/images/webp/"
   
    const styles = {
        container:{
            alignItems:"center",
            display:"flex",
            gap:"20px"
        },
        img:{
            width:"70px",
            height:"80px",
           
            
        }
    }

function BookInfo(){
    return  <div> {
    
        <div style={styles.container}>
       <div>
    <div>id: {Book.id}</div>
    <div>name: {Book.name}</div>
    <div>price: {Book.price}</div>
    <div>author:{Book.author}</div>
    <div>edition: {Book.edition}</div>
    </div> 
    
    <img style={styles.img}
    
    alt={"image"} 
    src={bookUrl + "book" + Book.id + ".webp"} />
    </div>
   
    
    }
     </div>
  
}
export default BookInfo;