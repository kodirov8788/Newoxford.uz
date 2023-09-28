import { Swiper, SwiperSlide, au } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { swiper_data } from '../../static_data';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                Pagination,
                clickable: true
            }}
            // navigation={true}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            modules={[Pagination, Navigation, Autoplay]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {swiper_data.map(data => (
                <SwiperSlide key={data.id} className=' relative z-0 py-10'>
                    <div className=" h-[85vh]  pt-8 z-0">
                        <h1 className=' text-black text-2xl text-center font-bold'>QULAY O'QUV FORMATLARI</h1>
                        <img className='' style={{ height: "40vh", width: "90%", margin: "auto", marginTop: "20px", objectFit: "cover" }} src={data.image} alt="" />
                        <h1 className=' w-[90%] m-auto text-xl font-bold text-black mt-3'>{data.text_h1}</h1>
                        <p className=' w-[90%] m-auto text-black mt-3'>{data.text_p}</p>
                        <div className=" absolute flex w-full justify-between top-0 pt-6">
                            <div className="prev" >
                                <h1 className=' text-2xl'><AiOutlineArrowLeft/> </h1>
                            </div>
                            <div className="next" >
                                <h1 className=' text-2xl'> <AiOutlineArrowRight/>  </h1>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            ))}




        </Swiper>
    );
};