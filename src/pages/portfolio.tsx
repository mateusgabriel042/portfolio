import { useState } from 'react';
import { SkillIconSelector } from '@/data/skills'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Heading from '@/components/Heading/Index';
import { dataPortfolio } from '@/data/portfolio'

export default function Home() {
  const [currentPortfolio, setCurrentPortfolio] = useState(0);

  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : Portfólio : .</Heading>
      <div className='w-full mt-9 mx-auto'>
        <div className='relative grid grid-cols-3 gap-7 justify-between' id='slideshow'>

          <div className=''>
            <Heading size="subtitle" className='mb-3 text-justify text-dark-gray'>
              {dataPortfolio[currentPortfolio].projectName}:
            </Heading>

            <div className='w-full h-[200px] bg-gray-100'>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-full border border-1"
              >
                {dataPortfolio[currentPortfolio].slides.map((item: string, index: any) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`/assets/images/portfolio/${dataPortfolio[currentPortfolio].dir}/${item}`}
                      className='w-full'
                      width={400}
                      height={400}
                      alt='img-portfolio'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <Heading size="paragraph" className='mt-5 text-justify'>
              {dataPortfolio[currentPortfolio].description}
            </Heading>
          </div>

          <div>
            <Heading size="subtitle" className='mb-3 text-justify text-dark-gray'>
              Desenvolvimento:
            </Heading>

            <div className='grid grid-cols-4 gap-7 border border-1 p-4'>

              {dataPortfolio[currentPortfolio].iconsSkills.map((item: any, index: any) => (
                <div className='w-[50px] h-[50px] rounded-full bg-gray-50 flex justify-center items-center text-gray-700' key={index}>
                  <SkillIconSelector iconName={item.icon} size={item.size} />
                </div>
              ))}
            </div>
          </div>

          <div className=''>
            <Heading size="subtitle" className='mb-3 text-justify text-dark-gray'>
              Projetos:
            </Heading>

            <div className='flex flex-col gap-3'>
              {dataPortfolio.map((item: any, index: any) => (
                <button
                  className={`px-4 py-2 text-sm ${index === currentPortfolio ? 'border-transparent bg-blue text-white' : 'border border-1 text-gray-500'}`}
                  key={index}
                  onClick={() => setCurrentPortfolio(index)}
                >
                  {item.projectName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
