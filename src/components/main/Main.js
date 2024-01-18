import React from 'react'
import Partoneofmain from '../partoneofmain/Partoneofmain';

import Parttwoofmain from '../parttwoofmain/Parttwoofmain';
import Metors from '../mainswiper/Metors';
import Ielts from '../ielts/Ielts';




function Main() {

    const getScreenSize = () => {
        return window.screen.width > 768
    }

    return (
        <div className='w-full mt-[60px] font-sans'>
            <Partoneofmain />

            <Parttwoofmain />
            <Ielts/>
            <Metors />
        </div>
    )
}

export default Main