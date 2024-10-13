import Heading from "@/components/Heading/Index";
import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import { useRouter } from 'next/router';

export default function Home() {
  const { lang }:any = useRouter().query;
  const dict = getDictionaryUseClient(lang);

  return (
    <>
      <Heading size="title" className='text-center text-dark-gray mt-4'>{dict.page_blog.title}</Heading>
      <div className='w-[calc(100%-9%)] mt-5 mx-auto pb-8'>
        <div className='flex justify-center mt-[140px]'>
          <Heading size="subtitle" className="text-dark-gray text-center">{dict.page_blog.texts.shortly}</Heading>
        </div>
      </div>
    </>
    
  )
}
