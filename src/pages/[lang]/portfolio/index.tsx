import { useState } from 'react';
import { SkillIconSelector } from '@/data/skills'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Heading from '@/components/Heading/Index';
import { returnDataPortfolio } from '@/data/portfolio'
import Styles from './style.module.css'
import { IoCloseCircle } from "react-icons/io5";
import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import { useRouter } from 'next/router';

export default function Home() {
  const { lang }: any = useRouter().query;
  const dict = getDictionaryUseClient(lang);
  const dataPortfolio = returnDataPortfolio(dict.page_portfolio)

  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const [imageSelected, setImageSelected] = useState('');

  const viewImageInModal = (src: string) => {
    setImageSelected(src);
    toggleBoxViewImage();
  }

  const toggleBoxViewImage = () => {
    const box: any = document.getElementById("box_image_show");
    const subBox: any = document.getElementById("sub_box_image_show");

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
      <Heading size="title" className='text-center text-black mt-4'>. : {dict.page_portfolio.title} : .</Heading>


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

      <div className='w-full mt-9 mx-auto pb-8'>
        <div className={`${Styles.grid_portfolio} relative justify-between`}>
          <div className={`${Styles.nav_projects}`}>
            <Heading size="subtitle" className='mb-3 text-justify text-dark-gray'>
              {dict.page_portfolio.projects}:
            </Heading>

            <div className={`grid grid-cols-2 md:grid-cols-1 gap-3`}>
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

          <div className={`${Styles.slide_projects}`}>
            <Heading size="subtitle" className='mb-3 text-justify text-dark-gray'>
              {returnDataPortfolio(dict.page_portfolio)[currentPortfolio].projectName}:
            </Heading>

            <div className={`${Styles.area_slide} w-full bg-gray-100`}>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-full border border-1"
              >
                {dataPortfolio[currentPortfolio].slides.map((item: string, index: any) => (
                  <SwiperSlide key={index} className={`${Styles.swiper_slide} max-h-[220px] h-full`}>
                    <Image
                      src={`/assets/images/portfolio/${dataPortfolio[currentPortfolio].dir}/${item}`}
                      className='object-cover w-full cursor-pointer transition-transform transform hover:scale-110'
                      width={300}
                      height={270}
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

          <div className={`${Styles.tachs_used_to_projects} flex items-center`}>
            
            <div className='flex w-full justify-center items-center h-auto gap-5 flex-wrap'>
              
              {dataPortfolio[currentPortfolio].iconsSkills.map((item: any, index: any) => (
                <div className='w-[50px] h-[50px] rounded-full border border-1 shadow flex justify-center items-center text-gray-700' key={index}>
                  <SkillIconSelector iconName={item.icon} size={item.size} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
