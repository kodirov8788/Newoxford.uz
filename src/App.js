import Main from './components/main/Main';
import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'

import Footer from './footer/Footer';


function App() {


  const [open, setOpen] = useState(false)

  return (
    <div className="w-full overflow-hidden font-sans">
      <Navbar open={open} setOpen={setOpen} />
      <Main />
     
      
      
      <Footer />




    </div>
  );
}

export default App;
