import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const cartFromLocalStorage = JSON.parse(typeof window !== "undefined" ? localStorage.getItem('cart') : '' || "[]");
    const [cart, setCart] = useState([cartFromLocalStorage]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // add item to cart
    const addCartItem = (productID, productImg, productTitle, productPrice) => {

        setCart([...cart, {
            productID,
            productImg,
            productTitle,
            productPrice
        }]);
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{ cart, addCartItem, removeItem }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;