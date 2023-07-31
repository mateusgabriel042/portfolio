import { useRouter } from 'next/router';
import Link from 'next/link';

export const Sidebar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="fixed h-[100vh] w-[300px] overflow-y-auto pt-10">
      <div className="w-[160px] h-[160px] rounded-full border border-1 border-[#9ba5b4] flex justify-center items-center mx-auto">
        <div className="w-[150px] h-[150px] rounded-full border border-2 border-[#38bdf8] flex justify-center items-center">
          <div className="w-[140px] h-[140px] rounded-full  bg-[#9ba5b4]">

          </div>
        </div>
      </div>


      <ul className="flex flex-col w-full items-start gap-y-4 pl-14 mt-10">
        <li className="w-full flex items-center gap-x-3 relative">
          <img src="/assets/images/icon_arrow_right.png" className={currentPath === '/' ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
          <img src="/assets/images/icon_sidebar_about.png" className='w-[27px]' alt="img-portfolio" />
          <Link href="/" className={currentPath === '/' ? 'active font-bold' : 'color-black font-bold'}>Sobre</Link>
        </li>

        <li className="w-full flex items-center gap-x-3 relative">
          <img src="/assets/images/icon_arrow_right.png" className={currentPath === '/portfolio' ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
          <img src="/assets/images/icon_sidebar_portfolio.png" className='w-[27px]' alt="img-portfolio" />
          <Link href="/portfolio" className={currentPath === '/portfolio' ? 'active font-bold' : 'color-black font-bold'}>Portfólio</Link>
        </li>

        <li className="w-full flex items-center gap-x-3 relative">
          <img src="/assets/images/icon_arrow_right.png" className={currentPath === '/skills' ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
          <img src="/assets/images/icon_sidebar_skills.png"  className='w-[27px]' alt="img-portfolio" />
          <Link href="/skills" className={currentPath === '/skills' ? 'active font-bold' : 'color-black font-bold'}>Habilidades</Link>
        </li>

        <li className="w-full flex items-center gap-x-3 relative">
          <img src="/assets/images/icon_arrow_right.png" className={currentPath === '/experience' ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
          <img src="/assets/images/icon_sidebar_experience.png"  className='w-[27px]' alt="img-portfolio" />
          <Link href="/experience" className={currentPath === '/experience' ? 'active font-bold' : 'color-black font-bold'}>Experiências</Link>
        </li>

        <li className="w-full flex items-center gap-x-3 relative">
          <img src="/assets/images/icon_arrow_right.png" className={currentPath === '/formation' ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
          <img src="/assets/images/icon_sidebar_formations.png"  className='w-[27px]' alt="img-portfolio" />
          <Link href="/formation" className={currentPath === '/formation' ? 'active font-bold' : 'color-black font-bold'}>Formação</Link>
        </li>

        <li className="w-full flex items-center gap-x-3 relative">
          <img src="/assets/images/icon_arrow_right.png" className={currentPath === '/contacts' ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
          <img src="/assets/images/icon_sidebar_contacts.png"  className='w-[27px]' alt="img-portfolio" />
          <Link href="/contacts" className={currentPath === '/contacts' ? 'active font-bold' : 'color-black font-bold'}>Contatos</Link>
        </li>

        <li className="w-full flex items-center gap-x-3 relative">
          <img src="/assets/images/icon_arrow_right.png" className={currentPath === '/blog' ? 'w-[10px] absolute left-[-20px]' : 'hidden'} />
          <img src="/assets/images/icon_sidebar_blog.png"  className='w-[27px]' alt="img-portfolio" />
          <Link href="/blog" className={currentPath === '/blog' ? 'active font-bold' : 'color-black font-bold'}>Blog</Link>
        </li>
      </ul>

      <div className='w-full flex flex-col pl-14 mt-10 gap-y-1'>
        <label className='text-dark-gray text-xs'>Criado com o Next.js</label>
        <label className='text-dark-gray text-xs'>Ultima atualização: 30/08/2023</label>
      </div>
    </div>
  )
}

export default Sidebar;