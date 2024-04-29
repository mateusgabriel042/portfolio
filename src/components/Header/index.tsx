import SocialNetwork from '../SocialNetworks';
import Image from 'next/image';
import StylesSidebar from '../Sidebar/style.module.css'
import { LuMenu } from "react-icons/lu";
import Styles from './style.module.css'
import SelectLanguage from '../SelectLanguage';

export const Header = () => {

  let showSidebar = false;

  const toggleSidebar = () => {
    const area_sidebar:any = document.getElementById('area_sidebar');
    const sidebar:any = document.getElementById('sidebar');
    if(!showSidebar){
      area_sidebar.classList.add(StylesSidebar.show_area_sidebar);
      sidebar.classList.add(StylesSidebar.show_sidebar);
    } else {
      sidebar.classList.remove(StylesSidebar.show_sidebar)
      area_sidebar.classList.remove(StylesSidebar.show_area_sidebar);;
      
    }
    showSidebar = !showSidebar
  }

  return (
    <div className={`${Styles.header} fixed bg-white flex gap-x-[30px] justify-between items-center top-0 left-0 w-full px-[5%] py-[20px]`}>
      <div className="flex w-full bg-white h-full justify-between items-center px-[35px] py-[15px] rounded-lg shadow border border-1">
        <div className='flex gap-x-[35px]'>
          <Image src="/assets/images/logo_mg.png" width={40} height={40} alt="" />

          <div className="flex flex-col gap-y-1 h-full justify-center">
            <label className="text-dark-gray text-sm font-light">Mateus Gabriel</label>
            <span className="text-black text-sm font-bold">Dev. Full Stack pleno</span>
          </div>
        </div>

        <div className={`${Styles.social_network_in_head}`}>
          <SocialNetwork />
        </div>

        
        <div className={`${Styles.languages_select} gap-2`}>
          <SelectLanguage />
        </div>

        
        <button className={`${Styles.button_toggle_sidebar}`} onClick={() => toggleSidebar()}>
          <LuMenu size={25} />
        </button>
      </div>

      <div className={`${Styles.social_network_out_head}`}>
        <SocialNetwork />
      </div>
      
    </div>
  )
}

export default Header;