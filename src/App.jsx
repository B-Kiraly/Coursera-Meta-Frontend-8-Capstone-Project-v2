import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Specials from './components/Specials'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/about' element={<><About /><Testimonials /></>} />
        {['menu', 'orders', 'specials'].map((path, index) => <Route key={index} path={path} element={<Specials />} />)}
        <Route path='/reservation' element={<Booking />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App