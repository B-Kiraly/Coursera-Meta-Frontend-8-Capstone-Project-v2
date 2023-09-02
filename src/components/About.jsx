export default function About() {
  return (
    <section className="about">
        <div className="container about__container">
            <div className="about__content">
                <div className="about__content__headers">
                    <h1 className="about__content__header section-header">
                        Little Lemon</h1>
                    <h2 className="about__content__header section-subheader">
                        Chicago
                    </h2>
                </div>
                <p className="about__content__paragraph text__karla">
                    Little Lemon opened in 2005 by two passionate young chefs, Adrian and Mario. Despite the city's diverse food culture, they recognized a lack of quality Mediterranean cuisine in Chicago, and were inspired to bring the authentic flavors of southern Italy to the people of Chicago. Nearly twenty years later, Little Lemon remains a fixture in the city's thriving food scene with its two founders still at the helm.
                </p>
            </div>

            <div className="about__images">
                <img
                src="/assets/Chefs2.jpg"
                alt="left/foreground"
                className="about__image about__image--left"
                />
                <img
                src="/assets/food3.jpeg"
                alt="right/background"
                className="about__image about__image--right"
                />
            </div>
        </div>
    </section>
  )
}
