import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Required Modules 
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// Service Data
const skillData = [
  {
    image: '/ico-1.png',
    title: 'Brannding',
    description: 'Minimal Personal page (built with framer) for freelance product designer'
  },
  {
    image: '/ico-2.png',
    title: 'Design',
    description: 'Featuring a unique bento grid of preview images when you click projects'
  },
  {
    image: '/ico-3.png',
    title: 'Development',
    description: 'Clean one pager for relay grid of the design studio led when you click has project.'
  },
  {
    image: '/ico-4.png',
    title: 'Mobile Apps',
    description: 'Lots of fun stuff in here like a when you click his project unique bento grid of'
  },
  {
    image: '/ico-2.png',
    title: 'SEO',
    description: 'Chat bot and even a pong game fun stuff in that dicounts his services if you beat the house',
  },
]

const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{ 
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
     }}
     freeMode={true}
     pagination={{ 
      clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
     >
      {
        skillData.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="bg-white h-max rounded-lg px-9 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0
              group cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                {/* Icon */}
                <div className="text-4xl mb-4">
                  <Image
                  src={item.image}
                  width={50}
                  height={50}
                  />
                </div>

                {/* Title Description */}
                <div className="mb-2">
                  <div className="mb-2 text-lg">
                    {item.title}
                  </div>
                  <div>
                    {item.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
      
    </Swiper>
  )
}

export default ServiceSlider;