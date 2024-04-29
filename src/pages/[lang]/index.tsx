import React, {useEffect} from 'react'
import Heading from '@/components/Heading/Index'
import { FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa'
import { MdEmail, MdMan3 } from 'react-icons/md'
import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import { useRouter } from 'next/router';


export default function Home() {
  const { lang }:any = useRouter().query;
  const dict = getDictionaryUseClient(lang);

  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : {dict.page_about.title} : .</Heading>

      <div className='w-[calc(100%-9%)] mt-9 mx-auto h-[calc(100%-18%)]'>
        <div className='w-full flex justify-center gap-x-4'>
          <div className='flex text-dark-gray items-center gap-x-2'>
            <FaBirthdayCake size="15" className="mt-[-3px]"/>
            <label className='text-sm'>25 {dict.page_about.years}</label>
          </div>
          <div className='flex text-dark-gray items-center gap-x-2'>
            <FaMapMarkerAlt size="15" className="mt-[-3px]" />
            <label className='text-sm'>Natal/RN</label>
          </div>
          <div className='flex text-dark-gray items-center gap-x-2'>
            <MdMan3 size="17" className="mt-[-3px]"/>
            <label className='text-sm'>{dict.page_about.single}</label>
          </div>
          <div className='flex text-dark-gray items-center gap-x-2'>
            <MdEmail size="17" className="mt-[-1px]"/>
            <label className='text-sm'>mateus.gabriel042@gmail.com</label>
          </div>
        </div>

        <Heading size="paragraph" className='mt-4 w-full text-center px-20'>
          {dict.page_about.texts.text_about}
        </Heading>

        <div className='flex justify-center gap-x-3 mt-12'>
          <a href="#" className='px-7 py-1 rounded-full bg-blue text-white text-sm' target='_blank'>{dict.page_about.curriculum}</a>
          <a href="#" className='px-7 py-1 rounded-full bg-linkedin text-white text-sm' target='_blank'>Linkedin</a>
        </div>

        <div className='flex justify-center items-center mt-14'>
          <div className='w-[560px] h-[85px] flex bg-white border-gray-light border'>
            <div className='w-[140px] h-full flex flex-col items-center justify-center'>
              <label className='text-sm text-black'>{dict.page_about.projects}</label>
              <span className='text-[30px] text-black leading-tight'>8</span>
            </div>

            <div className='w-[140px] h-full flex flex-col items-center justify-center'>
              <label className='text-sm text-black'>{dict.page_about.certificates}</label>
              <span className='text-[30px] text-black leading-tight'>17</span>
            </div>

            <div className='w-[140px] h-full flex flex-col items-center justify-center'>
              <label className='text-sm text-black'>{dict.page_about.years_of_experience}</label>
              <span className='text-[30px] text-black leading-tight'>4</span>
            </div>

            <div className='w-[140px] h-full flex flex-col items-center justify-center'>
              <label className='text-sm text-black'>{dict.page_about.publications}</label>
              <span className='text-[30px] text-black leading-tight'>0</span>
            </div>
          </div>
        </div>

      </div>
    </>
    
  )
}
