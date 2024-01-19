import Main from './components/main/Main';
import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'

import Footer from './footer/Footer';
import Hidden_swiper from "./components/Hidden_swiper";
import Accordion from "./Accordion/Accordion"
import Manzil from './components/Manzil/Manzil';

function App() {


  const [open, setOpen] = useState(false)

  return (
    <div className="w-full overflow-hidden font-sans">
      <Navbar open={open} setOpen={setOpen} />
      <Main />
      <Manzil/>
      <Hidden_swiper />
      <I_box />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
