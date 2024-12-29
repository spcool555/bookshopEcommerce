import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import { apiUrl } from "../ApiUrl/ApiUrl";



export const CartContext = createContext();




const CartContextProvider = ( {children} )=>{
  
  const uid = localStorage.getItem('uid');
    const carturl = `${apiUrl}/public/getAllCartById?uid=${uid}`
    
    const [cartData, SetCartData] = useState([]);
    const [ loading, setLoading ] = useState(false);

    let prevData = JSON.parse(localStorage.getItem("orderpageData")) ||[]

    const [orderpageData, setOrderpageData] = useState([...prevData]);

    localStorage.setItem("orderpageData", JSON.stringify(orderpageData));

    const [globalAddress, setGlobalAddress] = useState({})
    function getData() {
        setLoading(true);
        fetch(carturl)
          .then((res) => res.json())
          .then((res) => {
            SetCartData(res)
          })
          .catch((err) => console.log(err))
          .finally(()=>setLoading(false))
      }
      useEffect(()=>{
        getData();
      },[])

      

return <CartContext.Provider value={{ 
        cartData, SetCartData,loading,
        setOrderpageData, orderpageData,
        setLoading,getData, globalAddress, setGlobalAddress, carturl
    }} >
    {children}
</CartContext.Provider>

}


export default CartContextProvider;