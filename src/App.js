import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './footer/Footer';





function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full     overflow-x-hidden '>
      <Navbar open={open} setOpen={setOpen} />

      <Footer />
    </div>
  )
}

export default App