export default function About() {
  return (
    <section className="about">
        <div className="container about__container">
            <div className="about__text">
                <div className="about__titles">
                    <h1 className="section-header">Little Lemon</h1>
                    <h2 className="section-subheader">Chicago</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, excepturi! Libero cum voluptates quia odio in, assumenda facilis suscipit aspernatur. Quae exercitationem magnam, fugit quas maiores asperiores perferendis fugiat, nam, officia unde quod! Quaerat consequuntur eaque obcaecati impedit laboriosam sint?</p>
            </div>

            <div className="about__images">
                <img
                src="/assets/Chefs2.jpg"
                alt="left/foreground"
                className="about__image about__image__left"
                />
                <img
                src="/assets/Chefs1.jpg"
                alt="right/background"
                className="about__image about__image__right"
                />
            </div>
        </div>
    </section>
  )
}
