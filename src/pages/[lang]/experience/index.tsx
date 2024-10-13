import Heading from "@/components/Heading/Index";
import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import { useRouter } from 'next/router';

export default function Home() {
  const { lang }:any = useRouter().query;
  const dict = getDictionaryUseClient(lang);

  return (
    <>
      <Heading size="title" className='text-center text-dark-gray mt-4'>{dict.page_experience.title}</Heading>

      <div className='w-full mt-[60px] mx-auto pb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-9'>
          <div className='relative rounded-lg border border-1 px-7 py-4'>
            <div className='absolute right-[25px] top-[-25px] rounded-full w-[40px] h-[40px] flex items-center justify-center bg-purple text-white text-sm'>
              <label>PJ</label>
            </div>
            <h1 className='text-[15px]'>IETÉ</h1>
            <h3 className='text-[13px] font-bold text-blue'>Dev. Fullstack Pleno</h3>
            <label className='text-black text-sm'>10/2021 - 06/2024</label>

            <h3 className='text-[13px] font-bold text-black my-2'>{dict.page_experience.responsibilities}</h3>
            <ul className='w-full text-xs'>
              <li>- {dict.page_experience.texts.development_full_stack};</li>
              <li>- APIs RESTfull;</li>
              <li>- {dict.page_experience.texts.architecture_multi_tenancy};</li>
              <li>- {dict.page_experience.texts.solid_and_psr12}.</li>
            </ul>

            <h3 className='text-[13px] font-bold text-black my-2'>{dict.page_experience.projects}</h3>
            <ul className='w-full text-xs'>
              <li>- SIMED;</li>
              <li>- Easit;</li>
              <li>- Accountabiblity;</li>
              <li>- SSSystem.</li>
            </ul>
          </div>

          <div className='relative rounded-lg border border-1 px-7 py-4'>
            <div className='absolute right-[25px] top-[-25px] rounded-full w-[40px] h-[40px] flex items-center bg-purple justify-center text-white text-sm'>
              <label>PJ</label>
            </div>

            <h1 className='text-[15px]'>IHOLD Bank</h1>
            <h3 className='text-[13px] font-bold text-blue'>Dev. Fullstack Pleno</h3>
            <label className='text-black text-sm'>09/2023 - 01/2024</label>

            <h3 className='text-[13px] font-bold text-black my-2'>{dict.page_experience.responsibilities}</h3>
            <ul className='w-full text-xs'>
              <li>- {dict.page_experience.texts.cartos_api_integration};</li>
              <li>- {dict.page_experience.texts.cnab_400_shipment_file_creation}. </li>
            </ul>

            <h3 className='text-[13px] font-bold text-black my-2'>{dict.page_experience.projects}</h3>
            <ul className='w-full text-xs'>
              <li>- IHOLD Bank.</li>
            </ul>
          </div>

          <div className='relative rounded-lg border border-1 px-7 py-4'>
          <div className='absolute right-[25px] top-[-25px] rounded-full w-[40px] h-[40px] flex items-center bg-purple justify-center text-white text-sm'>
              <label>PJ</label>
            </div>
            <h1 className='text-[15px]'>Score Milk</h1>
            <h3 className='text-[13px] font-bold text-blue'>Dev. Frontend Júnior</h3>
            <label className='text-black text-sm'>07/2023 - 09/2023</label>

            <h3 className='text-[13px] font-bold text-black my-2'>{dict.page_experience.responsibilities}</h3>
            <ul className='w-full text-xs'>
              <li>- {dict.page_experience.texts.frontend_development_in_vuejs}.</li>
            </ul>

            <h3 className='text-[13px] font-bold text-black my-2'>{dict.page_experience.projects}</h3>
            <ul className='w-full text-xs'>
              <li>- Snack Prompts.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
    
  )
}
