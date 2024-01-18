import React from 'react'
import './Metors.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import hacker from '../../images/html.jpg'
import img1 from '../../images/aug.webp'


function Metors() {

    const developers = [
        // {
        //     id: 1,
        //     fname: 'Oybek',
        //     lname: 'Abdujabborov',
        //     img: img5,
        //     degree: "Full-stack"
        // },
        {
            id: 2,
            fname: 'Bahromjon',
            lname: 'Abdulhayev',
            img: img1,
            degree: "Full-stack"
        },
        {
            id: 3,
            fname: 'Azimjon',
            lname: 'Mamutaliyev',
            img: img1,
            degree: "Full-stack"
        },
        {
            id: 4,
            fname: 'Boburmirzo',
            lname: 'Rasulov',
            img: img1,
            degree: "Full-stack"
        },
        {
            id: 5,
            fname: 'Muhammadali',
            lname: 'Qodirov',
            img: img1,
            degree: "Full-stack"
        },
        {
            id: 6,
            fname: 'Bekzod',
            lname: 'Abdulhamidov',
            img: img1,
            degree: "Full-stack"
        },
        {
            id: 7,
            fname: 'Sherzodbek',
            lname: 'Yoqubov',
            img: img1,
            degree: "Full-stack"
        }
    ]
    let width = window.innerWidth
    return (
        <div data-aos="fade-up" className='carousel'>
            <h3 className='text-black'>OXFORD O'QITUVCHILARI</h3>
            <br />
            <Swiper
                slidesPerView={width > 1400 ? 5 : width > 1000 ? 4 : width > 700 ? 3 : width > 410 ? 2 : 1}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                
                className="mySwiper"
                data-aos="fade-up"
            >
                {
                    developers.map((dev) =>
                        <SwiperSlide style={{ backgroundImage: `url(${hacker})`, backgroundSize: "cover" }}>
                            <img src={dev.img} alt={dev.degree} />
                            <div className='swiper_titles'>
                                <p>{dev.fname + " " + dev.lname}</p>
                                <b>{dev.degree} developer </b>
                            </div>

                        </SwiperSlide>
                    )
                }
            </Swiper>

        </div>
    )
}

export default Metors