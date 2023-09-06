import { createContext, useContext, useState } from "react";

const cartContext = createContext({})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(sessionStorage.getItem("cart")? JSON.parse(sessionStorage.getItem("cart")) : [])

    return (
        <cartContext.Provider
        value={{
            cart,
            setCart
        }}
        >
            { children }
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext)