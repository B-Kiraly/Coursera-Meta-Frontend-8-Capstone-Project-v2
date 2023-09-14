import { useCart } from "../providers/CartContext"
import { useEffect, useState } from "react"

export default function Cart() {

    const {cart, setCart}= useCart()

    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        setSubtotal(0)
        cart.forEach(itemObj => {
            setSubtotal(prevTotal => {
                let newTotal = parseFloat(prevTotal) + parseFloat((itemObj.dish.price * itemObj.quantity))
                return newTotal.toFixed(2)
            }
            )
        })
    }, [cart])

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart))
      }, [cart])

    return (
        <section className="cart">
            <div className="container cart__container">
                <ul className="cart__list">
                    {cart.map((itemObj) => {
                        return (
                            <li 
                            key={itemObj.dish.id}
                            className="cart__item"
                            >
                                <img 
                                className="cart__item__image" 
                                src={itemObj.dish.imageSrc} 
                                alt={itemObj.dish.name} 
                                />
                                <p className="cart__item__title">
                                    {itemObj.dish.name} x{itemObj.quantity}
                                </p>
                                <p className="cart__item__price">
                                    ${(itemObj.dish.price * itemObj.quantity).toFixed(2)}
                                </p>
                                <button 
                                className="cart__item__delete"
                                onClick={() => {            
                                    setCart(current => current.filter(orderObj => {
                                        return orderObj.dish.name !== itemObj.dish.name
                                    }))
                                }}
                                >
                                    X
                                </button>
                            </li>
                        )
                    })}
                </ul>
                {cart.length === 0? 
                <p className="cart__item__title">Your cart is current empty</p> 
                : 
                <>
                    <p className="cart__item__title cart__item__subtotal">Subtotal: {subtotal}</p>
                    <button className="button--standard cart__button">Proceed to Checkout</button>
                </>

                }
            </div>

        </section>
    )
}
