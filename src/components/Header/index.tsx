import { useState } from 'react';
import SocialNetwork from '../SocialNetworks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export const Header = () => {

  const router = useRouter();
  const { lang }:any = router.query;
  
  const pathname = usePathname()

  const getPathName = (language: string) => {
    const paths = pathname?.split('/');
    const newPath = paths?.slice(2).join('/');
    return `/${language}/${newPath}`
  }

  return (
    <div className="fixed bg-white flex gap-x-[30px] justify-between items-center top-0 left-0 w-full px-[5%] py-[20px]">
      <div className="flex w-full bg-white h-full justify-between items-center px-[35px] py-[15px] rounded-lg shadow border border-1">
        <div className='flex gap-x-[35px]'>
          <Image src="/assets/images/logo_mg.png" width={40} height={40} alt="" />

          <div className="flex flex-col gap-y-1 h-full justify-center">
            <label className="text-dark-gray text-sm font-light">Mateus Gabriel</label>
            <span className="text-black text-sm font-bold">Dev. Full Stack pleno</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={getPathName('pt-BR')} className={`${lang == 'pt-BR' ? 'bg-dark-gray text-white' : 'text-dark-gray'} border border-dark-gray rounded-full w-[45px] h-[45px] flex items-center justify-center py-1 text-xs`}>PT-BR</Link>
          <Link href={getPathName('en-US')} className={`${lang == 'en-US' ? 'bg-dark-gray text-white' : 'text-dark-gray'} border border-dark-gray rounded-full w-[45px] h-[45px] flex items-center justify-center py-1 text-xs`}>EN-US</Link>
        </div>
      </div>

      <div className=''>
        <SocialNetwork />
      </div>
    </div>
  )
}

export default Header;