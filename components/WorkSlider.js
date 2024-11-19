const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/Home.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
        {
          title: 'title',
          path: '/loh.png',
        },
      ],
    },
  ],
};

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//required modules
import { Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{ 
      clickable: true,
     }}
     modules={[Pagination]}
     className='h-[280px] sm:h-[480px]'
    >
      {
        workSlider.slides.map((slide, index) => {
          return(
            <SwiperSlide key={index}>
              <div className='grid grid-cols-3 gap-4 cursor-pointer'>
                {
                  slide.images.map((image, index) => {
                    return (
                      <div key={index}>
                        <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                          {/** Image */}
                          <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=''
                          />

                          {/**Overflay */}
                          <div className='absolute bottom-0 right-0  bg-white/90 flex-col items-center
                          justify-end w-96 gap-8 p-4 text-xl transition duration-300 ease-in-out
                          translate-y-full from-transparent to-black group-hover:translate-y-0 '>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/** Title 1 */}
                            <div className='delay-100'>MY</div>
                            {/** Title 2 */}
                            <div className='translate-y-[300%] group-hover:translate-y-0 transition-all duration-300 delay-150'>WORKS</div>
                            {/** Icon */}
                            <div className='text-xl translate-y-[300%] group-hover:translate-y-0
                            transition-all duration-300 delay-200'>
                              <BsArrowRight/>
                            </div>
                          </div>
                            
                          </div>
                        </div>
                      </div>
                    )

                  })
                }
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default WorkSlider
