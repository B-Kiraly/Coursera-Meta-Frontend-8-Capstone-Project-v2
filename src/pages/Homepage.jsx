import Testimonials from "../components/Testimonials"
import About from "../components/About"
import Hero from "../components/Hero"
import Specials from "../components/Specials"

export default function Homepage() {
  return (
    <main>
        <Hero />

        <Specials />

        <Testimonials />

        <About />
    </main>
  )
}
