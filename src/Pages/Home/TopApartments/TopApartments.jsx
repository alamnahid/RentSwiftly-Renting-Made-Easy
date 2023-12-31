import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TopApartmentSwipperCard from './TopApartmentSwipperCard';
import { Link } from 'react-router-dom';



const TopApartments = () => {
    return (
        <div className="lg:h-[57rem] px-4 lg:px-0 bg-[#F3F3FA] pt-[7.5rem]">
            <div className='lg:pl-[10%]'>
            <h1 className="text-[#091638] merrin text-2xl lg:text-[3.2rem] font-semibold">Top Apartments</h1>
            <p className="text-[#091638] mt-8 lg:text-[1.2rem] lg:w-[38rem] sans">Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.</p>

            <div className="flex mt-5 lg:mt-4">
                <div className="divider w-[70vw]"></div>
                <Link to='/allhouse'><button className="btn btn-outline border-[#1C3988] ml-4 text-lg border-2">Show All Apartment</button></Link>
            </div>
            </div>

            <div className='mt-20 lg:pl-[10%]'>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-12"
                    autoplay
                    breakpoints={{
                        320: {
                            slidesPerView: 1, // 1 slide per view on small screens (mobile devices)
                        },
                        768: {
                            slidesPerView: 1.5, // 2 slides per view on tablets
                        },
                        1024: {
                            slidesPerView: 4.5, // 4 slides per view on desktop devices
                        },
                    }}

                >
                    <SwiperSlide className='pb-12'>
                        <TopApartmentSwipperCard />
                    </SwiperSlide>
                    <SwiperSlide className='pb-12'>
                        <TopApartmentSwipperCard />
                    </SwiperSlide>
                    <SwiperSlide className='pb-12'>
                        <TopApartmentSwipperCard />
                    </SwiperSlide>
                    <SwiperSlide className='pb-12'>
                        <TopApartmentSwipperCard />
                    </SwiperSlide>
                    <SwiperSlide className='pb-12'>
                        <TopApartmentSwipperCard />
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    );
};

export default TopApartments;