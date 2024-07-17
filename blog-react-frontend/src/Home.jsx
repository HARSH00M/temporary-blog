import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



export default function Home() {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}
