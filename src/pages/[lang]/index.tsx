import React, {useEffect} from 'react'
import Heading from '@/components/Heading/Index'
import { FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa'
import { MdEmail, MdMan3 } from 'react-icons/md'
import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import { useRouter } from 'next/router';
import Styles from "./styles.module.css";

export default function Home() {
  const { lang }:any = useRouter().query;
  const dict = getDictionaryUseClient(lang);

  return (
    <>
      <Heading size="title" className='text-center text-dark-gray mt-4'>{dict.page_about.title}</Heading>

      <div className='w-full mt-9 mx-auto pb-8'>
        <div className='w-full flex flex-wrap justify-center gap-4'>
          <div className='flex text-dark-gray items-center gap-x-2 box_shadow_sm rounded-full px-[15px] py-[5px]'>
            <FaBirthdayCake size="15" className="mt-[-3px]"/>
            <label className='text-sm font-light'>26 {dict.page_about.years}</label>
          </div>
          <div className='flex text-dark-gray items-center gap-x-2 box_shadow_sm rounded-full px-[15px] py-[5px]'>
            <FaMapMarkerAlt size="15" className="mt-[-3px]" />
            <label className='text-sm font-light'>Natal/RN</label>
          </div>
          <div className='flex text-dark-gray items-center gap-x-2 box_shadow_sm rounded-full px-[15px] py-[5px]'>
            <MdMan3 size="17" className="mt-[-3px]"/>
            <label className='text-sm font-light'>{dict.page_about.single}</label>
          </div>
          <div className='flex text-dark-gray items-center gap-x-2 box_shadow_sm rounded-full px-[15px] py-[5px]'>
            <MdEmail size="17" className="mt-[-1px]"/>
            <label className='text-sm font-light'>mateus.gabriel042@gmail.com</label>
          </div>
        </div>

        <Heading size="paragraph" className='mt-14 w-full text-center px-5 md:px-20'>
          {dict.page_about.texts.text_about}
        </Heading>

        {/*<div className='w-full flex justify-center gap-x-3 mt-12'>
          <a href="https://docs.google.com/document/d/1o_ccDMUHTmElE-KDThLiSL_uiqIRZBI1dxdcGbMMyDQ/edit?usp=sharing" className='px-7 py-1 rounded-full bg-blue text-white text-sm' target='_blank'>{dict.page_about.curriculum}</a>
          <a href="https://www.linkedin.com/in/mateus-gabriel-a64885144/" className='px-7 py-1 rounded-full bg-linkedin text-white text-sm' target='_blank'>Linkedin</a>
        </div>*/}

        <div className='w-full flex flex-wrap justify-center gap-[25px] items-center mt-14'>
          <div className='flex gap-x-[6px] items-center justify-center box_shadow_sm font-light rounded-full px-[25px] py-[9px]'>
            <label className='text-sm text-dark-gray'>{dict.page_about.projects}:</label>
            <span className='text-sm text-dark-gray leading-tight'>8</span>
          </div>

          <div className={`flex gap-x-[6px] items-center justify-center box_shadow_sm font-light rounded-full px-[25px] py-[9px] ${Styles.experience_label}`}>
            <label className='text-sm'>{dict.page_about.experience}:</label>
            <span className='text-sm leading-tight'>6 {dict.page_about.years}</span>
          </div>

          <div className='flex gap-x-[6px] items-center justify-center box_shadow_sm font-light rounded-full px-[25px] py-[9px]'>
            <label className='text-sm text-dark-gray'>{dict.page_about.seniority}:</label>
            <span className='text-sm text-dark-gray leading-tight'>{dict.page_about.analyst}</span>
          </div>
        </div>
      </div>
    </>
    
  )
}
