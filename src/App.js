import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-[900px]   '>
      <Navbar open={open} setOpen={setOpen} />
    </div>
  )
}

export default App