
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
        reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt officiis tempore soluta porro, dignissimos ut vitae dolorum quas harum?"
    },
    {
        id:3,
        name: "Cheryl",
        rating: 5,
        imageSrc: "/assets/user3.png",
        reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt officiis tempore soluta porro, dignissimos ut vitae dolorum quas harum?"
    },
    {
        id:4,
        name: "Nick",
        rating: 4,
        imageSrc: "/assets/user4.png",
        reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt officiis tempore soluta porro, dignissimos ut vitae dolorum quas harum?"
    },
]

export default function Testimonials() {
  return (
    <section className='testimonials'>
        <div className="container testimonials__container">
            <h1 style={{textAlign: "center"}} className="section-header">
                Testimonials
            </h1>
            <div className="testimonials__cards-container">
                {userData.map(user => {
                    return (
                        <div
                        key={user.id}
                        className="testimonials__card">
                            <div className="testimonial__rating">
                                <p>{user.rating}/5</p>
                                <img
                                src="/assets/star.png"
                                alt="a star icon"
                                className='testimonial__star-icon' />
                            </div>
                            <div className="testimonial__profile">
                                <img
                                src={user.imageSrc}
                                alt="The user who has written this review"
                                className='testimonials__image'
                                />
                                <p className="testimonial__username">{user.name}</p>
                            </div>
                            <p className='testimonial__review text__karla'>{user.reviewText}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    </section>
  )
}
