import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/reserve' element={<Booking />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App