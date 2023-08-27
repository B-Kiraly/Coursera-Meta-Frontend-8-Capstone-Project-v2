const specialsData = [
    {
      id: 1,
      dish: "Greek Salad",
      imageSrc: "/assets/greek_salad.jpg",
      altMessage: "A greek salad",
      price: 12.99,
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      id: 2,
      dish: "Bruchetta",
      imageSrc: "/assets/bruchetta.jpg",
      altMessage: "A close-up of several slices of bruchetta, served on a wooden platter and surrounded and topped by herb garnishes.",
      price: 5.99,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
      id: 3,
      dish: "Lemon Dessert",
      imageSrc: "/assets/lemon_dessert.jpg",
      altMessage: "A yellow cake-like pastry with lemon's visible in the background and a fork visible in the foreground",
      price: 4.99,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
  ]

export default function Specials() {
  return (
    <section className="specials">
        <div className="container specials__flex">
            <div className="specials__topbar">
                <h1 className="section-header">
                    This Week's Specials!
                </h1>
                <button className="button--standard specials__button">Online Menu</button>
            </div>
            <div className="specials__items">

                {specialsData.map(special => {
                return (
                    <div
                    className="specials__card"
                    key={special.id}
                    >
                    <img
                    src={special.imageSrc}
                    alt={special.altMessage}
                    className='specials__image'
                    />
                    <div className="container--tight">
                        <div className='specials__item__heading'>
                            <p className='text-card-title'>{special.dish}</p>
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


