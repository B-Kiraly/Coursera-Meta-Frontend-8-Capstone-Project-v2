import { Link } from "react-router-dom"

export default function Hero() {
  return (

    <section className="hero">
        <div className="container hero-container">
            <div className="hero-content">
                <div className="title-bundle">
                    <h1 className='section-header hero__header'>Little Lemon</h1>
                    <h2 className='section-subheader hero__subheader'>Chicago</h2>
                </div>
                <p className="hero__text text__karla">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <Link
                to={"/reserve"}
                role="button"
                className="button--standard hero__button"
                >
                    Reserve a Table
                </Link>
            </div>
            <div className="hero-image-container">
                <img
                src="/assets/breadEntree.jpg"
                alt="A tray of four pieces of bread, topped with a picturesque assortment of vegetables and garnishes"
                className='hero-image'
                />
            </div>
        </div>
    </section>

  )
}
