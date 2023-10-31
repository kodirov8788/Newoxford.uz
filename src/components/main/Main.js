import React from 'react'
import Partoneofmain from '../partoneofmain/Partoneofmain';
import Swiper from '../Swiper_1/swiper';
import { swiper_data } from '../../swiper_static_data';
import Parttwoofmain from '../parttwoofmain/Parttwoofmain';
import Parttsriofmain from '../partsriofmain/Parttsriofmain';




function Main() {

    const getScreenSize = () => {
        return window.screen.width > 768
    }

    return (
        <div className='w-full mt-[60px]'>
            <Partoneofmain />

            {!getScreenSize() ? <Swiper /> :
                <Parttwoofmain />

            }

            <Parttsriofmain />
        </div>
    )
}

export default Main