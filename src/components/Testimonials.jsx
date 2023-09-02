
const userData = [
    {
        id:1,
        name: "Michelle",
        rating: 4,
        imageSrc: "/assets/user1.png",
        reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt officiis tempore soluta porro, dignissimos ut vitae dolorum quas harum?"
    },
    {
        id:2,
        name: "Devin",
        rating: 5,
        imageSrc: "/assets/user2.png",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur laboriosam accusantium commodi"
    },
    {
        id:3,
        name: "Cheryl",
        rating: 5,
        imageSrc: "/assets/user3.png",
        reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis dicta, perspiciatis fugit debitis ad. Et eius fugiat quasi officiis aliquam itaque architecto cumque iusto voluptates sequi repudiandae molestias sint eum unde vero accusamus, quam facilis! Rem?" 
    },
    {
        id:4,
        name: "Nick",
        rating: 4,
        imageSrc: "/assets/user4.png",
        reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo harum commodi voluptas molestias voluptatem accusamus, quae voluptate ipsam blanditiis! Quam, itaque praesentium?" 
    },
]

export default function Testimonials() {
  return (
    <section className='testimonials'>
        <div className="container testimonials__container">
            <h1 style={{textAlign: "center"}} className="section-header">
                User Reviews
            </h1>
            <div className="testimonials__cards">
                {userData.map(user => {
                    return (
                        <div
                        key={user.id}
                        className="testimonials__card">
                            <div className="testimonials__rating">
                                <p>{user.rating}/5</p>
                                <img
                                src="/assets/star.png"
                                alt="a star icon"
                                className='testimonials__star-icon' />
                            </div>
                            <div className="testimonials__profile">
                                <img
                                src={user.imageSrc}
                                alt="The user who has written this review"
                                className='testimonials__profile__image'
                                />
                                <p className="testimonials__profile__username">{user.name}</p>
                            </div>
                            <p className='testimonials__review text__karla'>{user.reviewText}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    </section>
  )
}
