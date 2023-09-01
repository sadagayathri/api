import React from "react";
import axios from "axios";
function Shopping(){
    var [products,setProducts]=React.useState([])
    var [cart,setCart]=React.useState([])
    React.useEffect(function(){
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts([...res.data])
        })
    },[])
    function addtocart(product){
        
        product.count=1
        setCart([...cart,product])
    }
    function add(a){
        a.count++
        setCart([...cart,a])
    }
    function sub(s){
       
        s.count--
        setCart([...cart,s])
    }
    
    return(
      <div className="d-flex flex-wrap ">
        <div className="w-50">
        <ul className="d-flex flex-wrap ">
            {
                products.length>0 && products.map((product,i)=>{
                    return <div className="card m-2" style={{width: "12rem"}}>
                          <img src={product.image} class="card-img-top" alt="..."/>
                        <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description.slice(0,10)}</p>
                      <p>{product.price}</p>
                      <button onClick={()=>{add(product)}}>+</button>
                      <button onClick={(event)=>{addtocart(product,i,event.target.style.display="none")}} id="btn">Add to cart</button>
                      <button onClick={()=>{sub(product)}}>-</button>
                        </div>
                       </div>
                })
            }
        </ul>
        </div>
        <div className="w-50">
           <ul>
            {
                cart.length>0 && cart.map((c)=>{   
                    return <li>
                        {c.title}:{c.count}
                        <button onClick={()=>{add(c)}}>+</button>
                        <button onClick={()=>{sub(c)}}>-</button>
                    </li>
                })
            }
           </ul>
        </div>
      </div>  
    )
}
export default Shopping;