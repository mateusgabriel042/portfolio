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
import { FaRegImages } from "react-icons/fa6";
import Link from 'next/link';

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
      <Heading size="title" className='text-center text-dark-gray mt-4'>{dict.page_portfolio.title}</Heading>

      <ul className={Styles.list_portfolio}>
        {dataPortfolio.map((item: any, index: any) => (
          <li key={index}>
            <div className='relative'>
              <Heading size="subtitle" className='w-full text-dark-gray'>{item.projectName}</Heading>
              
              {/*<button onClick={() => toggleBoxViewImage()} className='absolute flex justify-center items-center w-[35px] h-[35px] right-[10px] top-[10px] bg-gray-light text-dark-gray rounded-full'>
                <FaRegImages size={20} />
              </button>*/}

              <div className='w-full flex items-center flex-wrap gap-x-[10px] text-dark-gray'>
                {item.iconsSkills.map((icon: any, index: any) => (
                  <SkillIconSelector iconName={icon.icon} size={icon.size} key={index}/>
                ))}
              </div>

              <Heading size="text" className='text-dark-gray font-light'>
              {item.description}
              </Heading>

              <Link href={item.link} target='blank'>
                <Heading size="text" className='text-green'>Visitar</Heading>
              </Link>
            </div>
          </li>
        ))}
      </ul>

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
    </>
  )
}
