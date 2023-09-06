import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';
import { specialsData } from '../utils/menuData';
import { useCart } from '../providers/CartContext';

export default function Specials() {

  const {cart, setCart} = useCart()

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const [specialsMenu, setSpecialsMenu] = useState(specialsData)

  const handleOrder = (dish, index) => {
    console.log(`Menu array id ${index} has been clicked`);

    Swal.fire({
        title: `Add ${dish.name} to Cart?`,
        inputLabel: "Choose quantity:",
        input: "range",
        inputAttributes: {
          min: 1,
          max: 10,
          step: 1,
          value: dish.numToAdd,
          id: "specials__modal",
        },
        inputValue: 1,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#638f2b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Order it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            `Added ${dish.name} x${result.value} to cart!`,
            'You may change your order in your cart later',
            'success'
          )
          let isAlreadyInCart = false
          cart.forEach(itemObj => {
            if (!isAlreadyInCart) {
              if (itemObj.dish.name === dish.name) {
                console.log("Dish is already in array")
                isAlreadyInCart = true
                setCart(cart.map(itemObj => {
                  if (itemObj.dish.name === dish.name) {
                    return {...itemObj, quantity: itemObj.quantity + parseInt(result.value)}
                  }
                  else {
                    return itemObj
                  }
                }))
              }
            }
          })
          if (!isAlreadyInCart) {
            setCart([...cart, {
              dish: {...dish},
              quantity: parseInt(result.value)
            }])
            console.log("New cart item added")
          }
          }
      })
  }

  return (
    <section className="specials">
        <div className="container specials__flex">
            <div className="specials__topbar">
                <h1 className="section-header" onClick={() => console.log(cart)}>
                    This Week's Specials!
                </h1>
                <button 
                className="button--standard specials__button"
                >
                  Online Menu
                </button>
            </div>
            <div className="specials__items">

                {specialsMenu.map((special, index) => {
                return (
                    <div
                    className="specials__card"
                    key={index}
                    onClick={() => handleOrder(special, index)}
                    >
                    <img
                    src={special.imageSrc}
                    alt={special.altMessage}
                    className='specials__image'
                    />
                    <div className="container--tight">
                        <div className='specials__item__heading'>
                            <p className='text-card-title'>{special.name}{special.numToAdd}</p>
                            <p className='text-price'>{special.price}</p>
                        </div>

                        <p className="specials__paragraph text__karla">
                          {special.description}
                        </p>
                        <div className="specials__delivery">
                        <p>Order a delivery</p>
                        <img
                        src="/assets/delivery.png"
                        alt="a simple, black silouette icon depicting a delivery scooter"
                        className='icon-delivery'
                        />
                        </div>
                    </div>
                    </div>
                )
                })}
            </div>
        </div>
    </section>
  )
}


