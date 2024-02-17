
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  
  return (
    <div>
      <div className='text-white backdrop-opacity-10'>
        <Navbar />
      </div>

      <div className='max-w-6xl mx-auto min-h-screen'>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App
