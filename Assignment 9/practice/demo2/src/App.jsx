import ClassHello from "../../../demo02-props/src/components/ClassHello"
import GenericButton, { DangerButton, PrimaryButton, SecondaryButton } from "./components/Button"
import FunctionalHello from "./components/FuncitonalHello"
import Product from "./components/product"
import Product2 from "./components/Product2"



function App() {
  

  return (
    <>
    {/* <Product name={"iphone 17"} company={"Apple"} price={125000.0}/>
    <Product name={"inspiron laptop"} company={"dell"} price={"129488.0"}/> 
     <Product/> */}
     {/* <FunctionalHello/> */}
     {/* <ClassHello/> */}
     {/* <Product2 name={"vivobook"} company={"asus"} price={12437.0}>
      <div>intel: processor</div>
      <div>graphics card: 4gb</div>
     </Product2> */}
      {/* <Product2>
        <h1>this is default data and component number 2</h1>
      </Product2> */}
      <Product2 name={"iphone 17"} company={"Apple"} price={235634.86}>
        <PrimaryButton text="Add to Cart"/>
        <SecondaryButton text="add to WishList"/>
        <DangerButton text="not interested"/>
        <GenericButton text="Buy now" color="Green"/>
        




      </Product2>



 


     
     
    </>
  )
}

export default App
