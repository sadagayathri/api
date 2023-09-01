import React from "react";
import axios from "axios";
function Shopping(){
    var [products,setProducts]=React.useState([])
    var [cart,setCart]=React.useState([])
    React.useEffect(function(){
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts([...res.data])
            var products=res.data.map((x)=>{
                return {...x,IsProductInCart:false}
        
              });
              setProducts([...products])
              console.log(products)
        })
            
    },[])
  
    function addtocart(p,i,ev){
        var temp=[...products]
        temp[i].IsProductInCart=! temp[i].IsProductInCart
        ev.target.style.display="none"
        p.count=1
        setCart([...cart,p])  
    }
    function add(a){
        a.count++
        setCart([a])
        setCart([...cart])
    }
    function sub(s){
        s.count--
        setCart([s])
        setCart([...cart])
    }
    
    return(
      <div className="d-flex flex-wrap ">
        <div className="w-50">
        <ul className="d-flex flex-wrap ">
            {
                products.length>0 && products.map((product,i)=>{
                    return <div className="card m-2" style={{width: "12rem"}}>
                          <img src={product.image} class="card-img-top" alt="..." style={{height: "200px"}}/>
                        <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description.slice(0,10)}</p>
                      <p>{product.price}</p>
                      <button onClick={()=>{add(product)}} style={{display:"none"}}>+</button>
                      <button onClick={(event)=>{addtocart(product,i,event)}} id="btn">Add to cart</button>
                      <button onClick={()=>{sub(product)}} style={{display:"none"}}>-</button>
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
                    return <div className="d-flex flex-wrap ">
                          <div className="card" style={{width: "18rem"}}>
                           <img src={c.image} class="card-img-top" alt="..." style={{width:"60px",height:"60px"}}/>
                           {/* <b className="card-title">{c.title}</b>
                           <button onClick={()=>{add(c)}}>+</button>
                           <button onClick={()=>{sub(c)}}>-</button>
                           <p className="card-text"></p>{c.price} */}
                           <div className="card-body">
                          <b className="card-title">{c.title}</b>
                          <button onClick={()=>{add(c)}}>+</button>
                         <button onClick={()=>{sub(c)}}>-</button>
                        <p className="card-text"></p>{c.price}
                        </div>
                           </div>
                          
                          </div>
                    
                  
                    // return <li>
                    //     {c.title}:{c.count}
                    //     <button onClick={()=>{add(c)}}>+</button>
                    //     <button onClick={()=>{sub(c)}}>-</button>
                    // </li>
                })
            }
           </ul>
        </div>
      </div>  
    )
}
export default Shopping;