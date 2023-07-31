import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoBehance } from "react-icons/bi";
import { DiGithubAlt } from "react-icons/di";

export const Header = () => {
  return (
    <div className="fixed flex justify-between top-0 right-0 w-[calc(100vw-300px)] h-[80px]">
      <div className="flex flex-col gap-y-1 h-full justify-center">
        <label className="text-dark-gray text-sm font-light">Mateus Gabriel</label>
        <span  className="text-black text-sm font-light">Dev. Full Stack pleno</span>
      </div>

      <div className="flex items-center gap-x-2">
        <Link href="#" target="_blank" className="w-6 h-6 rounded-full flex justify-center items-center bg-dark-gray text-white">
          <BiLogoFacebook size="18" />
        </Link>

        <Link href="#" target="_blank" className="w-6 h-6 rounded-full flex justify-center items-center bg-dark-gray text-white">
          <BiLogoInstagramAlt size="16" />
        </Link>

        <Link href="#" target="_blank" className="w-6 h-6 rounded-full flex justify-center items-center bg-dark-gray text-white">
          <BiLogoLinkedin size="16" />
        </Link>

        <Link href="#" target="_blank" className="w-6 h-6 rounded-full flex justify-center items-center bg-dark-gray text-white">
          <DiGithubAlt size="18" />
        </Link>

        <Link href="#" target="_blank" className="w-6 h-6 rounded-full flex justify-center items-center bg-dark-gray text-white">
          <BiLogoBehance size="18" />
        </Link>
      </div>

      <div className="flex items-center h-full">
        <button type="button" className="bg-dark-gray text-white rounded-full px-10 py-1 text-xs z-10">Português</button>
        <button type="button" className="bg-gray-light text-black rounded-full px-10 transform translate-x-[-20px] py-1 text-xs">Inglês</button>
      </div>
    </div>
  )
}

export default Header;