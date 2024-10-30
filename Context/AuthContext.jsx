import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState("");
    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState([])

    const addToCart = (item) =>{
        setCartCount(cartCount+1);
        setCart((prevCart)=>[...prevCart,item])
    }

    const deleteFromCart =(title)=>{
        setCart((prevCart)=>prevCart.filter((item)=> item.title !== title));
      };

    const setAuth = authUser=>{
        setUser(authUser);

    }
    const setUserData = userData=>{
        setUser({...userData})
    }

   return(
    <AuthContext.Provider value={{user,setAuth,setUserData, cart,cartCount,addToCart, deleteFromCart}} >
        {children}
    </AuthContext.Provider>
   )
}

export const useAuth = ()=>useContext(AuthContext);
