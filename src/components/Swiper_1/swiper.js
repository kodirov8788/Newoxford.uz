import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { swiper_data } from '../../swiper_static_data';


export default () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            loop={true}
            autoplay={
                {
                    delay: 2000,
                    disableOnInteraction: false
                }
            }
            modules={[Pagination, Autoplay]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

        >
            {swiper_data.map(data => (
                <SwiperSlide className='border-2 border-[black]' key={data.id}>
                    <div style={{ backgroundImage: `url(${data.image})` }}
                        className="relative w-full h-[50vh] flex flex-col items-center bg-cover bg-center m-auto ">
                        <div className="bg-[#000000b9] w-full h-full absolute">
                            <h1
                                className='w-full h-max flex flex-col items-center justify-center text-[white] py-[10%] text-[25px] font-[800]'>{data.title}
                            </h1>
                        
                        </div>

                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};