import { useState } from 'react';
import { SkillIconSelector } from '@/data/skills'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Heading from '@/components/Heading/Index';
import { dataPortfolio } from '@/data/portfolio'
import Styles from './style.module.css'
import { IoCloseCircle } from "react-icons/io5";

export default function Home() {
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const [imageSelected, setImageSelected] = useState('');

  const viewImageInModal = (src: string) => {
    setImageSelected(src);
    toggleBoxViewImage();
  }

  const toggleBoxViewImage = () => {
    const box:any = document.getElementById("box_image_show");
    const subBox:any = document.getElementById("sub_box_image_show");
    
    if (box.style.left === '-100vw') {
      box.style.left = "0px";
      subBox.style.transform = "scale(1)";
    } else {
      box.style.left = "-100vw";
      subBox.style.transform = "scale(0)";
    }
    
  }

  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : Portfólio : .</Heading>

      <div className={`${Styles.box_image_show}`} id='box_image_show'>
        <div id='sub_box_image_show'>
          <button onClick={() => toggleBoxViewImage()}>
            <IoCloseCircle size={40} />
          </button>

          {imageSelected !== '' ?

          <Image
            src={imageSelected}
            alt=''
            width={650}
            height={650}
          /> : <></>
        }
        </div>
      </div>

      <div className='w-full mt-9 mx-auto'>
        <div className='relative grid grid-cols-10 gap-7 justify-between' id='slideshow'>

          <div className='col-span-4'>
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
                  <SwiperSlide key={index} className='h-full'>
                    <Image
                      src={`/assets/images/portfolio/${dataPortfolio[currentPortfolio].dir}/${item}`}
                      className='w-full cursor-pointer transition-transform transform hover:scale-110'
                      layout='fill'
                      onClick={() => viewImageInModal(`/assets/images/portfolio/${dataPortfolio[currentPortfolio].dir}/${item}`)}
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

          <div className='col-span-3'>
            <Heading size="subtitle" className='mb-3 text-justify text-dark-gray'>
              Desenvolvimento:
            </Heading>

            <div className='grid grid-cols-3 gap-7 border border-1 p-5'>

              {dataPortfolio[currentPortfolio].iconsSkills.map((item: any, index: any) => (
                <div className='w-[50px] h-[50px] rounded-full bg-gray-50 flex justify-center items-center text-gray-700' key={index}>
                  <SkillIconSelector iconName={item.icon} size={item.size} />
                </div>
              ))}
            </div>
          </div>

          <div className='col-span-3'>
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
