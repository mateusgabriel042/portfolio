import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import Styles from './style.module.css'
import SelectLanguage from '../SelectLanguage';
import SocialNetwork from '../SocialNetworks';

export const toggleSidebar = () => {
  const areaSidebar:any = document.getElementById('area_sidebar');
  const sidebar:any = document.getElementById('sidebar');

  if(areaSidebar.classList.contains(Styles.show_area_sidebar)){
    areaSidebar.classList.remove(Styles.show_area_sidebar);
    sidebar.classList.remove(Styles.show_sidebar);
  } else {
    areaSidebar.classList.add(Styles.show_area_sidebar);
    sidebar.classList.add(Styles.show_sidebar);
  }
}

export const Sidebar = () => {
  const currentPath = usePathname()

  const { lang }: any = useRouter().query;
  const dict = getDictionaryUseClient(lang);


  return (
    <div className={`${Styles.area_sidebar} w-[30%] relative bg-red-300 border-r-gray-light border-r`} id='area_sidebar'>
      <div className={`${Styles.sidebar}`} id='sidebar'>
        <div className={`${Styles.social_network_sidebar} flex justify-center w-full my-5 items-center`}>
          <SocialNetwork />
        </div>
        <ul className="flex flex-col w-full items-start gap-y-4 pl-14">
          <li className="w-full flex items-center gap-x-3 relative">
            <Image src="/assets/images/icon_arrow_right.png" width={50} height={50} alt='' className={currentPath === `/${lang}` ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
            <Image src="/assets/images/icon_sidebar_about.png" width={50} height={50} className='w-[27px]' alt="img-portfolio" />
            <Link href={`/${lang}`} className={currentPath === `/${lang}` ? 'active font-bold' : 'color-black font-bold'} onClick={() => toggleSidebar()}>
              {dict.sidebar.about}
            </Link>
          </li>

          <li className="w-full flex items-center gap-x-3 relative">
            <Image src="/assets/images/icon_arrow_right.png" width={50} height={50} alt='' className={currentPath === `/${lang}/portfolio` ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
            <Image src="/assets/images/icon_sidebar_portfolio.png" width={50} height={50} className='w-[27px]' alt="img-portfolio" />
            <Link href={`/${lang}/portfolio`} className={currentPath === `/${lang}/portfolio` ? 'active font-bold' : 'color-black font-bold'} onClick={() => toggleSidebar()}>
              {dict.sidebar.portfolio}
            </Link>
          </li>

          <li className="w-full flex items-center gap-x-3 relative">
            <Image src="/assets/images/icon_arrow_right.png" width={50} height={50} alt='' className={currentPath === `/${lang}/skills` ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
            <Image src="/assets/images/icon_sidebar_skills.png" width={50} height={50} className='w-[27px]' alt="img-portfolio" />
            <Link href={`/${lang}/skills`} className={currentPath === `/${lang}/skills` ? 'active font-bold' : 'color-black font-bold'} onClick={() => toggleSidebar()}>
              {dict.sidebar.skills}
            </Link>
          </li>

          <li className="w-full flex items-center gap-x-3 relative">
            <Image src="/assets/images/icon_arrow_right.png" width={50} height={50} alt='' className={currentPath === `/${lang}/experience` ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
            <Image src="/assets/images/icon_sidebar_experience.png" width={50} height={50} className='w-[27px]' alt="img-portfolio" />
            <Link href={`/${lang}/experience`} className={currentPath === `/${lang}/experience` ? 'active font-bold' : 'color-black font-bold'} onClick={() => toggleSidebar()}>
              {dict.sidebar.experience}
            </Link>
          </li>

          <li className="w-full flex items-center gap-x-3 relative">
            <Image src="/assets/images/icon_arrow_right.png" width={50} height={50} alt='' className={currentPath === `/${lang}/formation` ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
            <Image src="/assets/images/icon_sidebar_formations.png" width={50} height={50} className='w-[27px]' alt="img-portfolio" />
            <Link href={`/${lang}/formation`} className={currentPath === `/${lang}/formation` ? 'active font-bold' : 'color-black font-bold'} onClick={() => toggleSidebar()}>
              {dict.sidebar.formation}
            </Link>
          </li>

          <li className="w-full flex items-center gap-x-3 relative">
            <Image src="/assets/images/icon_arrow_right.png" width={50} height={50} alt='' className={currentPath === `/${lang}/contacts` ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
            <Image src="/assets/images/icon_sidebar_contacts.png" width={50} height={50} className='w-[27px]' alt="img-portfolio" />
            <Link href={`/${lang}/contacts`} className={currentPath === `/${lang}/contacts` ? 'active font-bold' : 'color-black font-bold'} onClick={() => toggleSidebar()}>
              {dict.sidebar.contacts}
            </Link>
          </li>

          <li className="w-full flex items-center gap-x-3 relative">
            <Image src="/assets/images/icon_arrow_right.png" width={50} height={50} alt='' className={currentPath === `/${lang}/blog` ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
            <Image src="/assets/images/icon_sidebar_blog.png" width={50} height={50} className='w-[27px]' alt="img-portfolio" />
            <Link href={`/${lang}/blog`} className={currentPath === `/${lang}/blog` ? 'active font-bold' : 'color-black font-bold'} onClick={() => toggleSidebar()}>
              {dict.sidebar.blog}
            </Link>
          </li>
        </ul>

        <div className={`${Styles.select_language_sidebar} flex justify-center w-full my-5 gap-7 items-center`}>
          <SelectLanguage />
        </div>

        <div className="w-full flex flex-col pl-14 mt-10 gap-y-1">
          <label className='text-dark-gray text-xs'>{dict.sidebar.texts.built_with_nextjs}</label>
          <label className='text-dark-gray text-xs'>{dict.sidebar.texts.last_updated}: 30/04/2024</label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;