import { useState } from 'react';
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoBehance } from "react-icons/bi";
import { DiGithubAlt } from "react-icons/di";
import SocialNetwork from '../SocialNetworks';
import Image from 'next/image';

export const Header = () => {
  const [isOnsideFacebook, setIsOnsideFacebook] = useState(false);
  const [isOnsideInstagram, setIsOnsideInstagram] = useState(false);
  const [isOnsideLinkedin, setIsOnsideLinkedin] = useState(false);
  const [isOnsideGithub, setIsOnsideGithub] = useState(false);
  const [isOnsideBehance, setIsOnsideBehance] = useState(false);

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

        <div className="flex">
          <button type="button" className="bg-dark-gray text-white rounded-full px-10 py-1 text-xs z-10 translate-x-[20px]">Português</button>
          <button type="button" className="bg-gray-light text-black rounded-full px-10 transform py-1 text-xs">Inglês</button>
        </div>
      </div>

      <div className=''>
        <SocialNetwork />
      </div>
    </div>
  )
}

export default Header;